import React, { useState } from 'react';
import { X, Sparkles, Copy, Check, Wand2, BookOpen } from 'lucide-react';
import { DINO_PAGES, FRONT_COVER_PAGE } from '../data/dinoPages';
import { ColoringPage } from '../types/coloring';

interface GeminiDinoStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (page: ColoringPage) => void;
}

const DINO_TYPES = [
  { id: 'trex', name: 'Tyrannosaurus Rex (T-Rex)', trait: 'Friendly big snout, tiny cute arms, huge happy grin' },
  { id: 'triceratops', name: 'Triceratops', trait: 'Scalloped back frill, rounded cute horns, chubby stumpy legs' },
  { id: 'brachio', name: 'Brachiosaurus', trait: 'Gentle giant, extra long neck reaching into jungle trees' },
  { id: 'stego', name: 'Stegosaurus', trait: 'Rounded floral back plates, smiling snout, playful tail' },
  { id: 'pterodactyl', name: 'Pterodactyl', trait: 'Big soaring wings, gentle crest, flying among sunny clouds' },
  { id: 'baby_egg', name: 'Baby Dino Hatchling', trait: 'Cracked spotted egg shell, egg shell hat, peek-a-boo paws' },
  { id: 'raptor', name: 'Cool Velociraptor', trait: 'Fast, playful posture, wearing fun sneakers or helmet' },
];

const SCENARIOS = [
  { id: 'icecream', label: 'Eating 3-Scoop Ice Cream Cone', detail: 'with cherry on top and waffle cone' },
  { id: 'chef', label: 'Master Chef Flipping Pancakes', detail: 'tall puffy chef toque hat and frying pan' },
  { id: 'rain', label: 'Rainy Day Puddle Jumper', detail: 'patterned umbrella and yellow rain boots splashing' },
  { id: 'train', label: 'Train Engineer Waving', detail: 'striped engineer cap driving a steam engine locomotive' },
  { id: 'skater', label: 'Riding a Skateboard', detail: 'leaning forward, helmet on, motion speed lines' },
  { id: 'astronaut', label: 'Astronaut Dino on Moon', detail: 'round bubble helmet, stars, planets, and planted flag' },
  { id: 'birthday', label: 'Birthday Party with Giant Cake', detail: 'party cone hat, candles, bunting garland' },
  { id: 'pirate', label: 'Pirate Captain Dino', detail: 'tricorn skull hat, eye patch, and treasure chest with gold' },
  { id: 'picnic', label: 'Checkered Picnic in the Park', detail: 'sandwich, juice box, and little bird friend on head' },
  { id: 'beach', label: 'Beach Day Sandcastle', detail: 'sunglasses, bucket and spade, seaside seashells' },
];

const AGE_LEVELS = [
  { id: 'toddler', label: 'Toddler (Ages 2-4)', desc: 'Extra thick bold 3-4pt lines, large simple shapes, zero tiny clutter' },
  { id: 'standard', label: 'Preschool (Ages 4-7)', desc: 'Standard 2.5pt lines, cute accessories, fun whimsical environment' },
  { id: 'detailed', label: 'Kids & Tweens (Ages 7-10)', desc: 'Clean 1.8pt lines, detailed scenery, patterns and intricate elements' },
];

export const GeminiDinoStudioModal: React.FC<GeminiDinoStudioModalProps> = ({
  isOpen,
  onClose,
  onSelectPage,
}) => {
  const [selectedDino, setSelectedDino] = useState(DINO_TYPES[0]);
  const [selectedScenario, setSelectedScenario] = useState(SCENARIOS[0]);
  const [selectedAge, setSelectedAge] = useState(AGE_LEVELS[1]);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Build the commercial-grade Gemini AI prompt
  const generatedPrompt = `Ultra-clean kawaii cute cartoon ${selectedDino.name} ${selectedScenario.label.toLowerCase()} (${selectedScenario.detail}). Storybook coloring book page for children ${selectedAge.label}, clean thick uniform black outlines (${selectedAge.id === 'toddler' ? '3-4pt' : selectedAge.id === 'detailed' ? '1.8pt' : '2.5pt'}), pure black and white line art only, bold smooth vector contours, large open white coloring spaces, absolutely no shading, no greyscale, no gradient, no halftone dots, pure solid crisp white background, 300 DPI print ready, friendly smiling facial expression with oversized sparkling cartoon eyes.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const aiPages = [FRONT_COVER_PAGE, ...DINO_PAGES.filter((p) => Boolean(p.imageUrl))];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>Gemini AI Dino Character Studio</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Commercial Gumroad Formula
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Formula &amp; prompt generator to create adorable, best-selling dinosaur coloring pages
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Section 1: The 4 Golden Rules */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
              <Wand2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Why These Characters Sell So Well in the US Market</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs">
                <span className="font-bold text-slate-900 block mb-1">1. Kawaii Chibi Proportions</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Oversized round head (1:1.5 ratio), chubby limbs, wide joyful grins, and catchlight eyes make dinos cute, not scary.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs">
                <span className="font-bold text-slate-900 block mb-1">2. Pure B&amp;W Clean Line Art</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Zero grey shading or halftones. Pure solid black 2.5pt lines ensure crisp prints without wasting parents' ink cartridges.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs">
                <span className="font-bold text-slate-900 block mb-1">3. Relatable Playful Themes</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Dinos doing human activities (ice cream, skateboards, chef pancakes, trains) spark children's storytelling imagination.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-2xs">
                <span className="font-bold text-slate-900 block mb-1">4. 0.5" Safe Bleed Margin</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  All artwork sits inside the 0.5-inch border, guaranteeing standard US home printers never crop or cut off corners.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Interactive Prompt Builder */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
              <span>Interactive Gemini AI Prompt Builder</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                Custom Creator
              </span>
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Select dinosaur species, activity, and target age bracket to generate the exact commercial Gemini AI prompt:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Dinosaur Species */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  1. Dinosaur Species:
                </label>
                <select
                  value={selectedDino.id}
                  onChange={(e) => {
                    const found = DINO_TYPES.find((d) => d.id === e.target.value);
                    if (found) setSelectedDino(found);
                  }}
                  className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  {DINO_TYPES.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-500 italic mt-1 block">
                  {selectedDino.trait}
                </span>
              </div>

              {/* Activity / Scenario */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  2. Activity &amp; Theme:
                </label>
                <select
                  value={selectedScenario.id}
                  onChange={(e) => {
                    const found = SCENARIOS.find((s) => s.id === e.target.value);
                    if (found) setSelectedScenario(found);
                  }}
                  className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  {SCENARIOS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-500 italic mt-1 block">
                  {selectedScenario.detail}
                </span>
              </div>

              {/* Age Bracket */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  3. Target Age &amp; Line Weight:
                </label>
                <select
                  value={selectedAge.id}
                  onChange={(e) => {
                    const found = AGE_LEVELS.find((a) => a.id === e.target.value);
                    if (found) setSelectedAge(found);
                  }}
                  className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  {AGE_LEVELS.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.label}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-500 italic mt-1 block">
                  {selectedAge.desc}
                </span>
              </div>
            </div>

            {/* Generated Prompt Box */}
            <div className="relative bg-slate-900 rounded-xl p-4 text-emerald-300 font-mono text-xs leading-relaxed">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-800 text-slate-400">
                <span className="text-[11px] font-semibold text-slate-300">
                  Ready-to-Use Gemini AI Prompt (English for US Market):
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>
              <p className="select-all text-slate-100">{generatedPrompt}</p>
            </div>
          </div>

          {/* Section 3: Gallery of Generated Gemini AI Characters */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Included Gemini AI Artwork Showcase ({aiPages.length} Pages)</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  High-Res 300 DPI
                </span>
              </h3>
              <span className="text-xs text-slate-500">
                Click any character to inspect or test-color in the main workspace
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {aiPages.map((page) => (
                <div
                  key={page.id}
                  onClick={() => {
                    onSelectPage(page);
                    onClose();
                  }}
                  className="group bg-white rounded-xl border border-slate-200 p-2 hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div className="aspect-[500/650] bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center p-1 relative">
                    <img
                      src={page.imageUrl}
                      alt={page.title}
                      className="w-full h-full object-contain pointer-events-none group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div className="absolute top-1 left-1 px-1 py-0.5 bg-slate-900/80 text-white text-[9px] font-bold rounded">
                      {page.id === 0 ? 'COVER' : `#${page.id}`}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800 line-clamp-1 mt-1.5" title={page.title}>
                    {page.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            All AI-generated characters are 100% original, copyright-safe, and free from trademark conflicts (Disney, Bluey, Pokémon).
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors shadow-2xs"
          >
            Close Studio
          </button>
        </div>
      </div>
    </div>
  );
};
