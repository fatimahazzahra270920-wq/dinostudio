import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, DollarSign, Users, Check } from 'lucide-react';
import { POPULAR_US_THEMES } from '../data/themes';
import { ThemeIdea } from '../types/coloring';

interface ThemesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemesModal: React.FC<ThemesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeIdea>(POPULAR_US_THEMES[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-200 shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                10 Copyright-Free Best-Selling US Themes
              </h2>
              <p className="text-xs text-slate-500">
                Original non-infringing themes with evergreen demand on Gumroad &amp; Etsy
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Column Split: List on Left, Details on Right */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Themes List (Left) */}
          <div className="w-full md:w-72 border-r border-slate-200 overflow-y-auto p-3 bg-slate-50 flex flex-col gap-1.5 shrink-0">
            {POPULAR_US_THEMES.map((theme) => {
              const isSelected = selectedTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme)}
                  className={`text-left p-3 rounded-xl transition-all text-xs flex flex-col gap-0.5 ${
                    isSelected
                      ? 'bg-white text-emerald-900 font-bold border border-emerald-300 shadow-xs ring-1 ring-emerald-400/40'
                      : 'text-slate-700 hover:bg-white/80 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">{theme.name}</span>
                    <span className="text-[10px] font-normal text-slate-400">{theme.targetAge}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 line-clamp-1">{theme.priceRange}</span>
                </button>
              );
            })}
          </div>

          {/* Theme Inspector (Right) */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Theme Analysis &amp; US Market Fit
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-100">
                  {selectedTheme.priceRange} Gumroad Sweetspot
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">{selectedTheme.name}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {selectedTheme.description}
              </p>

              {/* Why It Sells Box */}
              <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900">
                <span className="font-bold block mb-1">Why This Theme Sells in the US:</span>
                <p className="leading-relaxed">{selectedTheme.whyItSells}</p>
              </div>

              {/* Example Page Concepts */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Ready-to-Draw Page Drafts (Idea Starters)
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedTheme.pageIdeas.map((idea, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 flex items-start gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{idea}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended SEO Keywords */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  High-Search US Keywords for Listing
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTheme.recommendedKeywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-[11px] font-mono border border-slate-200"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Close Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
