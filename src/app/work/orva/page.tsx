import type { Metadata } from 'next';
import s from '../case.module.css';
import { Fig as SharedFig, Cmp as SharedCmp, type Shot } from '../parts';

export const metadata: Metadata = {
  title: 'Orva case study — Suyun Chen · Studio Sü',
  description:
    'How I designed Orva, an AI health app for older heart-failure patients on a hospital tablet. I designed the brand, mascot, chat screens and design system.',
};

const IMG = '/work/orva-cs/';

function Fig(p: { src: string; alt: string; cap?: string; tone?: string; phone?: boolean }) {
  return <SharedFig base={IMG} {...p} />;
}
function Cmp(p: { items: Shot[]; cap?: string; short?: boolean }) {
  return <SharedCmp base={IMG} {...p} />;
}

const SNAPSHOT: [string, string][] = [
  ['Role', 'The only designer: brand, mascot, screens, design system and handoff'],
  ['Client', 'Asmovian, a small med-tech company that works with a hospital'],
  ['Timeline', 'Aug 2025 – Feb 2026, part-time freelance'],
  ['Team', 'Me, the founder, a clinical lead and a React developer'],
  ['Platform', '8.7″ Android tablet (1340 × 800) in the hospital, and web'],
  ['Users', 'Heart-failure patients. Many are over 65 and have never used a chat app'],
];

const PRINCIPLES: [string, string][] = [
  ['Clear', 'One main action at a time. Big text, and nothing on the screen that the patient doesn’t need yet.'],
  ['Familiar', 'Use things patients already know, like a simple conversation and the tablet’s own buttons.'],
  ['Warm, not childish', 'Friendly enough to calm people down, and serious enough to trust with medical information.'],
];

const CONSTRAINTS: [string, string][] = [
  ['Older users', 'Many patients are over 65 and have never used a chat app.'],
  ['One hospital tablet', 'There is only one device: an 8.7″ tablet, 1340 × 800. People use it in portrait and landscape.'],
  ['Medical information', 'It gives real medical information, so it has to feel correct and safe.'],
  ['Room to grow', 'The first version is for heart failure. Later it may cover diabetes, cancer and more, so the brand can’t be only about the heart.'],
  ['Real deadlines', 'The designs had to be ready for a consumer panel and a hospital demo. The developer was building at the same time.'],
];

const STEPS: [string, string][] = [
  ['Send a round', 'I sent a Figma link and a short email: what I changed, and how it answers each comment.'],
  ['Client review', 'The founder and the clinical lead reviewed it. Sometimes they also showed it to a consumer panel or hospital staff.'],
  ['Ask first', 'Before each round I asked questions. For example: should the welcome page have one big image, or a step-by-step tutorial? They chose one image, and that decided the layout.'],
  ['Change and record', 'I kept every round in Figma on a dated timeline, so anyone can see what changed and why.'],
];

const TURNS: [string, string, string][] = [
  ['The brand became about people', 'medical → human', 'The clinical lead chose two people hugging over a medical cross.'],
  ['The real tablet changed the navigation', 'sidebar → top bar', 'A sidebar was too wide on an 8.7″ tablet in portrait.'],
  ['Older users changed the forms', 'many choices → one action', 'Notify Me became one optional line, with no extra consent tick.'],
  ['The real build changed text-to-speech', 'one player → a speaker on each message', 'And the extra volume sliders were removed.'],
];

const LOG: [string, string, string, string][] = [
  ['Feb 2026', 'Text-to-speech', 'A speaker button on each message, instead of one player for the whole chat. Volume slider removed', 'My suggestion after the client’s first build'],
  ['Jan 2026', 'Feedback states', 'Selected colours for thumbs up / down and “Report”, added to the design system', 'Client: the colours in the build looked wrong'],
  ['Dec 2025', 'Chat + Notify Me', 'Dark mode, scroll bars, privacy policy checkbox and page', 'Comments from the client and the clinical lead'],
  ['Nov 2025', 'Chat screen', 'Sidebar replaced by a top bar and a small menu. One long conversation. Portrait and landscape', 'Call with the client: the sidebar was too wide on a portrait tablet'],
  ['Nov 2025', 'Mascot', 'Medical cross added to the robot. It became “the face of Orva”', 'Client: make it look more medical'],
  ['Nov 2025', 'Notify Me', 'Role choice on one line and optional. Consent tick removed. Cancel button added. Smaller dialog', 'Client review of v1'],
  ['Oct 2025', 'Notify Me', 'Sign Up replaced by a “Notify Me” dialog for interested patients and clinicians', 'The product moved to a waitlist before launch'],
  ['Oct 2025', 'Welcome + logo', 'One big illustration instead of text blocks. Login moved to the corner. Younger character. Final logo', 'Consumer panel deadline and client feedback'],
  ['Sep 2025', 'Welcome + logo', 'First round: three logo ideas. Welcome page with three text cards and Login in the middle', 'First brief'],
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
          <h1>Designing an AI health app that older patients can trust</h1>
          <p className={s.lead}>
            Orva explains diagnoses, medicines and care plans in simple words. It is for heart-failure patients at a public hospital in Western Australia. At first, the client only wanted a new look for a ready-made chatbot. In the end, I designed the whole product: the brand, the mascot, every patient screen, and the design system the developer used to build it.
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
          <h2><span className={s.num}>01</span>The challenge</h2>
          <p className={s.question}>How do you make AI health advice easy to understand and easy to trust, for patients who may never have used a chat app?</p>
          <div className={s.split}>
          <div className={s.prose}>
            <p>When I joined, Orva was a basic chatbot on the hospital tablet. The text was small, the AI replies were plain purple bubbles, and there was no brand. It worked. But for an older patient who had never used a chat app, nothing on the screen said <em>this is safe, and it’s for you</em>.</p>
          </div>
          <Fig src="before-chatbot.webp" alt="The original chatbot on the hospital tablet" cap="Before: the client’s ready-made chatbot on the hospital tablet." />
          </div>
          <h3 className={s.h3}>Three rules for every screen</h3>
          <ol className={s.principles}>
            {PRINCIPLES.map(([t, d], i) => (
              <li key={t}><span className={s.stepN}>0{i + 1}</span><strong>{t}</strong><span>{d}</span></li>
            ))}
          </ol>
          <p className={s.quote}>Making things bigger was not enough.<span>The real work was giving patients fewer things to decide.</span></p>
          <h3 className={s.h3}>The limits I worked with</h3>
          <ol className={s.cards}>
            {CONSTRAINTS.map(([t, d]) => (
              <li key={t}><strong>{t}</strong><span>{d}</span></li>
            ))}
          </ol>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>02</span>Key decisions</h2>

          <article className={`${s.decision} ${s.feature}`}>
            <span className={s.tag}>Clear · Familiar</span>
            <h3>Remove a control, don’t add one</h3>
            <ul className={s.pdw}>
              <li><em>Problem</em>The client’s first build had two volume controls: one in the audio player and one in settings. That meant two places for an older patient to make the same choice.</li>
              <li><em>Decision</em>Remove both sliders and point to the tablet’s own volume buttons. Put a speaker button on each message, instead of one player for the whole chat.</li>
              <li><em>Why</em>The easiest control is often the one people already know. And people scroll back through the chat, so a speaker on each message always shows which one is playing.</li>
            </ul>
            <Cmp cap="The player: one bar for the whole chat with its own volume. It was replaced by a speaker on the message being read, with pause, stop and “Orva is speaking…”." items={[
              { src: 'tts-before-player.webp', alt: 'First build: one audio player with a volume slider', label: 'Before', tone: '#F4F1F6' },
              { src: 'tts-after-playing.webp', alt: 'Redesign: a speaker button and a small player on the message being read', label: 'After', tone: '#EDE6F2', phone: true },
            ]} />
            <Cmp cap="Settings: the second volume slider is gone. A note points to the tablet’s volume buttons." items={[
              { src: 'tts-before-settings.webp', alt: 'First build: text-to-speech settings with a volume slider', label: 'Before', tone: '#F4F1F6' },
              { src: 'tts-after-settings.webp', alt: 'New text-to-speech settings with a note about the tablet volume', label: 'After', tone: '#EDE6F2', phone: true },
            ]} />
          </article>

          <article className={s.decision}>
            <span className={s.tag}>Clear</span>
            <h3>Designing for one tablet</h3>
            <div className={s.prose}>
              <p>My first chat design had a sidebar with chat history and settings. In a call, the client showed me the real device: an 8.7″ tablet, often used in portrait. The sidebar took up too much space.</p>
              <p>But the real problem was not screen size. It was attention. A sidebar asked first-time chat users to learn navigation they didn’t need yet. So I replaced it with a small top bar and one long conversation, and designed both portrait and landscape. I also took references and voice playback out of the first version to keep it simple, and added an emergency “Call 000” button.</p>
            </div>
            <Cmp cap="The sidebar took up too much space in portrait. The final chat has a top bar, one conversation and A−/A+ text size. Dark mode came later." items={[
              { src: 'chat-sidebar.webp', alt: 'First chat design with a left sidebar, on a tablet', label: 'Before', tone: '#E9E4EC', fill: true },
              { src: 'chat-final.webp', alt: 'Final Orva chat screen in portrait', label: 'After', tone: '#EDE6F2', phone: true },
              { src: 'dark-chat.webp', alt: 'Orva chat in dark mode', label: 'Dark mode', tone: '#2A2730', phone: true },
            ]} />
          </article>

          <article className={s.decision}>
            <span className={s.tag}>Clear</span>
            <h3>Show the app instead of explaining it</h3>
            <div className={s.prose}>
              <p>The first welcome page explained Orva in three text cards. But people who have never heard of Orva won’t read three cards. Before I redesigned it, I asked one question: one big image, or a step-by-step tutorial? They chose one image. So the page became one illustration of a patient using Orva, with Login in the corner.</p>
              <p>After the client saw it, I made the character look younger. People in their late 50s and older still want to feel young.</p>
            </div>
            <Cmp cap="v1 explained Orva with three text cards. The final page shows it with one illustration, and Login is in the corner." items={[
              { src: 'welcome-v1.webp', alt: 'First welcome page with three text cards and a Login button in the middle', label: 'Before', tone: '#F4F1F6' },
              { src: 'welcome-final.webp', alt: 'Final Orva welcome screen', label: 'After', tone: '#EDE6F2', phone: true },
            ]} />
          </article>

          <article className={s.decision}>
            <span className={s.tag}>Warm, not childish</span>
            <h3>A logo about people, not medicine</h3>
            <div className={s.prose}>
              <p>A medical cross says “hospital”. But Orva will grow beyond one illness, and it should feel like care, not like a clinic. I tried three ideas, and the clinical lead chose two people hugging inside an “O”. It means <em>care</em>, it works as the “O” in Orva, and it isn’t about one illness.</p>
            </div>
            <figure className={s.fig}>
              <div className={s.trio}>
                <div><img src={IMG + 'logo-idea1.webp'} alt="Logo idea one: a medical cross" /><span>1 · A medical cross</span></div>
                <div className={s.chosen}><img src={IMG + 'logo-idea2.webp'} alt="Logo idea two: two people hugging" /><span>2 · Two people hugging ✓</span></div>
                <div><img src={IMG + 'logo-idea3.webp'} alt="Logo idea three: a chat bubble with a cross" /><span>3 · A chat bubble with a cross</span></div>
              </div>
              <figcaption>Three ideas: trust, connection and conversation. The clinical lead chose connection.</figcaption>
            </figure>
            <Cmp short cap="Two more rounds on the chosen idea, then the final logo. The icon becomes the “O”." items={[
              { src: 'logo-iteration.webp', alt: 'Colour versions of the hug logo', label: 'Iterations', tone: '#FFFFFF' },
              { src: 'logo-final.webp', alt: 'Final Orva logo', label: 'Final', tone: '#FFFFFF' },
            ]} />
          </article>

          <article className={s.decision}>
            <span className={s.tag}>Warm, not childish</span>
            <h3>A mascot that makes AI feel safe</h3>
            <div className={s.split}>
              <div className={s.prose}>
                <p>Patients need to know who is talking to them. The small robot started as decoration, and became “the face of Orva”: it is next to every AI reply. I added a medical cross so it looks like a care helper, not a toy, but it is still friendly.</p>
              </div>
              <figure className={s.fig}>
                <div className={s.robots}>
                  <div><img src={IMG + 'robot.webp'} alt="Orva robot mascot before the change" /><span>Before</span></div>
                  <div><img src={IMG + 'robot-cross.webp'} alt="Orva robot mascot with a medical cross on its band" /><span>After: a cross on the band</span></div>
                </div>
              </figure>
            </div>
          </article>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>03</span>How the project worked</h2>
          <div className={s.prose}>
            <p>There was no formal research stage. The client team tested my designs with patients and hospital staff, and I changed the designs based on their feedback. Over seven months, this happened through more than 100 emails, Figma comments and video calls.</p>
          </div>
          <ol className={s.steps}>
            {STEPS.map(([t, d], i) => (
              <li key={t}><span className={s.stepN}>{i + 1}</span><strong>{t}</strong><span>{d}</span></li>
            ))}
          </ol>
          <div className={s.prose}>
            <p>Feedback was getting lost, so I split the Figma file into three pages: <em>Drafts</em> with dates, <em>Tasks &amp; Decisions</em>, and a clean <em>Handoff</em> page. I asked the client to comment only on the Handoff page.</p>
          </div>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>04</span>Four turning points</h2>
          <ol className={s.turns}>
            {TURNS.map(([t, ft, d], i) => (
              <li key={t}><span className={s.stepN}>0{i + 1}</span><strong>{t}</strong><span className={s.fromTo}>{ft}</span><span>{d}</span></li>
            ))}
          </ol>
          <details className={s.more}>
            <summary>See the full timeline ({LOG.length} rounds)</summary>
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
          </details>
        </section>

        <section className={s.block}>
          <h2><span className={s.num}>05</span>Outcome</h2>
          <div className={s.stats}>
            <div><strong>7 weeks</strong>From the first designs to a working demo for hospital staff, built from my files.</div>
            <div><strong>100+</strong>Emails, Figma comments and calls with the client team.</div>
            <div><strong className={s.statWord}>They kept coming back</strong>Patient app → clinician portal → a new project from the founder.</div>
          </div>
          <div className={s.split}>
          <div className={s.prose}>
            <p className={s.big}>The designs went straight into the real product. After the first demo, every round was built from the Figma handoff and design system. A year after the first round, the founder contacted me again: Orva is “progressing well” and moving to a clinical trial.</p>
          </div>
          <Fig src="design-system.webp" alt="Orva design system: colour and typography" cap="Part of the design system the developer used." tone="#FFFFFF" />
          </div>
          <div className={s.outcome}>
            <div><div className={s.label}>Delivered</div><p>Logo, mascot, welcome / login / Notify Me flows, patient chat in portrait and landscape, dark mode, text-to-speech controls, and a design system with feedback states.</p></div>
            <div><div className={s.label}>Built as designed</div><p>The developer built the screens straight from my Figma handoff and design system. When the coded colours looked wrong, I added the missing states to the design system.</p></div>
            <div><div className={s.label}>What I’d do differently</div><p>Make a clean handoff file from the first day. I only reorganised it in the middle of the project, after comments started getting lost.</p></div>
          </div>
        </section>
      </main>

      <footer className={s.foot}>
        <a href="/#work" className={s.back}>← Back to all work</a>
      </footer>
    </div>
  );
}
