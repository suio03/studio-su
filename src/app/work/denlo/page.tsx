import type { Metadata } from 'next';
import s from '../case.module.css';
import { Fig as SharedFig, Cmp as SharedCmp, type Shot } from '../parts';

export const metadata: Metadata = {
  title: 'Denlo case study — Suyun Chen · Studio Sü',
  description:
    'How I redesigned Denlo, an iPhone app that turns a voice note into social media posts, before it launched on the App Store.',
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

const NEED: [string, string][] = [
  ['What people ask for', '“Write a post about my product.”'],
  ['What they really need', 'To say what they already think, in their own voice, in a way that makes people curious, on every platform, without spending hours on it.'],
  ['Who it is for', 'First, indie developers who build well but hate marketing. Then anyone who has a point to make but struggles to put it into words.'],
];

const NEED_MAP: [string, string][] = [
  ['Less effort', 'Voice first. Talking is easier than writing, so you just say your idea out loud.'],
  ['Their own voice', 'Onboarding asks your role, and Denlo learns only from posts you mark as posted. It never adds “As a founder, I…” unless you said it.'],
  ['Make people curious', 'Denlo finds the key sentence in what you said and builds the post around it. Images are built around a question, a number or a contrast from your words.'],
  ['Every platform', 'One idea becomes posts for X, LinkedIn, Threads, Instagram and TikTok, each in the right format.'],
  ['Trust', 'Denlo never shows a number you didn’t say, so posts and images can’t make up facts.'],
];

const SNAPSHOT: [string, string][] = [
  ['Role', 'Product designer. I led the redesign: visual style, flows, motion and the App Store page'],
  ['Company', 'Cendro Labs, a small product studio'],
  ['Timeline', '25 Sep – 2 Oct 2026, from redesign to launch'],
  ['Team', 'Me, and the engineer who built version one'],
  ['Platform', 'iPhone, iOS 18+, Liquid Glass on iOS 26'],
  ['Status', 'On the App Store since 2 Oct 2026'],
];

const SWATCHES: [string, string, string][] = [
  ['Ultramarine', '#2449F0', 'The original. Cold, and too close to the iOS system blue.'],
  ['On Air', '#C73A20', 'Lots of energy, but red also means error.'],
  ['Plum', PLUM, 'Chosen. The white post card stands out the most.'],
  ['Ink', '#1A1A1F', 'Calm and safe, but easy to forget.'],
  ['Tangerine', '#FF7A1A', 'Feels the youngest, but needs dark text.'],
];

const MOMENTS: [string, string][] = [
  ['Writing', 'The key sentence in your words lights up. A post card rises and the lines appear. Two other versions spread out and fade away, and the best one lands with a small vibration.'],
  ['Recording', 'A live sound wave follows your voice. When you stop, it becomes your real recording, and you can play it back.'],
  ['Result', 'The post rises, the paragraphs appear one by one, and the Copy button turns into a tick.'],
];

const FIXES: [string, string, string, string][] = [
  ['Sign in later', 'The first screen was Sign in with Apple, before people saw what the app could do.', 'Welcome → role → audience → Create. Sign-in only appears when you first tap “Write My Post”, and the thought you just recorded shows as “Saved”.', 'Show the value before asking for an account.'],
  ['Show the price', 'The price was only in Settings, and you needed an account to see it.', 'A badge on Create shows “2 free left”, or “Get Pro” when you run out. It opens the paywall without signing in.', 'Never surprise people with the price.'],
  ['Sell Pro, not Free', 'Most of the paywall was a Free vs Pro table.', 'One headline, “200 ideas a month, each one ready for every platform”, an image of one idea becoming posts for five platforms, and one line about your free ideas.', 'Use the space to sell what people pay for.'],
];

const HONEST: [string, string][] = [
  ['Paused, not Processing', 'An unfinished draft said “Processing”, but nothing was running. Now it says “Paused” and has a Continue button.'],
  ['Delete account in a sheet', 'It used to open a new page with many warnings. Now it is one short confirmation sheet.'],
  ['No sparkles', 'Lots of AI apps use the ✨ icon. I removed it everywhere and used Denlo’s own sound-wave logo instead.'],
  ['Your Voice', 'Denlo only learns from posts you mark as posted. It shows what it has learned in simple words, and one switch turns learning off.'],
];

const TURNS: [string, string, string][] = [
  ['A new visual direction', 'blue form → plum stage', 'Version one worked, but it looked unfinished.'],
  ['I stopped the launch', 'in review → withdrawn', 'The first impression wasn’t ready for real users.'],
  ['Value before sign-in', 'sign in first → record first', 'Sign-in moved to the first “Write My Post”.'],
  ['Launch', 'in review → on the App Store', 'Denlo 1.0 went live on 2 October.'],
];

const LOG: [string, string, string][] = [
  ['2 Oct', '1.0 live on the App Store', 'Passed the second review'],
  ['29 Sep', 'New App Store name, subtitle and screenshots. Submitted again', 'The App Store page is how people find the app'],
  ['29 Sep', 'Translation: speak in any language, get posts in English', 'Most users post in English but think in their own language'],
  ['29 Sep', 'Pricing page rebuilt around Pro. Free plan cut to one line', 'The old page was mostly about the free plan'],
  ['29 Sep', '✨ icon replaced with the Denlo sound wave', 'Too many AI apps use ✨'],
  ['29 Sep', 'Your Voice, Mark as Posted, and To Post / Posted in the Library', 'The app didn’t remember you between sessions'],
  ['29 Sep', 'Plan badge on Create. One “Continue where you left off” row', 'The price was hidden, and Create looked empty'],
  ['29 Sep', 'Onboarding asks your role. Animated welcome page', 'Topics didn’t help, and the welcome page was all text'],
  ['29 Sep', 'Motion for writing, recording and result', 'The app felt flat'],
  ['29 Sep', 'Sign-in moved to the first “Write My Post”. Fixes from Apple’s design guidelines', 'It asked for an account before showing any value'],
  ['29 Sep', 'Withdrew 1.0 from review', 'The App Store page and flows were not ready'],
  ['28 Sep', 'Delete account as a sheet. Onboarding can be skipped', 'A full page was too much for one short confirmation'],
  ['25 Sep', 'Designed App Store screenshots, not plain screen captures', 'Screenshots help sell the app'],
  ['25 Sep', 'Image scenes and four soft colour palettes', 'The images all looked the same'],
  ['25 Sep', 'Stage style, Plum colour, logo colours, fixes from a walkthrough', 'Version one looked unfinished'],
];

export default function DenloCaseStudy() {
  return (
    <div className={`${s.page} ${s.themeDenlo}`}>
      <header className={s.top}>
        <a href="/" className={s.brand}>Studio S<span>ü</span></a>
        <nav className={s.topNav}>
          <a href="/#work" className={s.back}>← All work</a>
          <a href="mailto:hello@studiosu.dev?subject=About%20Denlo" target="_blank" rel="noopener" className={s.hi}>Say hi</a>
        </nav>
      </header>

      <div className={s.heroBand}>
        <section className={s.hero}>
          <div className={s.heroText}>
            <div className={s.eyebrow}>Case study · iOS app · 2026</div>
            <h1>From a working app to the App Store in&nbsp;7&nbsp;days</h1>
            <p className={s.lead}>
              Denlo turns a voice note into posts for X, LinkedIn, Threads, Instagram and TikTok. Version one worked, but it didn’t feel finished. Before launch, I redesigned the product experience, onboarding, pricing, visual style, motion and App Store page.
            </p>
          </div>
          <div className={s.heroPhones}>
            <img src={IMG + 'hero-phones.webp'} alt="Denlo's Create and result screens in dark mode" />
          </div>
        </section>
      </div>

      <section className={s.snapshot}>
        {SNAPSHOT.map(([k, v]) => (
          <div key={k}><div className={s.label}>{k}</div><div>{v}</div></div>
        ))}
      </section>

      <main className={s.body}>
        <section className={s.block}>
          <h2><span className={s.num}>01</span>The real problem</h2>
          <p className={s.question}>Finishing a product is only half the work. The other half is getting people to care about it.</p>
          <div className={s.prose}>
            <p>Denlo started with a problem most indie developers know. The Cendro Labs engineer had just finished a new product and needed to promote it on social media. The hard part was not the idea. It was saying it in a way that makes people curious and want to join in, like a good speaker who opens with a question. Then doing it again for every platform.</p>
          </div>
          <ol className={s.cards}>
            {NEED.map(([t, d]) => (
              <li key={t}><strong>{t}</strong><span>{d}</span></li>
            ))}
          </ol>
          <h3 className={s.h3}>How the real need shaped the design</h3>
          <div className={s.log}>
            {NEED_MAP.map(([n, d], i) => (
              <div key={i} className={`${s.logRow} ${s.need2}`}>
                <div className={s.logArea}>{n}</div>
                <div className={s.logWhat}>{d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>02</span>Where it started</h2>
          <div className={s.prose}>
            <p>Version one had every feature: recording, transcription, a post for each platform, image templates and subscriptions. The Cendro Labs engineer built it under the working name Riff. But it didn’t give people a reason to trust it, or a reason to pay.</p>
            <ul>
              <li><strong>The result page had boxes inside boxes.</strong> There were four frames and a repeated title around one post, so the post started halfway down the screen.</li>
              <li><strong>The images all looked the same.</strong> Every card had one line of text and a decoration, no matter what the post said.</li>
              <li><strong>Nobody saw the price.</strong> The price was only in Settings, so most free users only found out when the paywall stopped them.</li>
            </ul>
            <p>First, I used the app on a real iPhone as a new user. Then I tried three design directions on the same screens before changing any code.</p>
          </div>
          <Cmp tall cap="Before: the early Riff build, then the Create and result screens in version one." items={[
            { src: 'riff-create.webp', alt: 'Early Riff build: a pale green Create screen', label: 'Riff', tone: '#E6ECE7' },
            { src: 'v1-create.webp', alt: 'Version one Create screen in dark green', label: 'v1 Create', tone: '#E6ECE7' },
            { src: 'v1-post.webp', alt: 'Version one result page with nested cards', label: 'v1 Result', tone: '#E6ECE7' },
          ]} />
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>03</span>The biggest decision</h2>
          <div className={s.stopBand}>
            <span className={s.tag}>28 – 29 September</span>
            <h3>I stopped the launch.</h3>
            <p className={s.big}>Version one worked. I didn’t think it was ready for users. I submitted 1.0 for review on 28 September, and withdrew it the next morning.</p>
          </div>
          <article className={s.decision}>
            <div className={s.prose}>
              <p>I hadn’t researched the App Store page, and the flows were based on guesses, not on common standards. There were no users yet, so fixing it then only took a day. Fixing it after launch would take much longer. These were the three biggest fixes:</p>
            </div>
            <ol className={`${s.cards} ${s.fixCards}`}>
              {FIXES.map(([title, before, after, rule]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span className={s.ba}><em>Before</em>{before}</span>
                  <span className={s.ba}><em>After</em>{after}</span>
                  <span className={s.rule}>{rule}</span>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>04</span>Key decisions</h2>

          <article className={s.decision}>
            <h3>1. A coloured stage instead of a form</h3>
            <p className={s.ruleLine}>The most important thing gets the stage.</p>
            <div className={s.prose}>
              <p>I tried three directions with the same screens and text. <em>Page</em> shows your words like a quiet sheet of paper. <em>Instrument</em> works like a recorder and shows every state. <em>Stage</em> is a block of colour that holds the most important thing on the screen. I chose Stage because it changes with each state, and on the result page the post sits on it like a real card.</p>
            </div>
            <Cmp cap="Three directions with the same features and text. Only the visual style changes." items={[
              { src: 'dir-page.webp', alt: 'Page direction', label: 'Page', tone: PROTO },
              { src: 'dir-instrument.webp', alt: 'Instrument direction', label: 'Instrument', tone: PROTO },
              { src: 'dir-stage.webp', alt: 'Stage direction', label: 'Stage ✓', tone: PROTO },
            ]} />
            <div className={s.prose} style={{ marginTop: '36px' }}>
              <p>The original blue felt cold and too close to the iOS system blue. I tried five colours, checked their contrast, and chose <strong>Plum</strong>. Purple often looks like “AI”, so I set some rules: no gradients or glow effects, the brand colour only on the stage, and all buttons in dark ink. I also changed the logo colour to match, but kept its shape.</p>
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
              <p>At first, dark mode looked muddy. The greys were cold next to the warm purple, and the post cards were darker than the background, so they looked like holes. I added a little plum to every surface and made the cards lighter. After checking Apple’s design guidelines (HIG), I raised the contrast of small text from 3.20:1 to 4.81:1, and removed the logo from inside the app.</p>
            </div>
            <Cmp items={[
              { src: 'stage-light.webp', alt: 'Plum Stage in light mode', label: 'Light', tone: PROTO },
              { src: 'stage-dark.webp', alt: 'Plum Stage in dark mode', label: 'Dark', tone: PROTO },
            ]} />
          </article>

          <article className={s.decision}>
            <h3>2. Every image needs a main subject</h3>
            <p className={s.ruleLine}>Every image needs a reason to exist.</p>
            <div className={s.prose}>
              <p>The image cards all looked the same. Each one was a line of text plus a decoration that had nothing to do with the post. My rule: every image has a main subject taken from the post, like a number, a comparison, a conversation, a list, a question or a quote.</p>
              <p>Now Denlo chooses the scene and the words to highlight, and adds a handwritten note from your own words. It never shows a number you didn’t say, so the images can’t make up facts. Carousels now tell a story, with one line running across all the slides.</p>
              <p>The first colour palettes were too loud. I kept four soft paper colours: Clay, Dusk, Sage and Paper. If the automatic choice is wrong, you can change it with one tap.</p>
            </div>
            <Cmp tall cap="Before: the same lime block on every image. After: scenes built from the post, in four colour palettes." items={[
              { src: 'v1-image.webp', alt: 'Version one image card with a lime block', label: 'Before', tone: '#E6ECE7' },
              { src: 'store-03.webp', alt: 'Image cards and carousels built from the post', label: 'After', tone: LILAC },
              { src: 'store-05.webp', alt: 'The same post in four palettes', label: 'Four palettes', tone: LILAC },
            ]} />
          </article>

          <article className={s.decision}>
            <h3>3. Motion only in the key moments</h3>
            <p className={s.ruleLine}>Motion shows progress, not decoration.</p>
            <div className={s.prose}>
              <p>The app worked, but it felt flat. The only animation was a fade. I didn’t want to animate everything, so I added motion to three key moments. When Reduce Motion is on, they become simple fades.</p>
            </div>
            <ol className={`${s.steps} ${s.steps3}`}>
              {MOMENTS.map(([t, d], i) => (
                <li key={t}><span className={s.stepN}>{i + 1}</span><strong>{t}</strong><span>{d}</span></li>
              ))}
            </ol>
            <div className={s.prose}>
              <p>The welcome page became an 11-second animation, Speak → Shape → Share, instead of paragraphs of text.</p>
            </div>
          </article>

          <article className={s.decision}>
            <h3>4. Asking about your role, not topics</h3>
            <p className={s.ruleLine}>Only ask what you will use.</p>
            <div className={s.prose}>
              <p>Onboarding asked people to choose topics, but every recording already says the topic. So I changed the first question to “What do you do?”. A founder and an engineer would write the same idea in different ways, and Denlo needs this later to learn how you post. Your role only changes the tone and the words. Denlo never writes “As a founder, I…” unless you said it.</p>
            </div>
          </article>

          <article className={s.decision}>
            <h3>5. Small details</h3>
            <ol className={`${s.cards} ${s.cards2}`}>
              {HONEST.map(([t, d]) => (
                <li key={t}><strong>{t}</strong><span>{d}</span></li>
              ))}
            </ol>
          </article>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>05</span>Four turning points</h2>
          <ol className={s.turns}>
            {TURNS.map(([t, ft, d], i) => (
              <li key={t}><span className={s.stepN}>0{i + 1}</span><strong>{t}</strong><span className={s.fromTo}>{ft}</span><span>{d}</span></li>
            ))}
          </ol>
          <details className={s.more}>
            <summary>See the full timeline ({LOG.length} changes)</summary>
            <div className={s.log}>
              {LOG.map(([d, w, b], i) => (
                <div key={i} className={`${s.logRow} ${s.log3}`}>
                  <div className={s.logDate}>{d}</div>
                  <div className={s.logArea}>{w}</div>
                  <div className={s.logWhy}>{b}</div>
                </div>
              ))}
            </div>
          </details>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>06</span>Outcome</h2>
          <div className={s.stats}>
            <div><strong>7 days</strong>From the first design direction to launch on the App Store.</div>
            <div><strong>1 withdrawal</strong>My choice, so real users would see a finished app.</div>
            <div><strong className={s.statWord}>Live on the App Store</strong>Denlo 1.0, launched on 2 October 2026.</div>
          </div>
          <div className={s.prose}>
            <p className={s.big}>Denlo 1.0 <a href="https://apps.apple.com/au/app/denlo-voice-notes-to-posts/id6816117475" target="_blank" rel="noopener">launched on the App Store</a> on 2 October 2026, with the redesign, the new onboarding and paywall, and the new App Store page.</p>
          </div>
          <Cmp tall cap="The App Store screenshots I designed for launch. They are designed scenes, not plain screen captures." items={[
            { src: 'store-01.webp', alt: 'App Store screenshot: voice notes to posts', tone: LILAC },
            { src: 'store-02.webp', alt: 'App Store screenshot: every platform', tone: LILAC },
            { src: 'store-04.webp', alt: 'App Store screenshot: your words, your meaning', tone: LILAC },
          ]} />
          <div className={s.outcome}>
            <div><div className={s.label}>Delivered</div><p>Visual style and design tokens for light mode, dark mode and increased contrast, logo colours, every iPhone screen, motion for the key moments, image scenes and palettes, onboarding, paywall and pricing, and the App Store screenshots.</p></div>
            <div><div className={s.label}>How I worked</div><p>I designed in clickable prototypes and checked them on a real iPhone, not only in static mockups. This way, I could see every decision where people would really use it.</p></div>
            <div><div className={s.label}>What I’d do differently</div><p>Plan the first impression, the motion and where the price shows before the first submission. Withdrawing worked, but it was a fix, not a plan.</p></div>
          </div>
        </section>
      </main>

      <footer className={s.foot}>
        <a href="/#work" className={s.back}>← Back to all work</a>
      </footer>
    </div>
  );
}
