const principles = [
  {
    number: "01",
    title: "No quiet corners",
    copy: "Launch details, contract information, and meaningful updates belong in public. If it is not on an official channel, it is not RipCoin.",
  },
  {
    number: "02",
    title: "No insider lane",
    copy: "No presale, no private allocation, and no paid shortcut. The community gets the same information at the same time.",
  },
  {
    number: "03",
    title: "No fake certainty",
    copy: "Memecoins are volatile and speculative. RipCoin makes no promises of profit and never asks anyone to risk money they cannot afford to lose.",
  },
];

const fieldNotes = [
  "Ignore DMs offering early access or support.",
  "Never share a seed phrase, recovery phrase, or private key.",
  "Verify every contract address against both official channels.",
  "Treat urgency, guaranteed returns, and secret links as red flags.",
];

const roadmap = [
  {
    label: "Now",
    title: "Build the signal",
    copy: "Establish the brand, secure the official channels, publish plain-language safety guidance, and grow the community organically.",
  },
  {
    label: "Next",
    title: "Publish the proof",
    copy: "Share final launch mechanics, verify the official contract in public, and make the project easy to inspect before anyone acts.",
  },
  {
    label: "Later",
    title: "Let culture lead",
    copy: "Create useful scam-awareness content, community campaigns, and partnerships without pretending a roadmap is a guarantee.",
  },
];

const faqs = [
  {
    question: "Is RipCoin live?",
    answer:
      "No. RipCoin is in pre-launch. There is no official contract address yet, no presale, and nothing official to buy. Launch details will appear on this site, Telegram, and X at the same time.",
  },
  {
    question: "Where will the contract address be posted?",
    answer:
      "Only on ripcoin.io and the two official accounts linked on this page. Never trust a contract address sent by direct message, reply account, or unofficial group.",
  },
  {
    question: "Does RipCoin promise returns?",
    answer:
      "No. RipCoin is a community memecoin project, not an investment product. Crypto can lose value quickly and completely. Always do your own research.",
  },
  {
    question: "Why does RipCoin exist?",
    answer:
      "RipCoin turns the frustration of rugs, fake promises, and insider games into a culture built around public information, scam awareness, and community-first participation.",
  },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-mark brand-mark--compact" : "brand-mark"} aria-hidden="true">
      <span>RIP</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RipCoin home">
          <BrandMark compact />
          <span className="brand-word">RIPCOIN</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#manifesto">Manifesto</a>
          <a href="#safety">Safety</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#questions">FAQ</a>
        </nav>
        <a
          className="header-cta"
          href="https://t.me/TheRipCoinOfficial"
          target="_blank"
          rel="noreferrer"
        >
          Join the community <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> PRE-LAUNCH / SOLANA</p>
          <h1>
            Bury the hype.
            <br />
            <em>Back the community.</em>
          </h1>
          <p className="hero-intro">
            RipCoin is the memecoin for people who are done with rug pulls, insider games, and mystery wallets.
            Public information. Fair access. Zero fake promises.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noreferrer">
              Telegram <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--line" href="https://x.com/OfficialRipCoin" target="_blank" rel="noreferrer">
              Follow on X <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="microcopy">No contract address. No presale. Nothing official to buy yet.</p>
        </div>

        <div className="hero-visual" aria-label="RipCoin pre-launch status">
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          <div className="coin-stack coin-stack--back" />
          <div className="coin-stack coin-stack--mid" />
          <div className="hero-coin">
            <div className="coin-rim">
              <span className="coin-topline">COMMUNITY ISSUE</span>
              <BrandMark />
              <span className="coin-bottomline">NO FALSE PROMISES</span>
            </div>
          </div>
          <div className="status-stamp">
            <span className="status-dot" />
            STATUS
            <strong>PRE-LAUNCH</strong>
          </div>
          <p className="visual-note">A movement against rugs, not a promise of riches.</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="RipCoin launch principles">
        <div><span>01</span><strong>NO PRESALE</strong></div>
        <div><span>02</span><strong>NO PRIVATE SALE</strong></div>
        <div><span>03</span><strong>NO HIDDEN TEAM WALLET</strong></div>
        <div><span>04</span><strong>NO GUARANTEED RETURNS</strong></div>
      </section>

      <section className="manifesto section-shell" id="manifesto">
        <div className="section-kicker">
          <span>THE MANIFESTO</span>
          <span>RIP / 001</span>
        </div>
        <div className="manifesto-grid">
          <h2>Crypto deserves<br />a better warning label.</h2>
          <div>
            <p className="lead">
              RipCoin was born from the part of crypto nobody likes to talk about: rugs, impersonators, paid hype,
              and communities treated as exit liquidity.
            </p>
            <p>
              The answer is not another impossible promise. It is a louder, clearer standard: say what is known,
              say what is not, and give everyone the tools to verify it for themselves.
            </p>
          </div>
        </div>

        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="safety" id="safety">
        <div className="safety-copy">
          <div className="section-kicker section-kicker--light">
            <span>SCAM FIELD MANUAL</span>
            <span>READ BEFORE YOU CLICK</span>
          </div>
          <h2>If it arrives in your DMs,<br /><em>it is not us.</em></h2>
          <p>
            RipCoin will never privately ask for funds, send a secret contract, or request wallet credentials.
            Official information appears publicly and can be checked by anyone.
          </p>
          <a className="button button--electric" href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noreferrer">
            Verify on Telegram <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="field-list">
          {fieldNotes.map((note, index) => (
            <div key={note}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="roadmap section-shell" id="roadmap">
        <div className="section-kicker">
          <span>THE ROAD AHEAD</span>
          <span>SUBJECT TO REALITY</span>
        </div>
        <div className="roadmap-heading">
          <h2>Plans, not prophecies.</h2>
          <p>
            A roadmap should explain what we are working toward—not disguise guesses as guarantees.
          </p>
        </div>
        <div className="roadmap-grid">
          {roadmap.map((item, index) => (
            <article key={item.label}>
              <div className="roadmap-index">
                <span>{item.label}</span>
                <strong>0{index + 1}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq section-shell" id="questions">
        <div className="section-kicker">
          <span>PLAIN ANSWERS</span>
          <span>NO FINE PRINT</span>
        </div>
        <div className="faq-grid">
          <div>
            <h2>Before you ask.</h2>
            <p>Start here. Then verify every meaningful update in public.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="summary-mark" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="closing-mark"><BrandMark /></div>
        <p className="eyebrow"><span /> OFFICIAL CHANNELS ONLY</p>
        <h2>Don&apos;t trust.<br /><em>Verify.</em></h2>
        <p>Follow both official channels. If the information does not match, stop.</p>
        <div className="hero-actions">
          <a className="button button--dark" href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noreferrer">Telegram ↗</a>
          <a className="button button--line" href="https://x.com/OfficialRipCoin" target="_blank" rel="noreferrer">X / Twitter ↗</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <BrandMark compact />
          <span>RIPCOIN</span>
        </div>
        <p>
          RipCoin is a community memecoin project. Crypto assets are highly volatile and may lose all value.
          Nothing on this site is financial advice. Always do your own research.
        </p>
        <div className="footer-meta">
          <span>© 2026 RIPCOIN</span>
          <span>RIPCOIN.IO</span>
        </div>
      </footer>
    </main>
  );
}
