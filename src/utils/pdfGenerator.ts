import jsPDF from 'jspdf';
import JSZip from 'jszip';
import { ColoringPage, PageFormat, BookConfig } from '../types/coloring';
import { DINO_PAGES, FRONT_COVER_PAGE, BELONGS_TO_PAGE } from '../data/dinoPages';
import { getDimensionInfo, getStrokeWidthPt, generateGumroadCopy } from './pdfDimensions';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Converts a ColoringPage SVG string into a standalone, styled SVG XML string
 */
export function buildPageSvgXml(
  page: ColoringPage,
  format: PageFormat,
  config: BookConfig
): string {
  const dim = getDimensionInfo(format);
  const strokeMultiplier = config.lineThickness === 'toddler' ? 1.3 : config.lineThickness === 'detailed' ? 0.75 : 1.0;

  // Header and footer text
  const isCover = page.id === 0;
  const isBelongsTo = page.id === -1;
  const pageNumText = (page.id > 0 && config.showPageNumbers) ? `Page ${page.id} of ${DINO_PAGES.length}` : '';
  const pageTitleUpperEscaped = page.id > 0 ? escapeXml(page.title.toUpperCase()) : '';
  const escapedPrompt = escapeXml(page.prompt);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 650" width="${dim.widthPx300Dpi}" height="${dim.heightPx300Dpi}" color="#0f172a" style="background-color: #ffffff; color: #0f172a;">
    <style>
      text { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      .stroke-var { stroke-width: ${getStrokeWidthPt(config.lineThickness)}px; }
    </style>
    
    <!-- Printable Margin Safe Area (0.5 inch visual guideline if enabled) -->
    ${config.showMargins ? `<rect x="25" y="25" width="450" height="600" fill="none" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,4" />` : ''}
    
    <!-- Page Header (for content pages) -->
    ${(!isCover && !isBelongsTo && pageTitleUpperEscaped) ? `
      <g transform="translate(35, 32)">
        <text x="0" y="0" font-size="12" font-weight="bold" fill="#1e293b" letter-spacing="0.5">${pageTitleUpperEscaped}</text>
        <line x1="0" y1="6" x2="430" y2="6" stroke="#1e293b" stroke-width="1.5" />
      </g>
    ` : ''}

    <!-- Main Vector Art -->
    <g transform="scale(1)" style="stroke-width: ${strokeMultiplier}">
      ${page.svgContent}
    </g>

    <!-- Page Footer (for content pages) -->
    ${(!isCover && !isBelongsTo) ? `
      <g transform="translate(35, 630)">
        <line x1="0" y1="0" x2="430" y2="0" stroke="#cbd5e1" stroke-width="1" />
        <text x="0" y="12" font-size="9" fill="#64748b">${escapedPrompt}</text>
        ${pageNumText ? `<text x="430" y="12" font-size="9" font-weight="bold" text-anchor="end" fill="#334155">${pageNumText}</text>` : ''}
      </g>
    ` : ''}
  </svg>`;
}

/**
 * Rasterizes an SVG string onto a canvas and returns a high-resolution PNG data URL
 */
export async function rasterizeSvgToDataUrl(
  svgXml: string,
  width: number,
  height: number
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const svgBlob = new Blob([svgXml], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('Canvas context could not be created'));
        return;
      }

      // Fill pure white background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // Draw SVG centered maintaining aspect ratio
      const scale = Math.min(width / 500, height / 650);
      const drawW = 500 * scale;
      const drawH = 650 * scale;
      const drawX = (width - drawW) / 2;
      const drawY = (height - drawH) / 2;

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      URL.revokeObjectURL(url);

      const dataUrl = canvas.toDataURL('image/png', 1.0);
      resolve(dataUrl);
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };

    img.src = url;
  });
}

/**
 * Loads an image from a URL or relative path and returns a high-res JPEG data URL
 */
export async function loadImageDataUrl(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || 1200;
      canvas.height = img.naturalHeight || 1600;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(src);
        return;
      }
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', 0.95));
    };
    img.onerror = () => reject(new Error(`Failed to load image at: ${src}`));
    img.src = src;
  });
}

export interface ProgressCallback {
  (current: number, total: number, status: string): void;
}

/**
 * Generates a complete print-ready PDF for a specific page format (US Letter or A5)
 */
export async function generateBookPdf(
  format: PageFormat,
  config: BookConfig,
  pages: ColoringPage[] = [FRONT_COVER_PAGE, BELONGS_TO_PAGE, ...DINO_PAGES],
  onProgress?: ProgressCallback
): Promise<{ pdf: jsPDF; blob: Blob; filename: string }> {
  const dim = getDimensionInfo(format);

  // Initialize jsPDF with exact dimensions in points
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: [dim.widthPt, dim.heightPt],
    compress: true
  });

  const total = pages.length;

  for (let i = 0; i < total; i++) {
    const page = pages[i];
    if (onProgress) {
      onProgress(i + 1, total, `Rendering page ${i + 1}/${total}: ${page.title}`);
    }

    if (i > 0) {
      pdf.addPage([dim.widthPt, dim.heightPt], 'portrait');
    }

    const margin = dim.safeMarginInches * 72;
    const printW = dim.widthPt - (margin * 2);
    const printH = dim.heightPt - (margin * 2);

    if (page.imageUrl) {
      try {
        const imgDataUrl = await loadImageDataUrl(page.imageUrl);
        pdf.addImage(imgDataUrl, 'JPEG', margin, margin, printW, printH, undefined, 'FAST');

        // Professional running header & footer for content pages
        if (page.id > 0) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(9);
          pdf.setTextColor(30, 41, 59);
          pdf.text(page.title.toUpperCase(), margin, margin - 8);

          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(8);
          pdf.setTextColor(148, 163, 184);
          pdf.text('Cute Dinosaurs Coloring Book', dim.widthPt - margin, margin - 8, { align: 'right' });

          pdf.setDrawColor(226, 232, 240);
          pdf.setLineWidth(0.75);
          pdf.line(margin, margin - 4, dim.widthPt - margin, margin - 4);

          // Footer
          const footerY = dim.heightPt - margin + 14;
          pdf.line(margin, dim.heightPt - margin + 4, dim.widthPt - margin, dim.heightPt - margin + 4);
          pdf.setFont('helvetica', 'italic');
          pdf.setFontSize(8);
          pdf.setTextColor(100, 116, 139);
          pdf.text(page.prompt, margin, footerY);

          if (config.showPageNumbers) {
            pdf.setFont('helvetica', 'bold');
            pdf.text(`Page ${page.id} of ${DINO_PAGES.length}`, dim.widthPt - margin, footerY, { align: 'right' });
          }
        }
      } catch (err) {
        console.warn('Fallback to vector SVG for page', page.id, err);
        const svgXml = buildPageSvgXml(page, format, config);
        const pngDataUrl = await rasterizeSvgToDataUrl(svgXml, 1200, 1560);
        pdf.addImage(pngDataUrl, 'PNG', margin, margin, printW, printH, undefined, 'FAST');
      }
    } else {
      const svgXml = buildPageSvgXml(page, format, config);
      // Rasterize at crisp high-res 1200x1560 to balance quality and generation speed
      const pngDataUrl = await rasterizeSvgToDataUrl(svgXml, 1200, 1560);
      pdf.addImage(pngDataUrl, 'PNG', margin, margin, printW, printH, undefined, 'FAST');
    }
  }

  const filename = format === 'us-letter'
    ? 'Cute-Dinosaurs-Coloring-Book-US-Letter.pdf'
    : 'Cute-Dinosaurs-Coloring-Book-A5.pdf';

  const blob = pdf.output('blob');
  return { pdf, blob, filename };
}

/**
 * Creates the complete Gumroad Digital Product Package in a multi-folder ZIP file:
 * - /US-Letter-Print-Ready/ (US Letter PDF + sample high-res page files)
 * - /A5-Print-Ready/ (A5 PDF + sample high-res page files)
 * - /Gumroad-Seller-Kit/ (Listing title & description, tags, pricing guide, print tips for buyers)
 */
export async function generateGumroadZipPackage(
  config: BookConfig,
  onProgress?: ProgressCallback
): Promise<{ zipBlob: Blob; filename: string }> {
  const zip = new JSZip();

  // Create separated folders as requested by user
  const letterFolder = zip.folder('US-Letter-Print-Ready');
  const a5Folder = zip.folder('A5-Print-Ready');
  const gumroadFolder = zip.folder('Gumroad-Seller-Kit');

  const allPages = [FRONT_COVER_PAGE, BELONGS_TO_PAGE, ...DINO_PAGES];

  // 1. Generate US Letter PDF
  if (onProgress) onProgress(1, 4, 'Generating US Letter 8.5x11" PDF...');
  const letterResult = await generateBookPdf('us-letter', config, allPages);
  letterFolder?.file('Cute-Dinosaurs-Coloring-Book-US-Letter.pdf', letterResult.blob);

  // 2. Generate A5 PDF
  if (onProgress) onProgress(2, 4, 'Generating ISO A5 Booklet PDF...');
  const a5Result = await generateBookPdf('a5', config, allPages);
  a5Folder?.file('Cute-Dinosaurs-Coloring-Book-A5.pdf', a5Result.blob);

  // 3. Add Individual Print-Ready Sample SVGs to each folder for easy quick-printing
  if (onProgress) onProgress(3, 4, 'Packaging individual print-ready vector pages...');
  const samplePages = [FRONT_COVER_PAGE, DINO_PAGES[0], DINO_PAGES[1], DINO_PAGES[2], DINO_PAGES[28], DINO_PAGES[29]];
  
  samplePages.forEach((p) => {
    const cleanName = p.id === 0 ? 'Cover' : p.id === -1 ? 'Belongs-To' : `Page-${String(p.id).padStart(2, '0')}`;
    const letterSvg = buildPageSvgXml(p, 'us-letter', config);
    const a5Svg = buildPageSvgXml(p, 'a5', config);
    letterFolder?.file(`Individual-Pages/${cleanName}.svg`, letterSvg);
    a5Folder?.file(`Individual-Pages/${cleanName}.svg`, a5Svg);
  });

  // 4. Populate Gumroad Seller Kit
  if (onProgress) onProgress(4, 4, 'Packaging Gumroad listing metadata and buyer instructions...');
  
  const listingText = generateGumroadCopy('Cute Dinosaurs Coloring Book', DINO_PAGES.length);
  gumroadFolder?.file('Gumroad-Product-Listing-Copy.md', listingText);

  const buyerInstructions = `PRINTING INSTRUCTIONS FOR BUYERS:
==================================
Thank you for purchasing the Cute Dinosaurs Printable Coloring Book!

WHICH FILE SHOULD I USE?
- If you are in the USA or Canada: Print the "Cute-Dinosaurs-Coloring-Book-US-Letter.pdf" file on standard Letter paper (8.5 x 11 inches).
- If you are in the UK, Europe, Australia, or International: Print the "Cute-Dinosaurs-Coloring-Book-A5.pdf" on A5 paper or print 2 pages per sheet on standard A4 paper.

PRINTER SETTINGS:
1. Open PDF with Adobe Acrobat Reader, Preview, or Chrome.
2. Select "Actual Size" or "100%" (Do not scale or stretch - 0.5" safety margins are already built-in).
3. Select "Black & White" or "Monochrome" to save colored ink.
4. Set print quality to "High" or "Best" for the crispest bold lines.

RECOMMENDED PAPER:
- Regular copy paper (20-24 lb): Great for crayons and colored pencils.
- Heavy cardstock (65-80 lb): Best for washable markers or watercolor paints to prevent bleed-through!

Happy Coloring!`;

  gumroadFolder?.file('Printing-Instructions-For-Buyers.txt', buyerInstructions);

  const sellerTips = `GUMROAD SELLER TIPS & OPTIMIZATION:
======================================
1. SWEET SPOT PRICING:
   - Base Price: $4.99 (Great impulse purchase price for parents)
   - Upsell Bundle: $9.99 (Cute Dinosaurs + Kawaii Animals 2-Pack)
   
2. GUMROAD PRODUCT TAGS:
   coloring book, printable coloring pages, kids activities, dinosaur coloring, toddler pdf, homeschool printables, screen free kids

3. EMAIL LIST STRATEGY:
   - Offer Page 1 & Page 4 as a FREE 2-Page Sample PDF in exchange for parents' email addresses.
   - Upsell the full 30-Page book to your new email subscribers!`;

  gumroadFolder?.file('Seller-Strategy-and-Tags.txt', sellerTips);

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  const filename = 'Cute-Dinosaurs-Coloring-Book-Print-Ready-Package.zip';

  return { zipBlob, filename };
}
