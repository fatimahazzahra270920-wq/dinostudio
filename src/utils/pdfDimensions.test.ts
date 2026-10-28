import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DIMENSIONS,
  getDimensionInfo,
  getPrintableArea,
  getStrokeWidthPt,
  generateGumroadCopy,
} from './pdfDimensions';

test('US Letter dimensions match standard 8.5x11 inches specs', () => {
  const usLetter = getDimensionInfo('us-letter');
  assert.equal(usLetter.widthInches, 8.5);
  assert.equal(usLetter.heightInches, 11.0);
  assert.equal(usLetter.widthPt, 612);
  assert.equal(usLetter.heightPt, 792);
  assert.equal(usLetter.widthPx300Dpi, 2550);
  assert.equal(usLetter.heightPx300Dpi, 3300);
  assert.equal(usLetter.safeMarginInches, 0.5);
});

test('A5 dimensions match ISO standard 148x210 mm specs', () => {
  const a5 = getDimensionInfo('a5');
  assert.equal(a5.widthMm, 148.0);
  assert.equal(a5.heightMm, 210.0);
  assert.ok(a5.widthPt > 419 && a5.widthPt < 420);
  assert.ok(a5.heightPt > 595 && a5.heightPt < 596);
});

test('Printable area accounts for margins correctly on both formats', () => {
  const letterArea = getPrintableArea('us-letter');
  assert.equal(letterArea.marginPt, 36); // 0.5 in * 72 pt/in = 36 pt
  assert.equal(letterArea.widthPt, 612 - 72); // 540 pt
  assert.equal(letterArea.heightPt, 792 - 72); // 720 pt

  const a5Area = getPrintableArea('a5');
  assert.ok(a5Area.marginPt > 33 && a5Area.marginPt < 35);
  assert.ok(a5Area.widthPt < 420);
  assert.ok(a5Area.heightPt < 596);
});

test('Stroke width preset calculates valid point sizes', () => {
  assert.equal(getStrokeWidthPt('toddler'), 3.5);
  assert.equal(getStrokeWidthPt('standard'), 2.5);
  assert.equal(getStrokeWidthPt('detailed'), 1.8);
});

test('Gumroad listing copy generator outputs formatted markdown with folder structure', () => {
  const copy = generateGumroadCopy('Cute Dinosaurs Adventure', 30);
  assert.ok(copy.includes('US-Letter-Print-Ready/'));
  assert.ok(copy.includes('A5-Print-Ready/'));
  assert.ok(copy.includes('30-page digital printable coloring book'));
  assert.ok(copy.includes('8.5" x 11"'));
});
