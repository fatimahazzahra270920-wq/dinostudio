import React from 'react';
import { X, CheckCircle, Info, ExternalLink } from 'lucide-react';
import { DIMENSIONS } from '../utils/pdfDimensions';

interface FormatCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormatCompareModal: React.FC<FormatCompareModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const letter = DIMENSIONS['us-letter'];
  const a5 = DIMENSIONS['a5'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Print Formats Guide: US Letter vs ISO A5
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Why providing both formats in separated folders is the key to selling on Gumroad
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* US Letter Card */}
          <div className="p-5 rounded-xl border-2 border-emerald-600/30 bg-emerald-50/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Primary Market (US &amp; Canada)
                </span>
                <span className="text-xs bg-emerald-600 text-white font-semibold px-2 py-0.5 rounded">
                  8.5 × 11 in
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">US Letter Format</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {letter.description}
              </p>

              <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="font-semibold text-slate-800">8.5" × 11.0" (215.9 × 279.4 mm)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Resolution (300 DPI):</span>
                  <span className="font-mono text-slate-800">2550 × 3300 px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Safe Bleed Margin:</span>
                  <span className="font-semibold text-emerald-700">0.5 inch (36 pt)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Buyers:</span>
                  <span className="text-slate-800 font-medium">US Parents, Teachers, Daycares</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero clipped margins on standard US home printers</span>
            </div>
          </div>

          {/* ISO A5 Card */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  International &amp; Travel Mini
                </span>
                <span className="text-xs bg-slate-800 text-white font-semibold px-2 py-0.5 rounded">
                  148 × 210 mm
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">ISO A5 Format</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {a5.description}
              </p>

              <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="font-semibold text-slate-800">5.83" × 8.27" (148 × 210 mm)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Resolution (300 DPI):</span>
                  <span className="font-mono text-slate-800">1748 × 2480 px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Safe Bleed Margin:</span>
                  <span className="font-semibold text-slate-700">12 mm (34 pt)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Buyers:</span>
                  <span className="text-slate-800 font-medium">UK, Europe, Travel Activity Binders</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-700">
              <CheckCircle className="w-4 h-4 text-slate-600 shrink-0" />
              <span>Prints 2 pages side-by-side on standard international A4</span>
            </div>
          </div>
        </div>

        {/* Why Separated Folders matter on Gumroad */}
        <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs leading-relaxed">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-1">Gumroad Seller Pro-Tip:</span>
            When buyers download a single mixed PDF, American customers often select A4 by accident and complain that the edges are cut off or shrunk with huge white bands.
            By providing <strong>two dedicated folders</strong> (<code className="bg-amber-100 px-1 py-0.5 rounded font-mono">/US-Letter-Print-Ready/</code> and <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">/A5-Print-Ready/</code>), you deliver instant clarity, zero printing mistakes, and glowing 5-star customer reviews!
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
