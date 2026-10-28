import React from 'react';
import { Download, Sparkles, BookOpen, Layers, DollarSign } from 'lucide-react';

interface HeaderProps {
  onOpenExport: () => void;
  onOpenCompare: () => void;
  onOpenGumroadKit: () => void;
  onOpenThemes: () => void;
  onOpenGeminiStudio: () => void;
  activeView: 'reader' | 'grid' | 'color';
  setActiveView: (view: 'reader' | 'grid' | 'color') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenExport,
  onOpenCompare,
  onOpenGumroadKit,
  onOpenThemes,
  onOpenGeminiStudio,
  activeView,
  setActiveView,
}) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-8 px-6 py-3.5 bg-white border-b border-slate-200 shadow-xs">
      {/* Zone 1: Single text wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
            D
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
            DinoColor Studio
          </span>
        </a>
      </div>

      {/* Zone 2: Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
        <button
          onClick={() => setActiveView('reader')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            activeView === 'reader' ? 'text-emerald-700 font-semibold' : ''
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Book Reader</span>
        </button>

        <button
          onClick={() => setActiveView('grid')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            activeView === 'grid' ? 'text-emerald-700 font-semibold' : ''
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>All 30 Pages</span>
        </button>

        <button
          onClick={onOpenCompare}
          className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
        >
          US Letter vs A5 Guide
        </button>

        <button
          onClick={onOpenGumroadKit}
          className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <DollarSign className="w-4 h-4 text-emerald-600" />
          <span>Gumroad Seller Kit</span>
        </button>

        <button
          onClick={onOpenThemes}
          className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>10 US Themes</span>
        </button>

        <button
          onClick={onOpenGeminiStudio}
          className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span className="font-semibold">Gemini Dino Studio</span>
        </button>
      </nav>

      {/* Zone 3: Primary Action */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onOpenExport}
          className="flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 active:scale-98 transition-all shadow-xs whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Export Print PDFs &amp; ZIP</span>
          <span className="sm:hidden">Export PDF/ZIP</span>
        </button>
      </div>
    </header>
  );
};
