import { PageFormat, DimensionInfo, BookConfig } from '../types/coloring';

export const DIMENSIONS: Record<PageFormat, DimensionInfo> = {
  'us-letter': {
    format: 'us-letter',
    name: 'US Letter (Standard US)',
    widthMm: 215.9,
    heightMm: 279.4,
    widthInches: 8.5,
    heightInches: 11.0,
    widthPt: 612,
    heightPt: 792,
    widthPx300Dpi: 2550,
    heightPx300Dpi: 3300,
    aspectRatio: 8.5 / 11.0, // ~0.7727
    safeMarginInches: 0.5,
    safeMarginMm: 12.7,
    description: 'Standard home & school paper size in the United States & Canada. Essential for US Gumroad buyers.',
    marketFit: 'US, Canada, Mexico, Philippines'
  },
  'a5': {
    format: 'a5',
    name: 'ISO A5 (Half Sheet / Travel Size)',
    widthMm: 148.0,
    heightMm: 210.0,
    widthInches: 5.83,
    heightInches: 8.27,
    widthPt: 419.53,
    heightPt: 595.28,
    widthPx300Dpi: 1748,
    heightPx300Dpi: 2480,
    aspectRatio: 148 / 210, // ~0.7047
    safeMarginInches: 0.47,
    safeMarginMm: 12.0,
    description: 'Compact international booklet format. Popular for portable toddler clipboards & half-page mini books.',
    marketFit: 'UK, Europe, Australia, Asia, Latin America'
  }
};

/**
 * Returns complete print specifications for the given page format
 */
export function getDimensionInfo(format: PageFormat): DimensionInfo {
  return DIMENSIONS[format] || DIMENSIONS['us-letter'];
}

/**
 * Calculates printable bounding box accounting for the mandatory 0.5" safety margin
 */
export function getPrintableArea(format: PageFormat) {
  const dim = getDimensionInfo(format);
  const marginPt = (dim.safeMarginMm / 25.4) * 72;
  return {
    leftPt: marginPt,
    topPt: marginPt,
    widthPt: dim.widthPt - (marginPt * 2),
    heightPt: dim.heightPt - (marginPt * 2),
    marginPt
  };
}

/**
 * Calculates stroke width in points based on selected toddler/standard/detailed preset
 */
export function getStrokeWidthPt(preset: BookConfig['lineThickness']): number {
  switch (preset) {
    case 'toddler':
      return 3.5;
    case 'detailed':
      return 1.8;
    case 'standard':
    default:
      return 2.5;
  }
}

/**
 * Generates Gumroad product listing copy formatted for US parents & teachers
 */
export function generateGumroadCopy(bookTitle: string, totalPages: number): string {
  return `# ${bookTitle} (Printable PDF Coloring Book for Kids Ages 3-8)

Looking for screen-free, creative fun for your little dino lover? 🦖

This adorable **${totalPages}-page digital printable coloring book** is packed with charming, friendly dinosaurs doing fun activities—from eating ice cream to skateboarding and exploring outer space!

Designed specifically for easy home and classroom printing, with clean bold outlines and pure black-and-white vector artwork that toddlers and young kids love to color.

---

### 📦 WHAT YOU WILL RECEIVE:
Your instant download includes organized print-ready files:

📁 **US-Letter-Print-Ready/**
- Complete ${totalPages}-Page Book in US Letter PDF (8.5" x 11" - standard US home printer paper)
- 0.5" safe margins (guaranteed no clipped edges on any printer!)
- High-resolution 300 DPI quality

📁 **A5-Print-Ready/**
- Complete ${totalPages}-Page Book in ISO A5 PDF (5.8" x 8.3" - great for mini travel binders)
- Print-ready with standard European & international margins

📁 **Gumroad-Seller-Kit & Bonus Materials**
- "This Book Belongs To" personalization page
- Bonus "Draw Your Own Dino" creative activity page
- Official Coloring Certificate of Completion
- Print guide with paper recommendations for crayons, markers & colored pencils

---

### ✨ FEATURES PARENTS & TEACHERS LOVE:
- **Bold 2.5–3pt Line Art**: Perfect for little hands developing motor skills
- **Zero Grayscale Shading**: Pure crisp black and white saves your printer ink
- **Large Coloring Areas**: Minimal clutter, maximizing coloring enjoyment
- **Print Unlimited Copies**: Print favorites over and over again!

*Instant Digital Download - No physical book will be shipped.*
`;
}
