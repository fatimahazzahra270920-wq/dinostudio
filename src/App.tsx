import React, { useState } from 'react';
import { ColoringPage, PageFormat, BookConfig } from './types/coloring';
import { DINO_PAGES, FRONT_COVER_PAGE, BELONGS_TO_PAGE } from './data/dinoPages';
import { Header } from './components/Header';
import { PageViewer } from './components/PageViewer';
import { PageGrid } from './components/PageGrid';
import { ColoringCanvas } from './components/ColoringCanvas';
import { ExportModal } from './components/ExportModal';
import { FormatCompareModal } from './components/FormatCompareModal';
import { GumroadKitModal } from './components/GumroadKitModal';
import { ThemesModal } from './components/ThemesModal';
import { GeminiDinoStudioModal } from './components/GeminiDinoStudioModal';
import { FolderCheck, Printer, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<ColoringPage>(DINO_PAGES[0]);
  const [activeView, setActiveView] = useState<'reader' | 'grid' | 'color'>('reader');
  const [paperFormat, setPaperFormat] = useState<PageFormat>('us-letter');

  const [bookConfig, setBookConfig] = useState<BookConfig>({
    title: 'Cute Dinosaurs Coloring Book',
    subtitle: 'Screen-Free Creative Fun for Kids Ages 3-8',
    authorName: 'Creative Studio',
    childName: '',
    lineThickness: 'standard',
    showMargins: true,
    showPageNumbers: true,
    paperFormat: 'us-letter',
  });

  // Modals state
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [isGumroadKitOpen, setIsGumroadKitOpen] = useState<boolean>(false);
  const [isThemesOpen, setIsThemesOpen] = useState<boolean>(false);
  const [isGeminiStudioOpen, setIsGeminiStudioOpen] = useState<boolean>(false);

  const allNavPages = [FRONT_COVER_PAGE, BELONGS_TO_PAGE, ...DINO_PAGES];

  const handleNextPage = () => {
    const idx = allNavPages.findIndex((p) => p.id === currentPage.id);
    if (idx < allNavPages.length - 1) {
      setCurrentPage(allNavPages[idx + 1]);
    }
  };

  const handlePrevPage = () => {
    const idx = allNavPages.findIndex((p) => p.id === currentPage.id);
    if (idx > 0) {
      setCurrentPage(allNavPages[idx - 1]);
    }
  };

  const handleSelectPage = (id: number) => {
    const target = allNavPages.find((p) => p.id === id);
    if (target) {
      setCurrentPage(target);
    }
  };

  const handleTriggerPrint = (fmt: PageFormat = paperFormat) => {
    setPaperFormat(fmt);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Bar Navigation */}
      <Header
        onOpenExport={() => setIsExportOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenGumroadKit={() => setIsGumroadKitOpen(true)}
        onOpenThemes={() => setIsThemesOpen(true)}
        onOpenGeminiStudio={() => setIsGeminiStudioOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Mobile-Only Navigation Bar */}
      <div className="no-print lg:hidden flex items-center justify-around bg-white border-b border-slate-200 px-3 py-2 text-xs font-medium">
        <button
          onClick={() => setActiveView('reader')}
          className={`px-2.5 py-1 rounded-md transition-colors ${
            activeView === 'reader' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-600'
          }`}
        >
          Book Reader
        </button>
        <button
          onClick={() => setActiveView('grid')}
          className={`px-2.5 py-1 rounded-md transition-colors ${
            activeView === 'grid' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-600'
          }`}
        >
          All 30 Pages
        </button>
        <button
          onClick={() => setIsGumroadKitOpen(true)}
          className="px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 transition-colors"
        >
          Seller Kit
        </button>
        <button
          onClick={() => setIsThemesOpen(true)}
          className="px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 transition-colors"
        >
          Themes
        </button>
      </div>

      {/* Sub-Header Hero Strip */}
      <section className="no-print bg-white border-b border-slate-200 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-800">Cute Dinosaurs Collection</span>
            <span aria-hidden="true">·</span>
            <span>30 Pages + Front Cover + Belong-To Sheet</span>
            <span aria-hidden="true">·</span>
            <span>US Letter &amp; ISO A5 Dual-Format PDF</span>
            <span aria-hidden="true">·</span>
            <span>Pure B&amp;W 300 DPI</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsGeminiStudioOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-100 border border-emerald-300/80 rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Gemini Dino Studio</span>
            </button>
            <button
              onClick={() => setIsCompareOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <FolderCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Separated Folders Info</span>
            </button>
            <button
              onClick={() => setIsExportOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Download Ready Files</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Interactive Body Area */}
      <main className="no-print flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeView === 'reader' && (
          <PageViewer
            page={currentPage}
            format={paperFormat}
            config={bookConfig}
            onFormatChange={setPaperFormat}
            onConfigChange={(updates) => setBookConfig((prev) => ({ ...prev, ...updates }))}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            onSelectPage={handleSelectPage}
            onStartColoring={() => setActiveView('color')}
            onPrintPage={() => handleTriggerPrint(paperFormat)}
          />
        )}

        {activeView === 'grid' && (
          <PageGrid
            selectedPageId={currentPage.id}
            onSelectPage={(p) => {
              setCurrentPage(p);
              setActiveView('reader');
            }}
            onColorPage={(p) => {
              setCurrentPage(p);
              setActiveView('color');
            }}
          />
        )}

        {activeView === 'color' && (
          <ColoringCanvas
            page={currentPage}
            format={paperFormat}
            config={bookConfig}
            onClose={() => setActiveView('reader')}
          />
        )}
      </main>

      {/* Clean Editorial Footer */}
      <footer className="no-print mt-auto bg-white border-t border-slate-200 px-6 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-800">DinoColor Studio</span>
            <span aria-hidden="true">·</span>
            <span>US Market Gumroad Digital Printable Coloring Books</span>
            <span aria-hidden="true">·</span>
            <span>Ready for Instant Commercial Download</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <button onClick={() => setIsCompareOpen(true)} className="hover:text-slate-900 transition-colors">
              Print Specs (8.5×11" vs A5)
            </button>
            <button onClick={() => setIsGumroadKitOpen(true)} className="hover:text-slate-900 transition-colors">
              Seller Copy
            </button>
            <button onClick={() => setIsThemesOpen(true)} className="hover:text-slate-900 transition-colors">
              10 Copyright-Free Themes
            </button>
          </div>
        </div>
      </footer>

      {/* Hidden Print Container - Activated only when printing via window.print() */}
      <div className="hidden print-only">
        <div className="print-page-sheet">
          {currentPage.imageUrl ? (
            <img
              src={currentPage.imageUrl}
              alt={currentPage.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <svg
              viewBox="0 0 500 650"
              style={{ width: '100%', height: '100%' }}
              dangerouslySetInnerHTML={{ __html: currentPage.svgContent }}
            />
          )}
        </div>
      </div>

      {/* Modals */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        config={bookConfig}
        onDirectPrint={handleTriggerPrint}
      />

      <FormatCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
      />

      <GumroadKitModal
        isOpen={isGumroadKitOpen}
        onClose={() => setIsGumroadKitOpen(false)}
      />

      <ThemesModal
        isOpen={isThemesOpen}
        onClose={() => setIsThemesOpen(false)}
      />

      <GeminiDinoStudioModal
        isOpen={isGeminiStudioOpen}
        onClose={() => setIsGeminiStudioOpen(false)}
        onSelectPage={(p) => {
          setCurrentPage(p);
          setActiveView('reader');
        }}
      />
    </div>
  );
}
