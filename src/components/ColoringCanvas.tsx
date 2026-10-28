import React, { useRef, useState, useEffect } from 'react';
import { ColoringPage, PageFormat, BookConfig } from '../types/coloring';
import { buildPageSvgXml, rasterizeSvgToDataUrl } from '../utils/pdfGenerator';
import { RotateCcw, Download, Palette, Eraser, Check } from 'lucide-react';

interface ColoringCanvasProps {
  page: ColoringPage;
  format: PageFormat;
  config: BookConfig;
  onClose: () => void;
}

const PALETTE_COLORS = [
  { name: 'Crayon Red', hex: '#ef4444' },
  { name: 'Sunset Orange', hex: '#f97316' },
  { name: 'Banana Yellow', hex: '#eab308' },
  { name: 'Dino Lime', hex: '#84cc16' },
  { name: 'Forest Green', hex: '#10b981' },
  { name: 'Sky Cyan', hex: '#06b6d4' },
  { name: 'Royal Blue', hex: '#3b82f6' },
  { name: 'Grape Purple', hex: '#a855f7' },
  { name: 'Bubblegum Pink', hex: '#ec4899' },
  { name: 'Cocoa Brown', hex: '#78350f' },
  { name: 'Pure White (Eraser)', hex: '#ffffff' },
];

export const ColoringCanvas: React.FC<ColoringCanvasProps> = ({
  page,
  format,
  config,
  onClose,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('#10b981');
  const [brushSize, setBrushSize] = useState<number>(14);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [bgLoaded, setBgLoaded] = useState<boolean>(false);

  // Initialize canvas with SVG background
  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const loadArt = async () => {
      try {
        let srcToLoad = page.imageUrl;
        if (!srcToLoad) {
          const svgXml = buildPageSvgXml(page, format, config);
          srcToLoad = await rasterizeSvgToDataUrl(svgXml, 1000, 1300);
        }
        if (!isMounted) return;

        const img = new Image();
        img.onload = () => {
          if (!isMounted) return;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const initial = ctx.getImageData(0, 0, canvas.width, canvas.height);
          setHistory([initial]);
          setBgLoaded(true);
        };
        img.onerror = async () => {
          // Fallback to SVG if image fails
          const svgXml = buildPageSvgXml(page, format, config);
          const fallbackUrl = await rasterizeSvgToDataUrl(svgXml, 1000, 1300);
          if (!isMounted) return;
          const fallbackImg = new Image();
          fallbackImg.onload = () => {
            if (!isMounted) return;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(fallbackImg, 0, 0, canvas.width, canvas.height);
            setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
            setBgLoaded(true);
          };
          fallbackImg.src = fallbackUrl;
        };
        img.src = srcToLoad;
      } catch (err) {
        console.error('Failed to load canvas image', err);
      }
    };

    loadArt();

    return () => {
      isMounted = false;
    };
  }, [page, format, config]);

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    } else {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    }
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    setIsDrawing(true);
    const { x, y } = getPos(e);

    // Save previous state for undo
    const state = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prev) => [...prev.slice(-15), state]);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = selectedColor === '#ffffff' ? 'source-over' : 'multiply';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const handleUndo = () => {
    if (history.length <= 1) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const previous = history[history.length - 1];
    ctx.putImageData(previous, 0, 0);
    setHistory((prev) => prev.slice(0, -1));
  };

  const handleDownloadArt = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `My-Colored-${page.title.replace(/\s+/g, '-')}.png`;
    a.click();
  };

  return (
    <div className="flex flex-col bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-xl max-w-5xl mx-auto my-2">
      {/* Canvas Top Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800 border-b border-slate-700 text-white shrink-0">
        <div className="flex items-center gap-3">
          <Palette className="w-5 h-5 text-emerald-400" />
          <div>
            <h3 className="text-sm font-semibold text-white">{page.title}</h3>
            <p className="text-xs text-slate-400">Digital Test Coloring Canvas · Pure Ink Proof</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleUndo}
            disabled={history.length <= 1}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-40 transition-colors"
            title="Undo stroke"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Undo</span>
          </button>
          <button
            onClick={handleDownloadArt}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save My Art</span>
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-slate-300"
          >
            Exit Coloring
          </button>
        </div>
      </div>

      {/* Main Canvas Workspace */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-4 gap-6 overflow-auto">
        {/* Color Palette & Brush Sidebar */}
        <div className="flex md:flex-col items-center gap-3 p-3 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-700 shrink-0">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold hidden md:block">
            Crayon Box
          </span>
          <div className="grid grid-cols-6 md:grid-cols-2 gap-2">
            {PALETTE_COLORS.map((c) => {
              const isSelected = selectedColor === c.hex;
              return (
                <button
                  key={c.hex}
                  onClick={() => setSelectedColor(c.hex)}
                  className={`w-8 h-8 rounded-full border-2 transition-transform relative ${
                    isSelected ? 'scale-110 border-white ring-2 ring-emerald-400' : 'border-slate-600 hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                >
                  {isSelected && (
                    <span className="absolute inset-0 flex items-center justify-center text-slate-900 drop-shadow-sm">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="h-px w-full bg-slate-700 my-1 hidden md:block" />

          {/* Brush sizes */}
          <div className="flex md:flex-col items-center gap-2">
            {[8, 16, 28].map((size) => (
              <button
                key={size}
                onClick={() => setBrushSize(size)}
                className={`p-2 rounded-lg flex items-center justify-center transition-colors ${
                  brushSize === size ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
                title={`Brush size: ${size}px`}
              >
                <div
                  className="rounded-full bg-current"
                  style={{ width: `${Math.max(6, size / 2)}px`, height: `${Math.max(6, size / 2)}px` }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* The Coloring Paper Surface */}
        <div className="relative bg-white rounded-lg shadow-2xl p-2 max-h-[75vh] flex items-center justify-center">
          {!bgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10 text-slate-600 text-sm font-medium">
              Preparing coloring canvas...
            </div>
          )}
          <canvas
            ref={canvasRef}
            width={1000}
            height={1300}
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={stopDraw}
            onMouseLeave={stopDraw}
            onTouchStart={startDraw}
            onTouchMove={draw}
            onTouchEnd={stopDraw}
            className="w-auto h-[68vh] max-h-[720px] rounded cursor-crosshair touch-none border border-slate-300"
          />
        </div>
      </div>
    </div>
  );
};
