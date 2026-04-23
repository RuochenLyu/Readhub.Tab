const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const rtf = new Intl.RelativeTimeFormat('zh-CN', { numeric: 'auto' });

export function formatRelative(iso: string): string {
  const diffSec = (Date.parse(iso) - Date.now()) / 1000;
  for (const [unit, sec] of UNITS) {
    if (Math.abs(diffSec) >= sec || unit === 'second') {
      return rtf.format(Math.round(diffSec / sec), unit);
    }
  }
  return rtf.format(0, 'second');
}
