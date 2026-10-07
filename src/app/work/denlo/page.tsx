import type { Metadata } from 'next';
import s from '../case.module.css';
import { Fig as SharedFig, Cmp as SharedCmp, type Shot } from '../parts';

export const metadata: Metadata = {
  title: 'Denlo case study — Suyun Chen · Studio Sü',
  description:
    'How I redesigned Denlo, an iPhone app that turns a spoken thought into posts for every platform, in the eight days before its App Store launch.',
};

const IMG = '/work/denlo-cs/';
function Fig(p: { src: string; alt: string; cap?: string; tone?: string; phone?: boolean }) {
  return <SharedFig base={IMG} {...p} />;
}
function Cmp(p: { items: Shot[]; cap?: string; short?: boolean; tall?: boolean }) {
  return <SharedCmp base={IMG} {...p} />;
}

const PLUM = '#4A1F5C';
const LILAC = '#EFE8F2';
const PROTO = '#EEECEA'; // background baked into the prototype mockups

const SNAPSHOT: [string, string][] = [
  ['Role', 'Product designer: led the redesign, from visual direction and flows to motion and the App Store listing'],
  ['Company', 'Cendro Labs, a small product studio'],
  ['Timeline', '25 Sep – 2 Oct 2026, redesign to launch'],
  ['Team', 'Me, plus the engineer who built version one'],
  ['Platform', 'iPhone, iOS 18+, Liquid Glass on iOS 26'],
  ['Status', 'Live on the App Store since 2 Oct 2026'],
];

const SWATCHES: [string, string, string][] = [
  ['Ultramarine', '#2449F0', 'The original. Cold, and close to system blue.'],
  ['On Air', '#C73A20', 'Most energy, but red also means error.'],
  ['Plum', PLUM, 'Chosen. The white post card stands out most.'],
  ['Ink', '#1A1A1F', 'Most restrained, least memorable.'],
  ['Tangerine', '#FF7A1A', 'Youngest, but needs dark text.'],
];

const MOMENTS: [string, string][] = [
  ['Writing', 'The key sentence in the transcript lights up, a post card rises and its lines draw in. Two other versions fan out and fall away, and the best one lands with a haptic tap.'],
  ['Recording', 'A live waveform follows your voice. When you stop, it freezes into the real recording you can play back, on the same purple stage.'],
  ['Result', 'The post rises, paragraphs appear in order, and Copy turns into a tick.'],
];

const HONEST: [string, string][] = [
  ['Paused, not Processing', 'A half-finished draft said “Processing” although nothing was running. It now says “Paused” with a Continue button.'],
  ['Delete account in a sheet', 'It used to open a new page full of repeated warnings. Now it is one short confirmation sheet.'],
  ['No sparkles', 'I removed the ✨ icon everywhere, the cliché of AI apps, and used Denlo’s own waveform mark instead.'],
  ['Your Voice', 'Denlo learns only from posts you mark as posted, shows in plain words what it has learned, and one switch turns learning off.'],
];

const LOG: [string, string, string][] = [
  ['2 Oct', '1.0 live on the App Store', 'Second review passed'],
  ['29 Sep', 'New App Store name, subtitle and screenshots; resubmitted', 'The listing is how people find the app'],
  ['29 Sep', 'Translation: speak any language, get English posts', 'Most users post in English but think in their own language'],
  ['29 Sep', 'Pricing page rebuilt around Pro; free tier cut to one line', 'The old page spent its space on the free plan'],
  ['29 Sep', 'Sparkles icon replaced with the Denlo waveform', 'The ✨ icon is an AI cliché'],
  ['29 Sep', 'Your Voice; Mark Posted; To Post / Posted in Library', 'The app forgot you between sessions'],
  ['29 Sep', 'Plan badge on Create; one “Continue where you left off” row', 'Pricing was buried; Create looked empty'],
  ['29 Sep', 'Onboarding asks your role; animated welcome page', 'Topics added nothing; the welcome page was all text'],
  ['29 Sep', 'Motion for writing, recording and result', 'The app felt flat'],
  ['29 Sep', 'Sign-in moved to the first “Write My Post”; HIG fixes', 'Asking for an account before any value'],
  ['29 Sep', 'Withdrew 1.0 from review', 'Listing and flows not ready'],
  ['28 Sep', 'Delete account as a sheet; onboarding can be skipped', 'A full page for one short confirmation'],
  ['25 Sep', 'App Store screenshots designed, not raw captures', 'Screenshots sell the app'],
  ['25 Sep', 'Image scenes and four soft palettes', 'Images felt dead'],
  ['25 Sep', 'Stage direction, Plum colour, logo colours, walkthrough fixes', 'Version one looked unfinished'],
];

export default function DenloCaseStudy() {
  return (
    <div className={s.page}>
      <header className={s.top}>
        <a href="/" className={s.brand}>Studio S<span>ü</span></a>
        <nav className={s.topNav}>
          <a href="/#work" className={s.back}>← All work</a>
          <a href="mailto:hello@studiosu.dev?subject=About%20Denlo" target="_blank" rel="noopener" className={s.hi}>Say hi</a>
        </nav>
      </header>

      <section className={s.hero}>
        <div className={s.heroText}>
          <div className={s.eyebrow}>Case study · iOS app · 2026</div>
          <h1>Redesigning Denlo in the eight days before launch</h1>
          <p className={s.lead}>
            Denlo turns a rough spoken thought into posts ready for X, LinkedIn, Threads, Instagram and TikTok, with image cards and carousels. Version one worked, but felt unfinished. I redesigned it end to end, pulled the first App Store submission to fix the first impression, and shipped on 2 October.
          </p>
        </div>
        <div className={s.heroImg} style={{ background: PROTO, aspectRatio: '1 / 1' }}>
          <img src={IMG + 'stage-light.webp'} alt="Denlo's Create and result screens in the Plum Stage design" style={{ objectFit: 'contain', padding: '28px' }} />
        </div>
      </section>

      <section className={s.snapshot}>
        {SNAPSHOT.map(([k, v]) => (
          <div key={k}><div className={s.label}>{k}</div><div>{v}</div></div>
        ))}
      </section>

      <main className={s.body}>
        <section className={s.block}>
          <h2><span className={s.num}>01</span>Where it started</h2>
          <div className={s.prose}>
            <p>Version one, built by Cendro Labs’ engineer under the working name Riff, had every feature: recording, transcription, a post for each platform, image templates and subscriptions. What it lacked was a reason to trust it, and a reason to pay.</p>
            <ul>
              <li><strong>The result page was boxes inside boxes.</strong> Four nested frames and a repeated title around one post, and the first line of the post sat halfway down the screen.</li>
              <li><strong>The images were dead.</strong> Every card was one line of text and a decorative block, whatever the post said.</li>
              <li><strong>Nobody saw the price.</strong> Pricing lived only in Settings, so most free users met the paywall when it blocked them.</li>
            </ul>
            <p>I started by walking through the app on a real iPhone as a brand-new user, then explored three design directions on the same flows before touching any code.</p>
          </div>
          <Cmp tall cap="Before: the early Riff build, then version one’s Create and result screens." items={[
            { src: 'riff-create.webp', alt: 'Early Riff build: a pale green Create screen', label: 'Riff', tone: '#E6ECE7' },
            { src: 'v1-create.webp', alt: 'Version one Create screen in dark green', label: 'v1 Create', tone: '#E6ECE7' },
            { src: 'v1-post.webp', alt: 'Version one result page with nested cards', label: 'v1 Result', tone: '#E6ECE7' },
          ]} />
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>02</span>Key decisions</h2>

          <article className={s.decision}>
            <h3>1. A stage, not a form</h3>
            <div className={s.prose}>
              <p>I explored three directions on the same flows and copy. <em>Page</em> treats your words as a quiet sheet of paper. <em>Instrument</em> is a reliable recorder that shows every state. <em>Stage</em> is a block of colour that holds whatever matters right now. I chose Stage: it grows with each state, and on the result page the post sits on it like a real object.</p>
            </div>
            <Cmp cap="Three directions, same features and copy. Only the design language changes." items={[
              { src: 'dir-page.webp', alt: 'Page direction', label: 'Page', tone: PROTO },
              { src: 'dir-instrument.webp', alt: 'Instrument direction', label: 'Instrument', tone: PROTO },
              { src: 'dir-stage.webp', alt: 'Stage direction', label: 'Stage ✓', tone: PROTO },
            ]} />
            <div className={s.prose} style={{ marginTop: '36px' }}>
              <p>The original blue felt cold and close to system blue, so I tested five stage colours with real contrast numbers and chose <strong>Plum</strong>. Purple reads as “AI”, so I set rules: no gradients or glows, brand colour only on the stage, and every button in ink. I recoloured the logo to match, keeping its shape.</p>
            </div>
            <div className={s.swatches}>
              {SWATCHES.map(([n, c, d]) => (
                <div key={n} className={n === 'Plum' ? s.swatchOn : undefined}>
                  <span className={s.swatch} style={{ background: c }} />
                  <strong>{n}</strong>
                  <span>{d}</span>
                </div>
              ))}
            </div>
            <div className={s.prose} style={{ marginTop: '36px' }}>
              <p>Dark mode first looked muddy: cold greys against warm purple, and post cards darker than the background, like holes. I tinted every surface with plum and lifted the cards above it. A HIG review then raised small text from 3.20:1 to 4.81:1 contrast and removed the logo from inside the app.</p>
            </div>
            <Cmp items={[
              { src: 'stage-light.webp', alt: 'Plum Stage in light mode', label: 'Light', tone: PROTO },
              { src: 'stage-dark.webp', alt: 'Plum Stage in dark mode', label: 'Dark', tone: PROTO },
            ]} />
          </article>

          <article className={s.decision}>
            <h3>2. Every image needs a protagonist</h3>
            <div className={s.prose}>
              <p>The image cards felt dead because each one was a line of text plus a decoration unrelated to the post. My rule: every image gets a protagonist taken from the content itself, such as a number, a contrast, a conversation, a list, a question or a quote.</p>
              <p>Denlo now picks the scene and the words to emphasise, and pulls a handwritten note from your own words. It never shows a number you didn’t say, so the visuals can’t invent facts. Carousels became a story, with one line running across the slides.</p>
              <p>The first palettes were loud. I kept four soft paper tones, Clay, Dusk, Sage and Paper, and let people switch with one tap when the automatic pick is wrong.</p>
            </div>
            <Cmp tall cap="Before: the same lime block on every image. After: scenes built from the post, in four moods." items={[
              { src: 'v1-image.webp', alt: 'Version one image card with a lime block', label: 'Before', tone: '#E6ECE7' },
              { src: 'store-03.webp', alt: 'Image cards and carousels built from the post', label: 'After', tone: LILAC },
              { src: 'store-05.webp', alt: 'The same post in four palettes', label: 'Four moods', tone: LILAC },
            ]} />
          </article>

          <article className={s.decision}>
            <h3>3. Pull the review, fix the first impression</h3>
            <div className={s.prose}>
              <p>I submitted 1.0 for review on 28 September, then withdrew it the next morning. The App Store listing hadn’t been researched, and the flows were built on our own assumptions rather than standards. With no users yet, fixing it then cost a day; fixing it after launch would cost far more.</p>
              <ul>
                <li><strong>Sign in later.</strong> New users no longer hit Sign in with Apple first. They go Welcome → role → audience → Create, and sign in only when they tap “Write My Post”. The sign-in sheet shows the thought they just recorded, marked “Saved”.</li>
                <li><strong>Price in sight.</strong> A small badge on Create shows “2 free left”, or “Get Pro” when they run out, and opens the paywall. Seeing prices no longer needs an account.</li>
                <li><strong>Sell Pro, not the free tier.</strong> I replaced the Free vs Pro table with one headline, “200 ideas a month, each one ready for every platform”, and a strip showing one idea becoming five platforms plus an image card. The free tier became one line about your own status.</li>
              </ul>
            </div>
          </article>

          <article className={s.decision}>
            <h3>4. Motion only where the magic happens</h3>
            <div className={s.prose}>
              <p>The app worked but felt flat: the only animation anywhere was a fade. Instead of decorating everything, I put motion in three moments, and let everything fall back to simple fades with Reduce Motion on.</p>
            </div>
            <ol className={`${s.steps} ${s.steps3}`}>
              {MOMENTS.map(([t, d], i) => (
                <li key={t}><span className={s.stepN}>{i + 1}</span><strong>{t}</strong><span>{d}</span></li>
              ))}
            </ol>
            <div className={s.prose}>
              <p>The welcome page became an 11-second loop of Speak → Shape → Share instead of paragraphs of text.</p>
            </div>
          </article>

          <article className={s.decision}>
            <h3>5. Ask who you are, not what you post about</h3>
            <div className={s.prose}>
              <p>Onboarding asked people to pick topics, which every recording already states. I changed the first question to “What do you do?”: a founder and an engineer would write the same idea differently, and Denlo needs it later to learn your posting habits. The role only shapes tone and vocabulary. Denlo never writes “As a founder, I…” unless you said it.</p>
            </div>
          </article>

          <article className={s.decision}>
            <h3>6. Small honesties</h3>
            <ol className={`${s.cards} ${s.cards2}`}>
              {HONEST.map(([t, d]) => (
                <li key={t}><strong>{t}</strong><span>{d}</span></li>
              ))}
            </ol>
          </article>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>03</span>Iteration log</h2>
          <div className={s.prose}><p>Eight days from first direction to launch, newest first.</p></div>
          <div className={s.log}>
            {LOG.map(([d, w, b], i) => (
              <div key={i} className={`${s.logRow} ${s.log3}`}>
                <div className={s.logDate}>{d}</div>
                <div className={s.logArea}>{w}</div>
                <div className={s.logWhy}>{b}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>04</span>Outcome</h2>
          <div className={s.prose}>
            <p className={s.big}>Denlo 1.0 <a href="https://apps.apple.com/au/app/denlo-voice-notes-to-posts/id6816117475" target="_blank" rel="noopener">launched on the App Store</a> on 2 October 2026, eight days after the first redesign direction and four days after I pulled the first submission.</p>
          </div>
          <Cmp tall cap="The App Store screenshots I designed for launch: composed scenes, not raw captures." items={[
            { src: 'store-01.webp', alt: 'App Store screenshot: voice notes to posts', tone: LILAC },
            { src: 'store-02.webp', alt: 'App Store screenshot: every platform', tone: LILAC },
            { src: 'store-04.webp', alt: 'App Store screenshot: your words, your meaning', tone: LILAC },
          ]} />
          <div className={s.outcome}>
            <div><div className={s.label}>Delivered</div><p>Visual direction and design tokens for light, dark and increased contrast, logo colours, every iPhone screen, motion for the key moments, image scenes and palettes, onboarding, paywall and pricing, and the App Store screenshots.</p></div>
            <div><div className={s.label}>Speed</div><p>From three directions to a live app in eight days, designing in prototypes and on a real iPhone instead of static mock-ups.</p></div>
            <div><div className={s.label}>What I’d do differently</div><p>Decide the first impression, motion and pricing visibility before the first submission. Withdrawing worked, but it was a correction, not a plan.</p></div>
          </div>
        </section>
      </main>

      <footer className={s.foot}>
        <a href="/#work" className={s.back}>← Back to all work</a>
      </footer>
    </div>
  );
}
