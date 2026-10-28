export type PageFormat = 'us-letter' | 'a5';

export interface ColoringPage {
  id: number;
  title: string;
  subtitle: string;
  prompt: string;
  ageRecommendation: string;
  category: 'action' | 'cute' | 'learning' | 'scenery' | 'mandala' | 'bonus';
  svgContent: string;
  imageUrl?: string;
}

export interface BookConfig {
  title: string;
  subtitle: string;
  authorName: string;
  childName: string;
  lineThickness: 'toddler' | 'standard' | 'detailed'; // 3.5pt, 2.5pt, 1.5pt
  showMargins: boolean;
  showPageNumbers: boolean;
  paperFormat: PageFormat;
}

export interface ThemeIdea {
  id: string;
  name: string;
  targetAge: string;
  whyItSells: string;
  description: string;
  pageIdeas: string[];
  recommendedKeywords: string[];
  priceRange: string;
}

export interface DimensionInfo {
  format: PageFormat;
  name: string;
  widthMm: number;
  heightMm: number;
  widthInches: number;
  heightInches: number;
  widthPt: number;
  heightPt: number;
  widthPx300Dpi: number;
  heightPx300Dpi: number;
  aspectRatio: number;
  safeMarginInches: number;
  safeMarginMm: number;
  description: string;
  marketFit: string;
}
