import React, { useState } from 'react';
import { ColoringPage } from '../types/coloring';
import { DINO_PAGES, FRONT_COVER_PAGE, BELONGS_TO_PAGE } from '../data/dinoPages';
import { Sparkles, Eye, Palette } from 'lucide-react';

interface PageGridProps {
  onSelectPage: (page: ColoringPage) => void;
  onColorPage: (page: ColoringPage) => void;
  selectedPageId: number;
}

export const PageGrid: React.FC<PageGridProps> = ({
  onSelectPage,
  onColorPage,
  selectedPageId,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const allPages = [FRONT_COVER_PAGE, BELONGS_TO_PAGE, ...DINO_PAGES];

  const filteredPages = allPages.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'cover') return p.id === 0 || p.id === -1;
    return p.category === filter;
  });

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6">
      {/* Grid Filter Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            30 Cute Dinosaurs Coloring Pages
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Click any page thumbnail to inspect, adjust print margins, or test-color
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
          {[
            { id: 'all', label: 'All Pages (32)' },
            { id: 'cover', label: 'Cover & Intro (2)' },
            { id: 'cute', label: 'Cute Dinos (14)' },
            { id: 'action', label: 'Action & Sports (9)' },
            { id: 'scenery', label: 'Jungle & Park (5)' },
            { id: 'mandala', label: 'Mandala (1)' },
            { id: 'bonus', label: 'Bonus Page (1)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pages Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredPages.map((page) => {
          const isSelected = page.id === selectedPageId;
          const isCover = page.id === 0;
          const isBelongsTo = page.id === -1;

          return (
            <div
              key={page.id}
              className={`group bg-white rounded-xl border p-3 flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-0.5 ${
                isSelected
                  ? 'border-emerald-600 ring-2 ring-emerald-500/30'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Thumbnail Container */}
              <div
                onClick={() => onSelectPage(page)}
                className="aspect-[500/650] bg-slate-50 rounded-lg border border-slate-100 overflow-hidden relative cursor-pointer flex items-center justify-center p-1.5 group-hover:bg-slate-100/60 transition-colors"
              >
                {page.imageUrl ? (
                  <img
                    src={page.imageUrl}
                    alt={page.title}
                    className="w-full h-full object-contain pointer-events-none"
                    loading="lazy"
                  />
                ) : (
                  <svg
                    viewBox="0 0 500 650"
                    className="w-full h-full text-slate-800 pointer-events-none"
                    dangerouslySetInnerHTML={{ __html: page.svgContent }}
                  />
                )}

                {/* Hover overlay shortcuts */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPage(page);
                    }}
                    className="p-2 bg-white text-slate-900 rounded-lg shadow-sm hover:scale-105 transition-transform"
                    title="View & Inspect"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onColorPage(page);
                    }}
                    className="p-2 bg-emerald-600 text-white rounded-lg shadow-sm hover:scale-105 transition-transform"
                    title="Color Digitally"
                  >
                    <Palette className="w-4 h-4" />
                  </button>
                </div>

                {/* Page number badge */}
                <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold rounded">
                  {isCover ? 'COVER' : isBelongsTo ? 'INTRO' : `#${page.id}`}
                </div>

                {/* AI Art badge */}
                {page.imageUrl && (
                  <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-emerald-600 text-white text-[9px] font-semibold rounded flex items-center gap-0.5 shadow-xs">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>AI Art</span>
                  </div>
                )}
              </div>

              {/* Title & info */}
              <div className="mt-2.5">
                <h3 className="text-xs font-semibold text-slate-900 line-clamp-1" title={page.title}>
                  {page.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1 italic mt-0.5">
                  {page.subtitle}
                </p>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5 pt-1.5 border-t border-slate-100">
                  <span className="capitalize">{page.category}</span>
                  <span>{page.ageRecommendation}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
