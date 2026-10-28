import React, { useState } from 'react';
import { X, Download, FileText, FolderArchive, Printer, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { PageFormat, BookConfig } from '../types/coloring';
import { generateBookPdf, generateGumroadZipPackage } from '../utils/pdfGenerator';
import { DINO_PAGES, FRONT_COVER_PAGE, BELONGS_TO_PAGE } from '../data/dinoPages';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BookConfig;
  onDirectPrint: (format: PageFormat) => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  config,
  onDirectPrint,
}) => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [progressStatus, setProgressStatus] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [completedMessage, setCompletedMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownloadSinglePdf = async (format: PageFormat) => {
    setIsGenerating(true);
    setCompletedMessage(null);
    setProgressPercent(0);

    try {
      const allPages = [FRONT_COVER_PAGE, BELONGS_TO_PAGE, ...DINO_PAGES];
      const result = await generateBookPdf(
        format,
        config,
        allPages,
        (current, total, status) => {
          setProgressStatus(status);
          setProgressPercent(Math.round((current / total) * 100));
        }
      );

      // Trigger browser download
      const url = URL.createObjectURL(result.blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = result.filename;
      a.click();
      URL.revokeObjectURL(url);

      setCompletedMessage(`Successfully downloaded ${result.filename}!`);
    } catch (err) {
      console.error(err);
      setProgressStatus('Error generating PDF. Please retry.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadZipPackage = async () => {
    setIsGenerating(true);
    setCompletedMessage(null);
    setProgressPercent(0);

    try {
      const result = await generateGumroadZipPackage(config, (current, total, status) => {
        setProgressStatus(status);
        setProgressPercent(Math.round((current / total) * 100));
      });

      // Trigger browser download
      const url = URL.createObjectURL(result.zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = result.filename;
      a.click();
      URL.revokeObjectURL(url);

      setCompletedMessage('Downloaded complete ZIP with /US-Letter-Print-Ready/ and /A5-Print-Ready/ folders!');
    } catch (err) {
      console.error(err);
      setProgressStatus('Error generating ZIP package. Please retry.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Export Print-Ready PDF &amp; Gumroad Package
              </h2>
              <p className="text-xs text-slate-500">
                Generate 300 DPI vector PDFs for US Letter (8.5×11") and ISO A5
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isGenerating}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-40"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Realtime Generation Progress */}
        {isGenerating && (
          <div className="my-5 p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-semibold text-emerald-900">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                <span>{progressStatus || 'Preparing files...'}</span>
              </div>
              <span className="font-mono tabular-nums">{progressPercent}%</span>
            </div>
            {/* Progress bar track */}
            <div className="w-full bg-emerald-200/60 rounded-full h-2 overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Success message banner */}
        {completedMessage && (
          <div className="my-4 p-3.5 bg-emerald-100/70 border border-emerald-300 rounded-xl text-emerald-900 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{completedMessage}</span>
          </div>
        )}

        {/* Main Export Choices */}
        <div className="grid gap-3.5 my-5">
          {/* Choice 1: Complete ZIP with Both Sizes in Separate Folders (Top Recommended) */}
          <div className="p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/20 hover:bg-emerald-50/40 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-600 text-white shrink-0 mt-0.5">
                <FolderArchive className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Full Dual-Format ZIP Package (Recommended for Gumroad)
                  </h3>
                  <span className="text-[10px] font-bold uppercase bg-emerald-600 text-white px-2 py-0.5 rounded">
                    All-in-One
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Contains organized separated folders: <code className="text-emerald-800 font-mono">/US-Letter-Print-Ready/</code>, <code className="text-emerald-800 font-mono">/A5-Print-Ready/</code>, and <code className="text-emerald-800 font-mono">/Gumroad-Seller-Kit/</code> with listing copy &amp; buyer guides.
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadZipPackage}
              disabled={isGenerating}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg disabled:opacity-50 transition-colors shadow-xs shrink-0 whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download ZIP</span>
            </button>
          </div>

          {/* Choice 2: US Letter PDF Only */}
          <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  US Letter PDF (8.5 × 11 in)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete 32 pages (Cover + Belong-To + 30 Dinos) with 0.5" safe printer bleed.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleDownloadSinglePdf('us-letter')}
                disabled={isGenerating}
                className="flex-1 sm:flex-initial px-3.5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg disabled:opacity-50 transition-colors whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => onDirectPrint('us-letter')}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
                title="Direct browser print"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Choice 3: A5 PDF Only */}
          <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  ISO A5 Booklet PDF (5.8 × 8.3 in)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete 32 pages formatted for half-sheet travel binders and international printers.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => handleDownloadSinglePdf('a5')}
                disabled={isGenerating}
                className="flex-1 sm:flex-initial px-3.5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg disabled:opacity-50 transition-colors whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => onDirectPrint('a5')}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
                title="Direct browser print"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Printable Quality Guarantee */}
        <div className="p-3.5 bg-slate-50 rounded-xl text-slate-600 text-xs flex items-center gap-2 border border-slate-200">
          <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Pure black &amp; white 300 DPI vector output. No grayscale fills. Guaranteed crisp lines on inkjets and laser printers.
          </span>
        </div>
      </div>
    </div>
  );
};
