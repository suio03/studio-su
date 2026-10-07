import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource/nerko-one/400.css';
import '@fontsource/figtree/400.css';
import '@fontsource/figtree/500.css';
import '@fontsource/figtree/500-italic.css';
import '@fontsource/figtree/600.css';
import '@fontsource/figtree/700.css';
import '@fontsource/gochi-hand/400.css';
import '@fontsource/dm-mono/300.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Suyun Chen — Product Designer · Studio Sü',
  description:
    'Suyun Chen is a UI/UX and product designer in Melbourne, designing SaaS products and client projects from early ideas to polished experiences.',
  metadataBase: new URL('https://studiosu.dev'),
  openGraph: {
    title: 'Suyun Chen — Product Designer · Studio Sü',
    description: 'UI/UX and product designer in Melbourne. Selected work: Orva, Denlo, Scribix, Pixfy, FablePilot.',
    url: 'https://studiosu.dev',
    siteName: 'Studio Sü',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#D0D873',
};

// Sets the page scale before first paint (1440px design canvas, 420px below 900px) so nothing jumps.
// Also always start at the top on refresh (browsers otherwise restore the old scroll position).
const zoomScript = `(function(){try{if('scrollRestoration' in history)history.scrollRestoration='manual';window.scrollTo(0,0);var w=document.documentElement.clientWidth||window.innerWidth;document.documentElement.style.setProperty('--z',String(w/(w<600?420:w<900?640:1440)));document.documentElement.style.setProperty('--cw',String((w<600?420:w<900?640:1440)-40));}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: zoomScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
