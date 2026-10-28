import React, { useState } from 'react';
import { X, Copy, Check, DollarSign, Tag, HelpCircle, FileText } from 'lucide-react';
import { generateGumroadCopy } from '../utils/pdfDimensions';
import { DINO_PAGES } from '../data/dinoPages';

interface GumroadKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GumroadKitModal: React.FC<GumroadKitModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const listingTitle = "Cute Dinosaurs Coloring Book: 30 Printable Pages for Kids Ages 3-8 (US Letter & A5)";
  const listingDescription = generateGumroadCopy("Cute Dinosaurs Coloring Book", DINO_PAGES.length);
  const tagsList = "coloring book, dinosaur coloring pages, printable kids activities, toddler pdf, preschool dinosaur, homeschool printables, us letter coloring";

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Gumroad US Seller Kit
              </h2>
              <p className="text-xs text-slate-500">
                Ready-to-use product title, high-converting copy, pricing strategy, and tags
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

        {/* Pricing Strategy Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Recommended Price</span>
            <div className="text-lg font-extrabold text-slate-900 mt-0.5">$4.99 USD</div>
            <p className="text-[11px] text-slate-600 mt-1">Sweet-spot impulse buy for American parents</p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Upsell 2-Pack</span>
            <div className="text-lg font-extrabold text-slate-900 mt-0.5">$8.99 USD</div>
            <p className="text-[11px] text-slate-600 mt-1">Bundle with Kawaii Animals or Space</p>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-semibold text-slate-500 uppercase">Lead Magnet Sample</span>
            <div className="text-lg font-extrabold text-slate-900 mt-0.5">$0 (Pay What You Want)</div>
            <p className="text-[11px] text-slate-600 mt-1">Give 3 pages free to build your email list</p>
          </div>
        </div>

        {/* Product Title Section */}
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Gumroad Product Title (SEO Optimized)</span>
            </label>
            <button
              onClick={() => handleCopy(listingTitle, 'title')}
              className="flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              {copied === 'title' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied === 'title' ? 'Copied!' : 'Copy Title'}</span>
            </button>
          </div>
          <input
            type="text"
            readOnly
            value={listingTitle}
            className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg p-2.5 focus:outline-none"
          />
        </div>

        {/* Search Tags */}
        <div className="flex flex-col gap-2 mb-5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-emerald-600" />
              <span>Recommended Gumroad Tags</span>
            </label>
            <button
              onClick={() => handleCopy(tagsList, 'tags')}
              className="flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              {copied === 'tags' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied === 'tags' ? 'Copied!' : 'Copy Tags'}</span>
            </button>
          </div>
          <input
            type="text"
            readOnly
            value={tagsList}
            className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg p-2.5 focus:outline-none"
          />
        </div>

        {/* Listing Description (Markdown) */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              <span>Gumroad Listing Description (Formatted English Prose)</span>
            </label>
            <button
              onClick={() => handleCopy(listingDescription, 'desc')}
              className="flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              {copied === 'desc' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied === 'desc' ? 'Copied!' : 'Copy Description'}</span>
            </button>
          </div>
          <textarea
            readOnly
            rows={9}
            value={listingDescription}
            className="w-full font-mono text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg p-3 leading-relaxed focus:outline-none resize-none"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
