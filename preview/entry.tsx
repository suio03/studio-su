// Standalone preview bundle (no Next.js runtime) — used to share a live preview link.
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
import '../src/app/globals.css';
import { createRoot } from 'react-dom/client';
import Home from '../src/components/Home';

const w = document.documentElement.clientWidth;
document.documentElement.style.setProperty('--z', String(w / (w < 600 ? 420 : w < 900 ? 640 : 1440)));
document.documentElement.style.setProperty('--cw', String((w < 600 ? 420 : w < 900 ? 640 : 1440) - 40));
createRoot(document.getElementById('root')!).render(<Home />);
