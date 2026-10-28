import React from 'react';
import { ColoringPage, PageFormat, BookConfig } from '../types/coloring';
import { DINO_PAGES, FRONT_COVER_PAGE, BELONGS_TO_PAGE } from '../data/dinoPages';
import { getDimensionInfo } from '../utils/pdfDimensions';
import { ChevronLeft, ChevronRight, Printer, Palette, ShieldCheck, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';

interface PageViewerProps {
  page: ColoringPage;
  format: PageFormat;
  config: BookConfig;
  onFormatChange: (fmt: PageFormat) => void;
  onConfigChange: (updates: Partial<BookConfig>) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
  onSelectPage: (id: number) => void;
  onStartColoring: () => void;
  onPrintPage: () => void;
}

export const PageViewer: React.FC<PageViewerProps> = ({
  page,
  format,
  config,
  onFormatChange,
  onConfigChange,
  onNextPage,
  onPrevPage,
  onSelectPage,
  onStartColoring,
  onPrintPage,
}) => {
  const [zoomLevel, setZoomLevel] = React.useState<number>(100);
  const [artworkMode, setArtworkMode] = React.useState<'ai' | 'vector'>('ai');
  const dim = getDimensionInfo(format);

  const isCover = page.id === 0;
  const isBelongsTo = page.id === -1;
  const allNavPages = [FRONT_COVER_PAGE, BELONGS_TO_PAGE, ...DINO_PAGES];
  const currentIndex = allNavPages.findIndex((p) => p.id === page.id);

  // Line thickness multiplier
  const strokeMultiplier = config.lineThickness === 'toddler' ? 1.3 : config.lineThickness === 'detailed' ? 0.75 : 1.0;

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-7xl mx-auto">
      {/* Left / Center: Interactive High-Precision Book Preview */}
      <div className="flex-1 w-full flex flex-col items-center">
        {/* Top Control Bar for Viewport */}
        <div className="w-full max-w-2xl flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
          {/* Format Selector Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => onFormatChange('us-letter')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                format === 'us-letter'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              US Letter (8.5 × 11")
            </button>
            <button
              onClick={() => onFormatChange('a5')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                format === 'a5'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ISO A5 (5.8 × 8.3")
            </button>
          </div>

          {/* Artwork Render Style Switcher (if AI image available) */}
          {page.imageUrl && (
            <div className="flex items-center gap-1 p-1 bg-emerald-50 border border-emerald-200/70 rounded-lg">
              <button
                onClick={() => setArtworkMode('ai')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                  artworkMode === 'ai'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-emerald-800 hover:bg-emerald-100/60'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Gemini AI Art</span>
              </button>
              <button
                onClick={() => setArtworkMode('vector')}
                className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                  artworkMode === 'vector'
                    ? 'bg-white text-slate-800 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Vector Mode
              </button>
            </div>
          )}

          {/* Quick Actions (Print, Color, Zoom) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z) => Math.max(75, z - 10))}
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 transition-colors"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-500 tabular-nums w-10 text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(130, z + 10))}
              className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 transition-colors"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              onClick={onStartColoring}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors whitespace-nowrap"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Color Digitally</span>
            </button>

            <button
              onClick={onPrintPage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Page</span>
            </button>
          </div>
        </div>

        {/* Paper Surface with Realistic Physical Shadow and Dimensions */}
        <div
          className="relative bg-white rounded-lg shadow-xl border border-slate-200 transition-all overflow-hidden flex flex-col justify-between"
          style={{
            width: `${Math.min(520, (520 * zoomLevel) / 100)}px`,
            aspectRatio: `${dim.widthMm} / ${dim.heightMm}`,
          }}
        >
          {/* Printable Margin Overlay Guide (if enabled) */}
          {config.showMargins && (
            <div
              className="absolute inset-0 pointer-events-none border border-dashed border-emerald-400/50 z-20"
              style={{
                margin: format === 'us-letter' ? '4.5%' : '5.7%',
              }}
            >
              <span className="absolute bottom-1 right-2 text-[10px] font-mono text-emerald-700 bg-white/95 px-1.5 py-0.5 rounded shadow-xs border border-emerald-200">
                0.5" Safe Margin
              </span>
            </div>
          )}

          {/* Top Page Running Header (for interior pages) */}
          {!isCover && !isBelongsTo && (
            <div className="px-7 pt-4 pb-1.5 flex items-center justify-between border-b border-slate-200 text-slate-800 select-none">
              <span className="text-[11px] font-bold tracking-wider uppercase truncate">
                {page.title}
              </span>
              <span className="text-[10px] font-medium text-slate-400">
                Cute Dinosaurs Coloring Book
              </span>
            </div>
          )}

          {/* Main Artwork Container (Gemini AI Illustration or Clean Vector) */}
          <div className="flex-1 flex items-center justify-center p-2 overflow-hidden bg-white">
            {page.imageUrl && artworkMode === 'ai' ? (
              <img
                src={page.imageUrl}
                alt={page.title}
                className="max-w-full max-h-full object-contain select-none"
              />
            ) : (
              <svg
                viewBox="0 0 500 650"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full select-none"
                style={{
                  color: '#0f172a',
                  strokeWidth: strokeMultiplier,
                }}
                dangerouslySetInnerHTML={{ __html: page.svgContent }}
              />
            )}
          </div>

          {/* Bottom Page Running Footer */}
          {!isCover && !isBelongsTo && (
            <div className="px-7 pb-3.5 pt-1.5 flex items-center justify-between border-t border-slate-200 text-slate-500 text-[10px] select-none">
              <span className="truncate max-w-[70%] italic text-slate-600">
                💡 {page.prompt}
              </span>
              {config.showPageNumbers && (
                <span className="font-semibold text-slate-800 tabular-nums">
                  Page {page.id} of {DINO_PAGES.length}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Bottom Pager Controls */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={onPrevPage}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 transition-colors shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Page Selector dropdown */}
          <select
            value={page.id}
            onChange={(e) => onSelectPage(Number(e.target.value))}
            className="text-xs font-medium text-slate-800 bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            <option value={0}>Front Cover</option>
            <option value={-1}>This Book Belongs To</option>
            {DINO_PAGES.map((p) => (
              <option key={p.id} value={p.id}>
                Page {p.id}: {p.title}
              </option>
            ))}
          </select>

          <button
            onClick={onNextPage}
            disabled={currentIndex === allNavPages.length - 1}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 transition-colors shadow-xs"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Sidebar: Page Specs, Settings, & Gumroad Print Tips */}
      <div className="w-full lg:w-80 flex flex-col gap-5 shrink-0">
        {/* Page Information Box */}
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Page Detail &amp; Indonesian Translation</span>
          </div>
          <h2 className="text-base font-bold text-slate-900 leading-snug">
            {page.title}
          </h2>
          <p className="text-xs text-slate-500 italic mt-0.5">
            "{page.subtitle}"
          </p>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2 text-xs">
            <div className="flex justify-between text-slate-600">
              <span className="text-slate-400">Target Age:</span>
              <span className="font-semibold text-slate-800">{page.ageRecommendation}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span className="text-slate-400">Theme Category:</span>
              <span className="font-semibold capitalize text-slate-800">{page.category}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span className="text-slate-400">Activity Prompt:</span>
              <span className="font-medium text-slate-700 text-right max-w-[65%]">
                {page.prompt}
              </span>
            </div>
            <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-50">
              <span className="text-slate-400">Art Style:</span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                {page.imageUrl ? (
                  <>
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>Gemini AI 300 DPI Line Art</span>
                  </>
                ) : (
                  <span>Vector Outline Art</span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Print Settings & Safety Config */}
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
            Print Engine Customization
          </h3>

          <div className="flex flex-col gap-4 text-xs">
            {/* Line Thickness */}
            <div>
              <label className="font-medium text-slate-700 block mb-1.5">
                Line Stroke Weight:
              </label>
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-lg">
                <button
                  onClick={() => onConfigChange({ lineThickness: 'toddler' })}
                  className={`py-1 text-center font-medium rounded transition-colors ${
                    config.lineThickness === 'toddler' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
                  }`}
                >
                  Toddler (3.5pt)
                </button>
                <button
                  onClick={() => onConfigChange({ lineThickness: 'standard' })}
                  className={`py-1 text-center font-medium rounded transition-colors ${
                    config.lineThickness === 'standard' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
                  }`}
                >
                  Standard (2.5pt)
                </button>
                <button
                  onClick={() => onConfigChange({ lineThickness: 'detailed' })}
                  className={`py-1 text-center font-medium rounded transition-colors ${
                    config.lineThickness === 'detailed' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
                  }`}
                >
                  Detailed (1.8pt)
                </button>
              </div>
            </div>

            {/* Toggle Switches */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-slate-700 font-medium">Show 0.5" Safe Margin</span>
              <input
                type="checkbox"
                checked={config.showMargins}
                onChange={(e) => onConfigChange({ showMargins: e.target.checked })}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-700 font-medium">Show Page Numbers</span>
              <input
                type="checkbox"
                checked={config.showPageNumbers}
                onChange={(e) => onConfigChange({ showPageNumbers: e.target.checked })}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
            </div>
          </div>
        </div>

        {/* US Market Gumroad Tips Callout */}
        <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-100 text-xs text-emerald-900 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>US Market Compliant</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            All 30 pages are built with <strong>0.5" safety bleed margins</strong>, pure black-and-white vector line art, and English typography — guaranteed to print cleanly on any standard US home or school printer without clipping!
          </p>
        </div>
      </div>
    </div>
  );
};
