export function getSizesFromWidths(widths: number[], percentage = 100): string {
  return widths.map((width) => `(max-width: ${width }px) ${width * percentage / 100}px`).join(', ');
}