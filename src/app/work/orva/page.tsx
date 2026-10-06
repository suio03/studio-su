import type { Metadata } from 'next';
import s from './case.module.css';

export const metadata: Metadata = {
  title: 'Orva case study — Suyun Chen · Studio Sü',
  description:
    'How I designed Orva, an AI health companion for older heart-failure patients on a shared hospital tablet: brand, mascot, chat UI and design system.',
};

const IMG = '/work/orva-cs/';

/* Images still to come from the Figma file. Rendered as a labelled placeholder until the file exists. */
function Fig({ src, alt, cap, wide, tone, pending, phone }: { src?: string; alt?: string; cap?: string; wide?: boolean; tone?: string; pending?: string; phone?: boolean }) {
  return (
    <figure className={`${s.fig} ${wide ? s.wide : ''}`}>
      <div className={`${s.frame} ${phone ? s.phone : ''}`} style={tone ? { background: tone } : undefined}>
        {pending ? <div className={s.pending}>{pending}</div> : <img src={IMG + src} alt={alt} loading="lazy" />}
      </div>
      {cap && <figcaption>{cap}</figcaption>}
    </figure>
  );
}

type Shot = { src: string; alt: string; label?: string; tone?: string; phone?: boolean; fill?: boolean };

/* Side-by-side screens in equal-height stages, so a landscape and a portrait image still balance. */
function Cmp({ items, cap, short }: { items: Shot[]; cap?: string; short?: boolean }) {
  return (
    <figure className={s.fig}>
      <div className={s.cmp} style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
        {items.map((it) => (
          <div key={it.src} className={`${s.stage} ${short ? s.short : ''} ${it.fill ? s.fill : ''}`} style={it.tone ? { background: it.tone } : undefined}>
            {it.label && <span className={s.chip}>{it.label}</span>}
            <img src={IMG + it.src} alt={it.alt} loading="lazy" className={it.phone ? s.phoneImg : undefined} />
          </div>
        ))}
      </div>
      {cap && <figcaption>{cap}</figcaption>}
    </figure>
  );
}

const SNAPSHOT: [string, string][] = [
  ['Role', 'Sole designer, end to end: brand, mascot, UI, design system, handoff'],
  ['Client', 'Asmovian, a med-tech start-up working with hospital clinicians'],
  ['Timeline', 'Aug 2025 – Feb 2026, part-time freelance'],
  ['Team', 'Me, the founder / product lead, a clinical lead and a React developer'],
  ['Platform', '8.7″ Android tablet (1340 × 800) in hospital, plus web'],
  ['Users', 'Heart-failure patients, many over 65 and new to chat apps'],
];

const CONSTRAINTS: [string, string][] = [
  ['Older users', 'Many patients are over 65 and have never used a chat app. Text has to be large and readable, with one clear action per screen.'],
  ['A shared hospital tablet', 'One fixed device: an 8.7″ tablet at 1340 × 800, used in portrait and landscape.'],
  ['Trust without fear', 'It explains real medical information, so it must feel accurate and safe, but warm rather than clinical.'],
  ['Room to grow', 'The pilot is heart failure, but the brand can’t be tied to one condition, so it can expand to diabetes, cancer and more.'],
  ['Real deadlines', 'Designs had to be ready for a consumer panel and a hospital demo, with the developer building in parallel.'],
];

const STEPS: [string, string][] = [
  ['Share a round', 'A Figma link plus a short email: what changed, and how it answers each piece of feedback.'],
  ['Client reviews', 'The founder and clinical lead review, sometimes with a consumer panel or hospital staff.'],
  ['Clarify before designing', 'I asked questions before each round, e.g. should the welcome visual be a single hero image or a step-by-step tutorial? The answer (hero) decided the layout.'],
  ['Iterate and log it', 'Every round is kept in Figma on a dated timeline, so anyone can see what changed and why.'],
];

const LOG: [string, string, string, string][] = [
  ['Feb 2026', 'Text-to-speech', 'Speaker button on each message instead of one global player; volume slider removed', 'My proposal on the client’s first build'],
  ['Jan 2026', 'Feedback states', 'Selected colours for thumbs up / down and “Report”, added to the design system', 'Client: the coded colours looked off'],
  ['Dec 2025', 'Chat + Notify Me', 'Dark mode, scroll bars, privacy-policy checkbox and page', 'Client and clinical lead comments'],
  ['Nov 2025', 'Chat interface', 'Sidebar replaced by a top bar + small menu; one continuous conversation; portrait and landscape', 'Call with client: sidebar too wide on a portrait tablet'],
  ['Nov 2025', 'Mascot', 'Medical cross added to the robot, now “the face of Orva”', 'Client: make it feel more medical'],
  ['Nov 2025', 'Notify Me', 'Role choice on one line and optional; consent tick removed; Cancel button; smaller dialog', 'Client review of v1'],
  ['Oct 2025', 'Notify Me', 'Sign Up replaced by a “Notify Me” dialog for interested patients and clinicians', 'Product moved to a waitlist before launch'],
  ['Oct 2025', 'Welcome + logo', 'Hero illustration instead of text blocks; Login moved to the corner; younger character; final logotype', 'Consumer panel deadline + client feedback'],
  ['Sep 2025', 'Welcome + logo', 'First round: three logo directions; welcome page with three benefit cards and a central Login', 'Initial brief'],
];

export default function OrvaCaseStudy() {
  return (
    <div className={s.page}>
      <header className={s.top}>
        <a href="/" className={s.brand}>Studio S<span>ü</span></a>
        <nav className={s.topNav}>
          <a href="/#work" className={s.back}>← All work</a>
          <a href="mailto:hello@studiosu.dev?subject=About%20Orva" target="_blank" rel="noopener" className={s.hi}>Say hi</a>
        </nav>
      </header>

      <section className={s.hero}>
        <div className={s.heroText}>
          <div className={s.eyebrow}>Case study · Client project · 2025–26</div>
          <img src={IMG + 'logo-final.webp'} alt="Orva" className={s.logo} />
          <h1>Designing an AI health companion older patients can trust</h1>
          <p className={s.lead}>
            Orva explains diagnoses, medications and care plans in plain language, for heart-failure patients in a public hospital in Western Australia. The client asked for a light reskin of an off-the-shelf chatbot. It became the whole product: brand, mascot, every patient screen and the design system the developer built from.
          </p>
        </div>
        <div className={s.heroImg}><img src={IMG + 'hero.webp'} alt="A patient using Orva on a tablet at home" /></div>
      </section>

      <section className={s.snapshot}>
        {SNAPSHOT.map(([k, v]) => (
          <div key={k}><div className={s.label}>{k}</div><div>{v}</div></div>
        ))}
      </section>

      <main className={s.body}>
        <section className={s.block}>
          <h2><span className={s.num}>01</span>The starting point</h2>
          <div className={s.split}>
          <div className={s.prose}>
            <p>When I joined, Orva was a generic chatbot running on the hospital tablet: small text, a plain purple bubble for the AI and no brand at all. It worked, but nothing about it said <em>this is safe, and it’s for you</em> to an older patient who had never used a chat app.</p>
          </div>
          <Fig src="before-chatbot.webp" alt="The original chatbot running on the hospital tablet" cap="Before: the client’s off-the-shelf chatbot on the hospital tablet." />
          </div>
          <h3 className={s.h3}>The constraints shaped every decision</h3>
          <ol className={s.cards}>
            {CONSTRAINTS.map(([t, d]) => (
              <li key={t}><strong>{t}</strong><span>{d}</span></li>
            ))}
          </ol>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>02</span>How the work ran</h2>
          <div className={s.prose}>
            <p>There was no formal research phase. The client team tested designs with patients and hospital staff, and I iterated on what came back. Over seven months that loop ran through 100+ emails, Figma comments and video calls.</p>
          </div>
          <ol className={s.steps}>
            {STEPS.map(([t, d], i) => (
              <li key={t}><span className={s.stepN}>{i + 1}</span><strong>{t}</strong><span>{d}</span></li>
            ))}
          </ol>
          <div className={s.prose}>
            <p>To keep feedback from getting lost, I split the Figma file into a dated <em>Drafts</em> page, a <em>Tasks &amp; Decisions</em> page and a clean <em>Handoff</em> page, and asked the client to comment only on the handoff page.</p>
          </div>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>03</span>Key decisions</h2>

          <article className={s.decision}>
            <h3>A logo about people, not medicine</h3>
            <div className={s.prose}>
              <p>I explored three directions: a medical cross, a chat bubble with a cross, and two people embracing inside an “O”. The clinical lead chose the embrace: it says <em>care</em>, doubles as the “O” in Orva, and isn’t tied to one condition. Two more rounds refined the colour, removed decorative geometry and turned the icon into the logotype.</p>
            </div>
            <figure className={s.fig}>
              <div className={s.trio}>
                <div><img src={IMG + 'logo-idea1.webp'} alt="Logo idea one: a medical cross" /><span>1 · A medical cross</span></div>
                <div className={s.chosen}><img src={IMG + 'logo-idea2.webp'} alt="Logo idea two: two people embracing" /><span>2 · Two people embracing ✓</span></div>
                <div><img src={IMG + 'logo-idea3.webp'} alt="Logo idea three: a chat bubble with a cross" /><span>3 · A chat bubble with a cross</span></div>
              </div>
              <figcaption>Three directions: credibility, connection, conversation. The clinical lead picked connection.</figcaption>
            </figure>
            <Cmp short cap="Iterating on the chosen idea, then the final logotype: the icon becomes the “O”." items={[
              { src: 'logo-iteration.webp', alt: 'Colour iterations of the embrace logo', label: 'Iterations', tone: '#FFFFFF' },
              { src: 'logo-final.webp', alt: 'Final Orva logotype', label: 'Final', tone: '#FFFFFF' },
            ]} />
          </article>

          <article className={s.decision}>
            <h3>Show the product, don’t describe it</h3>
            <div className={s.prose}>
              <p>Version one of the welcome page explained Orva in three text cards with Login in the centre. Feedback said it needed to grab attention for people who had never heard of Orva. Before redesigning, I asked one question: hero image or step-by-step tutorial? The answer was a hero, so the page became one illustration of a patient using Orva on a tablet, with Login moved to the corner.</p>
              <p>After the client saw it, the character became younger. People in their late 50s and older still want to feel young.</p>
            </div>
            <Cmp cap="v1 explained Orva in three text cards. The final page shows it: one illustration, Login in the corner." items={[
              { src: 'welcome-v1.webp', alt: 'First welcome page with three text cards and a central Login button', label: 'Before', tone: '#F4F1F6' },
              { src: 'welcome-final.webp', alt: 'Final Orva welcome screen', label: 'After', tone: '#EDE6F2', phone: true },
            ]} />
          </article>

          <article className={s.decision}>
            <h3>A mascot that makes AI feel safe</h3>
            <div className={s.split}>
              <div className={s.prose}>
                <p>The small robot started as decoration and became “the face of Orva”: it appears on every AI reply, so patients always know who is talking. I added a medical cross so it reads as a care companion rather than a gadget, while keeping it friendly.</p>
              </div>
              <figure className={s.fig}>
                <div className={s.robots}>
                  <div><img src={IMG + 'robot.webp'} alt="Orva robot mascot before the change" /><span>Before</span></div>
                  <div><img src={IMG + 'robot-cross.webp'} alt="Orva robot mascot with a medical cross on its band" /><span>After: a cross on the band</span></div>
                </div>
              </figure>
            </div>
          </article>

          <article className={s.decision}>
            <h3>Fit the chat to one tablet, not every screen</h3>
            <div className={s.prose}>
              <p>My first chat design had a left sidebar with chat history and settings. In a call, the client showed me the real device: an 8.7″ tablet, often held in portrait, where the sidebar took up too much of the screen.</p>
              <p>I moved navigation into a top bar with a small menu, kept one continuous conversation instead of separate chat sessions, and designed both orientations at 1340 × 800. I also cut references and voice playback from v1 so the first release stayed simple, and added a “Welcome back” screen and an emergency “Call 000” option.</p>
            </div>
            <Cmp cap="The sidebar version took up too much of a portrait screen. The final chat uses a top bar, one conversation and A−/A+ text size, with a dark mode added later." items={[
              { src: 'chat-sidebar.webp', alt: 'First chat design with a left sidebar, shown on a tablet', label: 'Before', tone: '#E9E4EC', fill: true },
              { src: 'chat-final.webp', alt: 'Final Orva chat screen in portrait', label: 'After', tone: '#EDE6F2', phone: true },
              { src: 'dark-chat.webp', alt: 'Orva chat in dark mode', label: 'Dark mode', tone: '#2A2730', phone: true },
            ]} />
          </article>

          <article className={s.decision}>
            <h3>Fewer controls for older users</h3>
            <div className={s.prose}>
              <p>When the client built text-to-speech, it had one floating player with its own volume slider, and a settings dialog with a second one. I proposed two changes:</p>
              <ul>
                <li><strong>A speaker button on each message.</strong> People scroll back through the conversation. With one global player they lose track of which message is playing; on each message, it’s always clear.</li>
                <li><strong>No extra volume control.</strong> Tablets already have volume buttons. Another slider is one more thing for an older user to get wrong, so I removed it and pointed to the device volume.</li>
              </ul>
            </div>
            <Cmp cap="The player: one global bar with its own volume, replaced by a speaker on the message being read, with pause, stop and “Orva is speaking…”." items={[
              { src: 'tts-before-player.webp', alt: 'First build: one global audio player with a volume slider', label: 'Before', tone: '#F4F1F6' },
              { src: 'tts-after-playing.webp', alt: 'Redesign: a speaker button and a small player on the message being read', label: 'After', tone: '#EDE6F2', phone: true },
            ]} />
            <Cmp cap="Settings: the second volume slider is gone. A note points to the tablet’s own volume buttons." items={[
              { src: 'tts-before-settings.webp', alt: 'First build: text-to-speech settings dialog with a volume slider', label: 'Before', tone: '#F4F1F6' },
              { src: 'tts-after-settings.webp', alt: 'Redesigned text-to-speech settings pointing to the device volume', label: 'After', tone: '#EDE6F2', phone: true },
            ]} />
          </article>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>04</span>Iteration log</h2>
          <div className={s.prose}><p>Taken from the emails and the dated timeline in Figma, newest first.</p></div>
          <div className={s.log}>
            {LOG.map(([d, a, w, b], i) => (
              <div key={i} className={s.logRow}>
                <div className={s.logDate}>{d}</div>
                <div className={s.logArea}>{a}</div>
                <div className={s.logWhat}>{w}</div>
                <div className={s.logWhy}>{b}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>05</span>Outcome</h2>
          <div className={s.split}>
          <div className={s.prose}>
            <p className={s.big}>The designs went straight into production. Seven weeks after the first round, the client’s developer had built the welcome page and chat from my files and demoed them live to hospital staff. Every round after that was coded from the Figma handoff and design system.</p>
          </div>
          <Fig src="design-system.webp" alt="Orva design system: colour and typography" cap="Part of the design system the developer built from." tone="#FFFFFF" />
          </div>
          <div className={s.outcome}>
            <div><div className={s.label}>Delivered</div><p>Logo and logotype, mascot, welcome / login / Notify Me flows, patient chat in portrait and landscape, dark mode, text-to-speech controls, and a design system with feedback states.</p></div>
            <div><div className={s.label}>Trust earned</div><p>The client came back for each new feature, then asked me to design the clinician portal. A year after the first round, the founder got in touch again: Orva is “progressing well” and heading into a clinical trial, and he brought me a new project.</p></div>
            <div><div className={s.label}>What I’d do differently</div><p>Set up a clean handoff file from day one. I reorganised it mid-project, once comments started getting lost.</p></div>
          </div>
        </section>
      </main>

      <footer className={s.foot}>
        <a href="/#work" className={s.back}>← Back to all work</a>
      </footer>
    </div>
  );
}
