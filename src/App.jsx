import { useState, useEffect, useRef } from "react";
import logoImg from "./assets/logo.png";

const PHASES = [
  { num: 1, title: "Foundation", desc: "Build the RipCoin community organically, create the official channels, and protect members from fake tokens, copycats, and scams." },
  { num: 2, title: "Pre-Launch", desc: "Prepare launch materials, educate the community, and confirm all official launch details before anything goes live." },
  { num: 3, title: "Launch", desc: "Launch RipCoin publicly on Solana through a fair launch process. The official contract address will only be shared through verified RipCoin channels." },
  { num: 4, title: "Growth", desc: "Expand the community with daily updates, scam awareness, viral content, memes, and real organic engagement." },
  { num: 5, title: "Expansion", desc: "Upgrade the brand, grow partnerships, develop educational content, and increase visibility across crypto communities." },
  { num: 6, title: "Legacy", desc: "Build RipCoin into a long-term movement focused on transparency, community, scam awareness, and positive crypto culture." },
];

const STATS = [
  { icon: "💀", label: "HOLDERS", value: "0" },
  { icon: "📈", label: "MARKET CAP", value: "$0" },
  { icon: "💧", label: "LIQUIDITY", value: "$0" },
  { icon: "🔥", label: "VOLUME 24H", value: "$0" },
];

const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "How to Buy", href: "#how-to-buy" },
  { label: "Roadmap",    href: "#roadmap" },
  { label: "FAQ",        href: "#faq" },
];

const HOW_TO_BUY = [
  {
    step: "01",
    title: "Get Phantom Wallet",
    desc: "Download the Phantom wallet app on iOS, Android, or as a Chrome extension. Create a new wallet and securely save your seed phrase — never share it with anyone.",
    link: "https://phantom.app",
    linkLabel: "phantom.app →",
    icon: "👻",
  },
  {
    step: "02",
    title: "Buy SOL",
    desc: "Purchase Solana (SOL) from any major exchange like Coinbase, Binance, or Kraken. Then withdraw your SOL directly to your Phantom wallet address.",
    link: "https://coinbase.com",
    linkLabel: "coinbase.com →",
    icon: "💰",
  },
  {
    step: "03",
    title: "Go to pump.fun",
    desc: "Visit pump.fun and connect your Phantom wallet by clicking 'Connect Wallet' in the top right. Make sure you're on the official site — always verify the URL.",
    link: "https://pump.fun",
    linkLabel: "pump.fun →",
    icon: "🔗",
  },
  {
    step: "04",
    title: "Swap for $RIP",
    desc: "Search for RipCoin or paste the official $RIP contract address (shared only through verified channels). Enter the amount of SOL to swap and confirm the transaction.",
    link: null,
    linkLabel: null,
    icon: "💀",
  },
];

const FAQS = [
  {
    q: "Is $RIP a rug pull?",
    a: "No. RipCoin was born specifically as a reaction to rug pulls. There is no team wallet, no presale, no VC allocation, and no private sale. The token launches through pump.fun's fair-launch model — the community owns it from day one.",
  },
  {
    q: "When does $RIP launch?",
    a: "The exact launch date will be announced exclusively through our official Telegram and X channels. Follow both to be first to know. The contract address will ONLY be shared through verified RipCoin channels — never trust DMs or unofficial sources.",
  },
  {
    q: "What blockchain is $RIP on?",
    a: "RipCoin ($RIP) launches on the Solana blockchain via pump.fun. Solana offers fast transactions and very low fees, making it ideal for memecoin trading.",
  },
  {
    q: "How do I know the contract is safe?",
    a: "The contract address will only be shared through our verified Telegram (t.me/TheRipCoinOfficial) and X (@OfficialRipCoin). Always verify you have the correct address before buying. If someone DMs you an address, it's a scam.",
  },
  {
    q: "Why no presale or private sale?",
    a: "Presales and private sales are how insiders get rich while the community gets dumped on. $RIP is 100% fair launch — everyone buys at the same time, at the same price, with no advantages for any individual or group.",
  },
  {
    q: "How do I avoid $RIP scams?",
    a: "Simple rules: Only buy after the official contract address is posted on our Telegram and X. Never trust DMs. Never buy early access tokens. Never send SOL to anyone claiming to be the team. When in doubt, don't buy.",
  },
  {
    q: "Do I need a special wallet?",
    a: "You need a Solana-compatible wallet. Phantom Wallet is the most popular and easiest to use — available on iOS, Android, and as a Chrome extension. Download it only from phantom.app.",
  },
  {
    q: "Who is behind RipCoin?",
    a: "RipCoin is a community-driven project with no central team pulling strings. It was created as a movement against rug pulls and scams. There are no insiders, no founders with special allocations — just the community.",
  },
];

function Logo({ size = 120, blend = false }) {
  return (
    <img
      src={logoImg}
      alt="RipCoin Logo"
      width={size}
      height={size}
      style={{ objectFit: "contain", display: "block", mixBlendMode: blend ? "screen" : "normal" }}
    />
  );
}

function FloatingParticles() {
  const particles = useRef(
    Array.from({ length: 14 }).map(() => ({
      w: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      dur: 6 + Math.random() * 10,
      delay: Math.random() * 10,
      hue: 210 + Math.random() * 30,
      light: 50 + Math.random() * 30,
    }))
  );
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      {particles.current.map((p, i) => (
        <div key={i} style={{
          position: "absolute", width: p.w, height: p.w, borderRadius: "50%",
          background: `hsl(${p.hue}, 100%, ${p.light}%)`,
          left: `${p.left}%`, top: `${p.top}%`, opacity: 0.6,
          animation: `floatUp ${p.dur}s linear infinite`,
          animationDelay: `${p.delay}s`,
          boxShadow: `0 0 8px 2px hsl(${p.hue}, 100%, 70%)`,
        }} />
      ))}
    </div>
  );
}

export default function RipCoin() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  useEffect(() => {
    document.title = "RipCoin | $RIP";
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("May 22, 2026 - 4:00 PM UTC");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ fontFamily: "'Orbitron', 'Exo 2', sans-serif", background: "#02050f", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #02050f; }
        ::-webkit-scrollbar-thumb { background: #1a6fff; border-radius: 3px; }

        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 20px #1a6fff); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 40px #4488ff); }
        }
        @keyframes orbRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes menuSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealScale {
          from { opacity: 0; transform: scale(0.88); }
          to { opacity: 1; transform: scale(1); }
        }
        .reveal { opacity: 0; }
        .reveal.visible {
          animation-fill-mode: both;
          animation-duration: 0.75s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          opacity: 1;
        }
        .reveal-up.visible    { animation-name: revealUp; }
        .reveal-left.visible  { animation-name: revealLeft; }
        .reveal-right.visible { animation-name: revealRight; }
        .reveal-scale.visible { animation-name: revealScale; }
        .delay-1 { animation-delay: 0.1s !important; }
        .delay-2 { animation-delay: 0.2s !important; }
        .delay-3 { animation-delay: 0.3s !important; }
        .delay-4 { animation-delay: 0.4s !important; }
        .delay-5 { animation-delay: 0.5s !important; }
        .delay-6 { animation-delay: 0.6s !important; }

        .btn-primary {
          background: linear-gradient(135deg, #0a4fff, #0033bb);
          border: 1px solid #1a6fff;
          color: #fff;
          padding: 12px 22px;
          border-radius: 4px;
          font-family: 'Orbitron', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          box-shadow: 0 0 20px rgba(26,111,255,0.3);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #1a6fff, #0044dd);
          box-shadow: 0 0 35px rgba(26,111,255,0.6);
          transform: translateY(-1px);
        }
        .btn-outline {
          background: transparent;
          border: 1px solid #1a6fff;
          color: #8ab4ff;
          padding: 12px 22px;
          border-radius: 4px;
          font-family: 'Orbitron', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-outline:hover {
          background: rgba(26,111,255,0.1);
          color: #fff;
          box-shadow: 0 0 20px rgba(26,111,255,0.3);
        }
        .section-title {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 3px;
          color: #4488ff;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .glow-text {
          background: linear-gradient(90deg, #4488ff, #88bbff, #4488ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .nav-link {
          color: #8ab4ff;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 600;
          transition: color 0.2s;
          text-transform: uppercase;
        }
        .nav-link:hover { color: #fff; }
        .phase-card {
          background: rgba(5,12,40,0.8);
          border: 1px solid rgba(26,111,255,0.25);
          border-radius: 4px;
          padding: 22px 18px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .phase-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #1a6fff, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .phase-card:hover { border-color: rgba(26,111,255,0.6); transform: translateY(-4px); box-shadow: 0 8px 30px rgba(26,111,255,0.2); }
        .phase-card:hover::before { opacity: 1; }
        .scanline {
          position: fixed; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(26,111,255,0.3), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none; z-index: 999;
        }
        .hamburger {
          display: flex; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 6px; background: none; border: none;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: #8ab4ff; border-radius: 2px; transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); background: #fff; }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: #fff; }

        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-logo { order: -1; }
          .hero-btns { justify-content: center !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .stats-row .stat-card {
            flex: 1 1 calc(50% - 1px) !important;
            border-right: none !important;
          }
          .stats-row .stat-card:nth-child(odd) {
            border-right: 1px solid rgba(26,111,255,0.15) !important;
          }
          .phase-grid { grid-template-columns: 1fr !important; }
          .cta-box { padding: 36px 20px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .phase-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div className="scanline" />
      <FloatingParticles />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(0,40,120,0.4) 0%, #02050f 70%)" }} />

      {/* ── NAVBAR ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid rgba(26,111,255,0.15)", backdropFilter: "blur(20px)", background: "rgba(2,5,15,0.92)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, textDecoration: "none" }}>
            <Logo size={32} />
            <span style={{ fontSize: 16, fontWeight: 900, letterSpacing: 3, color: "#fff" }}>RIPCOIN</span>
          </a>

          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {NAV_LINKS.map(n => <a key={n.label} href={n.href} className="nav-link">{n.label}</a>)}
              <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "8px 14px", fontSize: 10 }}>✈ Telegram</a>
              <a href="https://x.com/OfficialRipCoin" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "8px 14px", fontSize: 10 }}>𝕏 Follow X</a>
            </div>
          )}

          {/* Mobile: icon buttons + hamburger */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "7px 12px", fontSize: 14 }}>✈</a>
              <a href="https://x.com/OfficialRipCoin" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "7px 12px", fontSize: 14 }}>𝕏</a>
              <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
                <span /><span /><span />
              </button>
            </div>
          )}
        </div>

        {/* Mobile dropdown */}
        {isMobile && menuOpen && (
          <div style={{ borderTop: "1px solid rgba(26,111,255,0.15)", background: "rgba(2,5,20,0.98)", animation: "menuSlide 0.2s ease forwards" }}>
            {NAV_LINKS.map(n => (
              <a key={n.label} href={n.href} className="nav-link" onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "14px 24px", borderBottom: "1px solid rgba(26,111,255,0.08)", fontSize: 12, letterSpacing: 3 }}>
                {n.label}
              </a>
            ))}
            <div style={{ padding: "16px 24px", display: "flex", gap: 10 }}>
              <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, fontSize: 10 }}>✈ Telegram</a>
              <a href="https://x.com/OfficialRipCoin" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, fontSize: 10 }}>𝕏 Follow X</a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, paddingBottom: 40 }}>
        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 32 : 60, alignItems: "center", width: "100%" }}>

          {/* Logo */}
          <div className="hero-logo" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            {/* Orb ring - separate layer, no blend mode */}
            <div style={{ position: "absolute", width: isMobile ? 230 : 320, height: isMobile ? 230 : 320, borderRadius: "50%", border: "1px solid rgba(26,111,255,0.2)", animation: "orbRotate 20s linear infinite" }}>
              {[0, 90, 180, 270].map(deg => (
                <div key={deg} style={{ position: "absolute", width: 5, height: 5, borderRadius: "50%", background: "#1a6fff", top: "50%", left: "50%", transform: `rotate(${deg}deg) translateX(${isMobile ? 115 : 160}px)`, boxShadow: "0 0 10px #1a6fff" }} />
              ))}
            </div>
            {/* Logo isolated with screen blend to strip black bg */}
            <div style={{ animation: "pulse 3s ease-in-out infinite", mixBlendMode: "screen", isolation: "isolate" }}>
              <Logo size={isMobile ? 190 : 280} />
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#4488ff", marginBottom: 14, fontWeight: 600 }}>THE MEMECOIN THAT RISES FROM THE DEAD</div>
            <h1 style={{ fontSize: isMobile ? 54 : 76, fontWeight: 900, lineHeight: 1, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              <span className="glow-text">RIP</span><span style={{ color: "#fff" }}>COIN</span>
            </h1>
            <h2 style={{ fontSize: isMobile ? 18 : 24, fontWeight: 700, color: "#4488ff", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6, lineHeight: 1.3 }}>Born from Rugs.</h2>
            <h2 style={{ fontSize: isMobile ? 18 : 24, fontWeight: 700, color: "#8ab4ff", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, lineHeight: 1.3 }}>Built for Revenge.</h2>
            <p style={{ fontSize: 13, color: "#6688bb", lineHeight: 1.9, marginBottom: 28, fontFamily: "'Exo 2', sans-serif", maxWidth: 440 }}>
              No team. No mercy. Just community. A movement against rugs, scams, and empty promises.
            </p>
            <div className="hero-btns" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
              <button className="btn-primary">💀 Buy $RIP</button>
              <button className="btn-outline">📊 View Chart</button>
              <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-outline">✈ Telegram</a>
            </div>
            <div style={{ background: "rgba(10,20,60,0.6)", border: "1px solid rgba(26,111,255,0.3)", borderRadius: 4, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(10px)" }}>
              <div>
                <div style={{ fontSize: 9, letterSpacing: 2, color: "#4488ff", marginBottom: 4, fontWeight: 700 }}>LAUNCH DATE & TIME</div>
                <div style={{ fontSize: 12, color: "#6688bb", fontFamily: "monospace" }}>May 22, 2026 - 4:00 PM UTC</div>
              </div>
              <button onClick={handleCopy} style={{ background: "none", border: "1px solid rgba(26,111,255,0.3)", borderRadius: 3, color: copied ? "#4488ff" : "#6688bb", cursor: "pointer", padding: "6px 10px", fontSize: 11, fontFamily: "'Orbitron', sans-serif", transition: "all 0.2s", flexShrink: 0, marginLeft: 12 }}>
                {copied ? "✓" : "⎘"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px 56px" }}>
          <div className="stats-row reveal reveal-up" style={{ display: "flex", flexWrap: "wrap", background: "rgba(26,111,255,0.1)", borderRadius: 6, overflow: "hidden", border: "1px solid rgba(26,111,255,0.2)" }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-card" style={{ flex: "1 1 25%", textAlign: "center", padding: "20px 12px", borderRight: i < STATS.length - 1 ? "1px solid rgba(26,111,255,0.15)" : "none" }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#4488ff", letterSpacing: 2, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 8, letterSpacing: 3, color: "#4466aa", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 28 : 60, alignItems: "center" }}>
          <div className="reveal reveal-left">
            <div className="section-title">About RipCoin</div>
            <p style={{ fontSize: 14, color: "#8ab4ff", lineHeight: 2, fontFamily: "'Exo 2', sans-serif", marginBottom: 16 }}>
              RIPCOIN is more than just a memecoin. We're a movement against rugs, scams, and empty promises. Built by the community, for the community.
            </p>
            <p style={{ fontSize: 14, color: "#5577aa", lineHeight: 2, fontFamily: "'Exo 2', sans-serif" }}>No insiders. No bullshit. Just revenge.</p>
          </div>
          <div className="reveal reveal-right" style={{ background: "rgba(5,12,40,0.8)", border: "1px solid rgba(26,111,255,0.2)", borderRadius: 4, padding: 32, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 160, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(26,111,255,0.05) 0%, transparent 70%)" }} />
            <Logo size={isMobile ? 80 : 120} />
          </div>
        </div>
      </section>

      {/* ── TOKENOMICS ── */}
      <section id="tokenomics" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 28 : 60, alignItems: "start" }}>
          <div className="reveal reveal-left">
            <div className="section-title">$RIP Tokenomics</div>
            <p style={{ fontSize: 13, color: "#6688bb", marginBottom: 20, fontFamily: "'Exo 2', sans-serif", lineHeight: 1.8 }}>
              $RIP Tokenomics will stay simple and transparent.
            </p>
            {["No presale.", "No private sale.", "No VC allocation.", "No hidden team wallet.", "No fake promises."].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid rgba(26,111,255,0.1)" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>💀</span>
                <span style={{ fontSize: 13, color: "#8ab4ff", fontFamily: "'Exo 2', sans-serif", fontWeight: 600 }}>{item}</span>
              </div>
            ))}
            <p style={{ fontSize: 12, color: "#5577aa", marginTop: 20, lineHeight: 1.8, fontFamily: "'Exo 2', sans-serif" }}>
              $RIP will launch through the standard <a href="#" style={{ color: "#4488ff", textDecoration: "none" }}>pump.fun</a> fair-launch model. After launch, the future of $RIP belongs to the community.
            </p>
          </div>
          <div className="reveal reveal-right" style={{ background: "rgba(5,12,40,0.8)", border: "1px solid rgba(26,111,255,0.2)", borderRadius: 4, padding: 32, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 200, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(26,111,255,0.08) 0%, transparent 70%)" }} />
            <div style={{ position: "relative", textAlign: "center" }}>
              <Logo size={isMobile ? 70 : 100} />
              <div style={{ marginTop: 14, fontSize: 10, letterSpacing: 3, color: "#4466aa", fontWeight: 700 }}>FAIR LAUNCH</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#4488ff", letterSpacing: 2, marginTop: 6 }}>100%</div>
              <div style={{ fontSize: 9, color: "#334466", letterSpacing: 2 }}>COMMUNITY OWNED</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO BUY ── */}
      <section id="how-to-buy" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }} className="reveal reveal-up">
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#4488ff", marginBottom: 12, fontWeight: 600 }}>STEP BY STEP</div>
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
              <span className="glow-text">How to Buy $RIP</span>
            </div>
            <div style={{ width: 60, height: 2, background: "#1a6fff", margin: "0 auto", boxShadow: "0 0 10px #1a6fff" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}>
            {HOW_TO_BUY.map((s, i) => (
              <div key={i} style={{ position: "relative" }} className={`reveal reveal-up delay-${i + 1}`}>
                {!isMobile && i < HOW_TO_BUY.length - 1 && (
                  <div style={{ position: "absolute", top: 36, right: -8, width: 16, height: 2, background: "rgba(26,111,255,0.4)", zIndex: 2 }} />
                )}
                <div style={{ background: "rgba(5,12,40,0.85)", border: "1px solid rgba(26,111,255,0.25)", borderRadius: 4, padding: "28px 20px", height: "100%", transition: "all 0.3s", position: "relative", overflow: "hidden" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(26,111,255,0.6)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(26,111,255,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(26,111,255,0.25)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ position: "absolute", top: 10, right: 14, fontSize: 52, fontWeight: 900, color: "rgba(26,111,255,0.07)", lineHeight: 1, fontFamily: "'Orbitron', sans-serif" }}>{s.step}</div>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(26,111,255,0.12)", border: "1px solid rgba(26,111,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: 9, letterSpacing: 3, color: "#1a6fff", fontWeight: 700, marginBottom: 8 }}>STEP {s.step}</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#fff", letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>{s.title}</div>
                  <div style={{ width: 30, height: 1, background: "rgba(26,111,255,0.4)", marginBottom: 12 }} />
                  <p style={{ fontSize: 11, color: "#5577aa", lineHeight: 1.8, fontFamily: "'Exo 2', sans-serif", marginBottom: s.link ? 16 : 0 }}>{s.desc}</p>
                  {s.link && (
                    <a href={s.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 11, color: "#4488ff", textDecoration: "none", fontWeight: 700, letterSpacing: 1, fontFamily: "'Orbitron', sans-serif" }}>
                      {s.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,60,60,0.05)", border: "1px solid rgba(255,80,80,0.2)", borderRadius: 4, padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 12, maxWidth: 700, margin: "0 auto" }}>
            <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
            <p style={{ fontSize: 12, color: "#aa6666", lineHeight: 1.8, fontFamily: "'Exo 2', sans-serif" }}>
              <strong style={{ color: "#cc5555" }}>Scam Warning:</strong> The official $RIP contract address will ONLY be shared through our verified Telegram and X channels. Never buy from unverified sources or respond to DMs offering early access.
            </p>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section id="roadmap" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }} className="reveal reveal-up">
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
              <span className="glow-text">Roadmap</span>
            </div>
            <div style={{ width: 60, height: 2, background: "#1a6fff", margin: "0 auto", boxShadow: "0 0 10px #1a6fff" }} />
          </div>
          <div className="phase-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {PHASES.map((p, i) => (
              <div key={i} className={`phase-card reveal reveal-up delay-${(i % 3) + 1}`}>
                <div style={{ fontSize: 9, letterSpacing: 3, color: "#1a6fff", fontWeight: 700, marginBottom: 8 }}>PHASE {p.num}</div>
                <div style={{ fontSize: 13, fontWeight: 900, color: "#fff", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>{p.title}</div>
                <div style={{ width: 30, height: 1, background: "rgba(26,111,255,0.4)", marginBottom: 10 }} />
                <p style={{ fontSize: 11, color: "#5577aa", lineHeight: 1.8, fontFamily: "'Exo 2', sans-serif" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }} className="reveal reveal-up">
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#4488ff", marginBottom: 12, fontWeight: 600 }}>GOT QUESTIONS?</div>
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
              <span className="glow-text">FAQ</span>
            </div>
            <div style={{ width: 60, height: 2, background: "#1a6fff", margin: "0 auto", boxShadow: "0 0 10px #1a6fff" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i}
                  className={`reveal reveal-up delay-${Math.min(i + 1, 6)}`}
                  style={{
                    background: isOpen ? "rgba(10,25,70,0.9)" : "rgba(5,12,40,0.8)",
                    border: `1px solid ${isOpen ? "rgba(26,111,255,0.5)" : "rgba(26,111,255,0.2)"}`,
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "border-color 0.2s, background 0.2s",
                    boxShadow: isOpen ? "0 4px 20px rgba(26,111,255,0.15)" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%", background: "none", border: "none", cursor: "pointer",
                      padding: "18px 20px", display: "flex", alignItems: "center",
                      justifyContent: "space-between", gap: 16, textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: isOpen ? "#fff" : "#8ab4ff", fontFamily: "'Orbitron', sans-serif", letterSpacing: 0.5, lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                    <span style={{
                      flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                      background: isOpen ? "rgba(26,111,255,0.3)" : "rgba(26,111,255,0.1)",
                      border: "1px solid rgba(26,111,255,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, color: "#4488ff", fontWeight: 700,
                      transition: "all 0.3s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}>
                      +
                    </span>
                  </button>

                  <div style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}>
                    <div style={{ padding: "0 20px 20px", borderTop: "1px solid rgba(26,111,255,0.1)" }}>
                      <p style={{ fontSize: 13, color: "#5577aa", lineHeight: 1.9, fontFamily: "'Exo 2', sans-serif", paddingTop: 16 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <p style={{ fontSize: 12, color: "#334466", fontFamily: "'Exo 2', sans-serif", marginBottom: 14 }}>Still have questions?</p>
            <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 11 }}>
              ✈ Ask in Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <div className="cta-box reveal reveal-scale" style={{ background: "rgba(5,12,40,0.8)", border: "1px solid rgba(26,111,255,0.3)", borderRadius: 6, padding: "60px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center top, rgba(26,111,255,0.12) 0%, transparent 60%)" }} />
            <div style={{ position: "relative" }}>
              <Logo size={54} />
              <div style={{ fontSize: isMobile ? 17 : 22, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase", margin: "18px 0 8px" }}>
                <span className="glow-text">Community Is Our Power</span>
              </div>
              <p style={{ fontSize: 12, color: "#6688bb", marginBottom: 28, fontFamily: "'Exo 2', sans-serif", letterSpacing: 1 }}>
                Join the army. Stay updated. Take revenge.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-primary">✈ Join Telegram</a>
                <a href="https://x.com/OfficialRipCoin" target="_blank" rel="noopener noreferrer" className="btn-outline">𝕏 Follow on X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(26,111,255,0.1)", padding: "24px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 11, color: "#334466", fontFamily: "'Exo 2', sans-serif", lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
          RipCoin is a meme coin. Crypto is risky. Always do your own research. Only trust official RipCoin channels.
        </p>
        <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Logo size={20} />
          <span style={{ fontSize: 10, letterSpacing: 3, color: "#1a6fff", fontWeight: 700 }}>RIPCOIN © 2025</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 10, letterSpacing: 3, color: "#334466", fontFamily: "'Orbitron', sans-serif", fontWeight: 700, textTransform: "uppercase" }}>
          Born from Rugs. Built for Revenge.
        </div>
      </footer>
    </div>
  );
}
import { useState, useEffect, useRef } from "react";
import logoImg from "./assets/logo.png";

const PHASES = [
  { num: 1, title: "Foundation", desc: "Build the RipCoin community organically, create the official channels, and protect members from fake tokens, copycats, and scams." },
  { num: 2, title: "Pre-Launch", desc: "Prepare launch materials, educate the community, and confirm all official launch details before anything goes live." },
  { num: 3, title: "Launch", desc: "Launch RipCoin publicly on Solana through a fair launch process. The official contract address will only be shared through verified RipCoin channels." },
  { num: 4, title: "Growth", desc: "Expand the community with daily updates, scam awareness, viral content, memes, and real organic engagement." },
  { num: 5, title: "Expansion", desc: "Upgrade the brand, grow partnerships, develop educational content, and increase visibility across crypto communities." },
  { num: 6, title: "Legacy", desc: "Build RipCoin into a long-term movement focused on transparency, community, scam awareness, and positive crypto culture." },
];

const STATS = [
  { icon: "💀", label: "HOLDERS", value: "0" },
  { icon: "📈", label: "MARKET CAP", value: "$0" },
  { icon: "💧", label: "LIQUIDITY", value: "$0" },
  { icon: "🔥", label: "VOLUME 24H", value: "$0" },
];

const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "How to Buy", href: "#how-to-buy" },
  { label: "Roadmap",    href: "#roadmap" },
  { label: "FAQ",        href: "#faq" },
];

const HOW_TO_BUY = [
  {
    step: "01",
    title: "Get Phantom Wallet",
    desc: "Download the Phantom wallet app on iOS, Android, or as a Chrome extension. Create a new wallet and securely save your seed phrase — never share it with anyone.",
    link: "https://phantom.app",
    linkLabel: "phantom.app →",
    icon: "👻",
  },
  {
    step: "02",
    title: "Buy SOL",
    desc: "Purchase Solana (SOL) from any major exchange like Coinbase, Binance, or Kraken. Then withdraw your SOL directly to your Phantom wallet address.",
    link: "https://coinbase.com",
    linkLabel: "coinbase.com →",
    icon: "💰",
  },
  {
    step: "03",
    title: "Go to pump.fun",
    desc: "Visit pump.fun and connect your Phantom wallet by clicking 'Connect Wallet' in the top right. Make sure you're on the official site — always verify the URL.",
    link: "https://pump.fun",
    linkLabel: "pump.fun →",
    icon: "🔗",
  },
  {
    step: "04",
    title: "Swap for $RIP",
    desc: "Search for RipCoin or paste the official $RIP contract address (shared only through verified channels). Enter the amount of SOL to swap and confirm the transaction.",
    link: null,
    linkLabel: null,
    icon: "💀",
  },
];

const FAQS = [
  {
    q: "Is $RIP a rug pull?",
    a: "No. RipCoin was born specifically as a reaction to rug pulls. There is no team wallet, no presale, no VC allocation, and no private sale. The token launches through pump.fun's fair-launch model — the community owns it from day one.",
  },
  {
    q: "When does $RIP launch?",
    a: "The exact launch date will be announced exclusively through our official Telegram and X channels. Follow both to be first to know. The contract address will ONLY be shared through verified RipCoin channels — never trust DMs or unofficial sources.",
  },
  {
    q: "What blockchain is $RIP on?",
    a: "RipCoin ($RIP) launches on the Solana blockchain via pump.fun. Solana offers fast transactions and very low fees, making it ideal for memecoin trading.",
  },
  {
    q: "How do I know the contract is safe?",
    a: "The contract address will only be shared through our verified Telegram (t.me/TheRipCoinOfficial) and X (@OfficialRipCoin). Always verify you have the correct address before buying. If someone DMs you an address, it's a scam.",
  },
  {
    q: "Why no presale or private sale?",
    a: "Presales and private sales are how insiders get rich while the community gets dumped on. $RIP is 100% fair launch — everyone buys at the same time, at the same price, with no advantages for any individual or group.",
  },
  {
    q: "How do I avoid $RIP scams?",
    a: "Simple rules: Only buy after the official contract address is posted on our Telegram and X. Never trust DMs. Never buy early access tokens. Never send SOL to anyone claiming to be the team. When in doubt, don't buy.",
  },
  {
    q: "Do I need a special wallet?",
    a: "You need a Solana-compatible wallet. Phantom Wallet is the most popular and easiest to use — available on iOS, Android, and as a Chrome extension. Download it only from phantom.app.",
  },
  {
    q: "Who is behind RipCoin?",
    a: "RipCoin is a community-driven project with no central team pulling strings. It was created as a movement against rug pulls and scams. There are no insiders, no founders with special allocations — just the community.",
  },
];

function Logo({ size = 120, blend = false }) {
  return (
    <img
      src={logoImg}
      alt="RipCoin Logo"
      width={size}
      height={size}
      style={{ objectFit: "contain", display: "block", mixBlendMode: blend ? "screen" : "normal" }}
    />
  );
}

function FloatingParticles() {
  const particles = useRef(
    Array.from({ length: 14 }).map(() => ({
      w: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      dur: 6 + Math.random() * 10,
      delay: Math.random() * 10,
      hue: 210 + Math.random() * 30,
      light: 50 + Math.random() * 30,
    }))
  );
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      {particles.current.map((p, i) => (
        <div key={i} style={{
          position: "absolute", width: p.w, height: p.w, borderRadius: "50%",
          background: `hsl(${p.hue}, 100%, ${p.light}%)`,
          left: `${p.left}%`, top: `${p.top}%`, opacity: 0.6,
          animation: `floatUp ${p.dur}s linear infinite`,
          animationDelay: `${p.delay}s`,
          boxShadow: `0 0 8px 2px hsl(${p.hue}, 100%, 70%)`,
        }} />
      ))}
    </div>
  );
}

export default function RipCoin() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  useEffect(() => {
    document.title = "RipCoin | $RIP";
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("Coming Soon...");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ fontFamily: "'Orbitron', 'Exo 2', sans-serif", background: "#02050f", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #02050f; }
        ::-webkit-scrollbar-thumb { background: #1a6fff; border-radius: 3px; }

        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 20px #1a6fff); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 40px #4488ff); }
        }
        @keyframes orbRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes menuSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealScale {
          from { opacity: 0; transform: scale(0.88); }
          to { opacity: 1; transform: scale(1); }
        }
        .reveal { opacity: 0; }
        .reveal.visible {
          animation-fill-mode: both;
          animation-duration: 0.75s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          opacity: 1;
        }
        .reveal-up.visible    { animation-name: revealUp; }
        .reveal-left.visible  { animation-name: revealLeft; }
        .reveal-right.visible { animation-name: revealRight; }
        .reveal-scale.visible { animation-name: revealScale; }
        .delay-1 { animation-delay: 0.1s !important; }
        .delay-2 { animation-delay: 0.2s !important; }
        .delay-3 { animation-delay: 0.3s !important; }
        .delay-4 { animation-delay: 0.4s !important; }
        .delay-5 { animation-delay: 0.5s !important; }
        .delay-6 { animation-delay: 0.6s !important; }

        .btn-primary {
          background: linear-gradient(135deg, #0a4fff, #0033bb);
          border: 1px solid #1a6fff;
          color: #fff;
          padding: 12px 22px;
          border-radius: 4px;
          font-family: 'Orbitron', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          box-shadow: 0 0 20px rgba(26,111,255,0.3);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #1a6fff, #0044dd);
          box-shadow: 0 0 35px rgba(26,111,255,0.6);
          transform: translateY(-1px);
        }
        .btn-outline {
          background: transparent;
          border: 1px solid #1a6fff;
          color: #8ab4ff;
          padding: 12px 22px;
          border-radius: 4px;
          font-family: 'Orbitron', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-outline:hover {
          background: rgba(26,111,255,0.1);
          color: #fff;
          box-shadow: 0 0 20px rgba(26,111,255,0.3);
        }
        .section-title {
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 3px;
          color: #4488ff;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .glow-text {
          background: linear-gradient(90deg, #4488ff, #88bbff, #4488ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .nav-link {
          color: #8ab4ff;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 600;
          transition: color 0.2s;
          text-transform: uppercase;
        }
        .nav-link:hover { color: #fff; }
        .phase-card {
          background: rgba(5,12,40,0.8);
          border: 1px solid rgba(26,111,255,0.25);
          border-radius: 4px;
          padding: 22px 18px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .phase-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #1a6fff, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .phase-card:hover { border-color: rgba(26,111,255,0.6); transform: translateY(-4px); box-shadow: 0 8px 30px rgba(26,111,255,0.2); }
        .phase-card:hover::before { opacity: 1; }
        .scanline {
          position: fixed; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(26,111,255,0.3), transparent);
          animation: scanline 8s linear infinite;
          pointer-events: none; z-index: 999;
        }
        .hamburger {
          display: flex; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 6px; background: none; border: none;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: #8ab4ff; border-radius: 2px; transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); background: #fff; }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: #fff; }

        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-logo { order: -1; }
          .hero-btns { justify-content: center !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .stats-row .stat-card {
            flex: 1 1 calc(50% - 1px) !important;
            border-right: none !important;
          }
          .stats-row .stat-card:nth-child(odd) {
            border-right: 1px solid rgba(26,111,255,0.15) !important;
          }
          .phase-grid { grid-template-columns: 1fr !important; }
          .cta-box { padding: 36px 20px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .phase-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div className="scanline" />
      <FloatingParticles />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(0,40,120,0.4) 0%, #02050f 70%)" }} />

      {/* ── NAVBAR ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid rgba(26,111,255,0.15)", backdropFilter: "blur(20px)", background: "rgba(2,5,15,0.92)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, textDecoration: "none" }}>
            <Logo size={32} />
            <span style={{ fontSize: 16, fontWeight: 900, letterSpacing: 3, color: "#fff" }}>RIPCOIN</span>
          </a>

          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {NAV_LINKS.map(n => <a key={n.label} href={n.href} className="nav-link">{n.label}</a>)}
              <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "8px 14px", fontSize: 10 }}>✈ Telegram</a>
              <a href="https://x.com/OfficialRipCoin" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "8px 14px", fontSize: 10 }}>𝕏 Follow X</a>
            </div>
          )}

          {/* Mobile: icon buttons + hamburger */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "7px 12px", fontSize: 14 }}>✈</a>
              <a href="https://x.com/OfficialRipCoin" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "7px 12px", fontSize: 14 }}>𝕏</a>
              <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
                <span /><span /><span />
              </button>
            </div>
          )}
        </div>

        {/* Mobile dropdown */}
        {isMobile && menuOpen && (
          <div style={{ borderTop: "1px solid rgba(26,111,255,0.15)", background: "rgba(2,5,20,0.98)", animation: "menuSlide 0.2s ease forwards" }}>
            {NAV_LINKS.map(n => (
              <a key={n.label} href={n.href} className="nav-link" onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "14px 24px", borderBottom: "1px solid rgba(26,111,255,0.08)", fontSize: 12, letterSpacing: 3 }}>
                {n.label}
              </a>
            ))}
            <div style={{ padding: "16px 24px", display: "flex", gap: 10 }}>
              <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, fontSize: 10 }}>✈ Telegram</a>
              <a href="https://x.com/OfficialRipCoin" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, fontSize: 10 }}>𝕏 Follow X</a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, paddingBottom: 40 }}>
        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 32 : 60, alignItems: "center", width: "100%" }}>

          {/* Logo */}
          <div className="hero-logo" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            {/* Orb ring - separate layer, no blend mode */}
            <div style={{ position: "absolute", width: isMobile ? 230 : 320, height: isMobile ? 230 : 320, borderRadius: "50%", border: "1px solid rgba(26,111,255,0.2)", animation: "orbRotate 20s linear infinite" }}>
              {[0, 90, 180, 270].map(deg => (
                <div key={deg} style={{ position: "absolute", width: 5, height: 5, borderRadius: "50%", background: "#1a6fff", top: "50%", left: "50%", transform: `rotate(${deg}deg) translateX(${isMobile ? 115 : 160}px)`, boxShadow: "0 0 10px #1a6fff" }} />
              ))}
            </div>
            {/* Logo isolated with screen blend to strip black bg */}
            <div style={{ animation: "pulse 3s ease-in-out infinite", mixBlendMode: "screen", isolation: "isolate" }}>
              <Logo size={isMobile ? 190 : 280} />
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#4488ff", marginBottom: 14, fontWeight: 600 }}>THE MEMECOIN THAT RISES FROM THE DEAD</div>
            <h1 style={{ fontSize: isMobile ? 54 : 76, fontWeight: 900, lineHeight: 1, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              <span className="glow-text">RIP</span><span style={{ color: "#fff" }}>COIN</span>
            </h1>
            <h2 style={{ fontSize: isMobile ? 18 : 24, fontWeight: 700, color: "#4488ff", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6, lineHeight: 1.3 }}>Born from Rugs.</h2>
            <h2 style={{ fontSize: isMobile ? 18 : 24, fontWeight: 700, color: "#8ab4ff", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20, lineHeight: 1.3 }}>Built for Revenge.</h2>
            <p style={{ fontSize: 13, color: "#6688bb", lineHeight: 1.9, marginBottom: 28, fontFamily: "'Exo 2', sans-serif", maxWidth: 440 }}>
              No team. No mercy. Just community. A movement against rugs, scams, and empty promises.
            </p>
            <div className="hero-btns" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
              <button className="btn-primary">💀 Buy $RIP</button>
              <button className="btn-outline">📊 View Chart</button>
              <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-outline">✈ Telegram</a>
            </div>
            <div style={{ background: "rgba(10,20,60,0.6)", border: "1px solid rgba(26,111,255,0.3)", borderRadius: 4, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(10px)" }}>
              <div>
                <div style={{ fontSize: 9, letterSpacing: 2, color: "#4488ff", marginBottom: 4, fontWeight: 700 }}>CONTRACT ADDRESS (COMING SOON)</div>
                <div style={{ fontSize: 12, color: "#6688bb", fontFamily: "monospace" }}>Soon...</div>
              </div>
              <button onClick={handleCopy} style={{ background: "none", border: "1px solid rgba(26,111,255,0.3)", borderRadius: 3, color: copied ? "#4488ff" : "#6688bb", cursor: "pointer", padding: "6px 10px", fontSize: 11, fontFamily: "'Orbitron', sans-serif", transition: "all 0.2s", flexShrink: 0, marginLeft: 12 }}>
                {copied ? "✓" : "⎘"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px 56px" }}>
          <div className="stats-row reveal reveal-up" style={{ display: "flex", flexWrap: "wrap", background: "rgba(26,111,255,0.1)", borderRadius: 6, overflow: "hidden", border: "1px solid rgba(26,111,255,0.2)" }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-card" style={{ flex: "1 1 25%", textAlign: "center", padding: "20px 12px", borderRight: i < STATS.length - 1 ? "1px solid rgba(26,111,255,0.15)" : "none" }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#4488ff", letterSpacing: 2, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 8, letterSpacing: 3, color: "#4466aa", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 28 : 60, alignItems: "center" }}>
          <div className="reveal reveal-left">
            <div className="section-title">About RipCoin</div>
            <p style={{ fontSize: 14, color: "#8ab4ff", lineHeight: 2, fontFamily: "'Exo 2', sans-serif", marginBottom: 16 }}>
              RIPCOIN is more than just a memecoin. We're a movement against rugs, scams, and empty promises. Built by the community, for the community.
            </p>
            <p style={{ fontSize: 14, color: "#5577aa", lineHeight: 2, fontFamily: "'Exo 2', sans-serif" }}>No insiders. No bullshit. Just revenge.</p>
          </div>
          <div className="reveal reveal-right" style={{ background: "rgba(5,12,40,0.8)", border: "1px solid rgba(26,111,255,0.2)", borderRadius: 4, padding: 32, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 160, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(26,111,255,0.05) 0%, transparent 70%)" }} />
            <Logo size={isMobile ? 80 : 120} />
          </div>
        </div>
      </section>

      {/* ── TOKENOMICS ── */}
      <section id="tokenomics" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 28 : 60, alignItems: "start" }}>
          <div className="reveal reveal-left">
            <div className="section-title">$RIP Tokenomics</div>
            <p style={{ fontSize: 13, color: "#6688bb", marginBottom: 20, fontFamily: "'Exo 2', sans-serif", lineHeight: 1.8 }}>
              $RIP Tokenomics will stay simple and transparent.
            </p>
            {["No presale.", "No private sale.", "No VC allocation.", "No hidden team wallet.", "No fake promises."].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid rgba(26,111,255,0.1)" }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>💀</span>
                <span style={{ fontSize: 13, color: "#8ab4ff", fontFamily: "'Exo 2', sans-serif", fontWeight: 600 }}>{item}</span>
              </div>
            ))}
            <p style={{ fontSize: 12, color: "#5577aa", marginTop: 20, lineHeight: 1.8, fontFamily: "'Exo 2', sans-serif" }}>
              $RIP will launch through the standard <a href="#" style={{ color: "#4488ff", textDecoration: "none" }}>pump.fun</a> fair-launch model. After launch, the future of $RIP belongs to the community.
            </p>
          </div>
          <div className="reveal reveal-right" style={{ background: "rgba(5,12,40,0.8)", border: "1px solid rgba(26,111,255,0.2)", borderRadius: 4, padding: 32, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 200, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(26,111,255,0.08) 0%, transparent 70%)" }} />
            <div style={{ position: "relative", textAlign: "center" }}>
              <Logo size={isMobile ? 70 : 100} />
              <div style={{ marginTop: 14, fontSize: 10, letterSpacing: 3, color: "#4466aa", fontWeight: 700 }}>FAIR LAUNCH</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#4488ff", letterSpacing: 2, marginTop: 6 }}>100%</div>
              <div style={{ fontSize: 9, color: "#334466", letterSpacing: 2 }}>COMMUNITY OWNED</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO BUY ── */}
      <section id="how-to-buy" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }} className="reveal reveal-up">
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#4488ff", marginBottom: 12, fontWeight: 600 }}>STEP BY STEP</div>
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
              <span className="glow-text">How to Buy $RIP</span>
            </div>
            <div style={{ width: 60, height: 2, background: "#1a6fff", margin: "0 auto", boxShadow: "0 0 10px #1a6fff" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}>
            {HOW_TO_BUY.map((s, i) => (
              <div key={i} style={{ position: "relative" }} className={`reveal reveal-up delay-${i + 1}`}>
                {!isMobile && i < HOW_TO_BUY.length - 1 && (
                  <div style={{ position: "absolute", top: 36, right: -8, width: 16, height: 2, background: "rgba(26,111,255,0.4)", zIndex: 2 }} />
                )}
                <div style={{ background: "rgba(5,12,40,0.85)", border: "1px solid rgba(26,111,255,0.25)", borderRadius: 4, padding: "28px 20px", height: "100%", transition: "all 0.3s", position: "relative", overflow: "hidden" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(26,111,255,0.6)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(26,111,255,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(26,111,255,0.25)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ position: "absolute", top: 10, right: 14, fontSize: 52, fontWeight: 900, color: "rgba(26,111,255,0.07)", lineHeight: 1, fontFamily: "'Orbitron', sans-serif" }}>{s.step}</div>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(26,111,255,0.12)", border: "1px solid rgba(26,111,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: 9, letterSpacing: 3, color: "#1a6fff", fontWeight: 700, marginBottom: 8 }}>STEP {s.step}</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#fff", letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>{s.title}</div>
                  <div style={{ width: 30, height: 1, background: "rgba(26,111,255,0.4)", marginBottom: 12 }} />
                  <p style={{ fontSize: 11, color: "#5577aa", lineHeight: 1.8, fontFamily: "'Exo 2', sans-serif", marginBottom: s.link ? 16 : 0 }}>{s.desc}</p>
                  {s.link && (
                    <a href={s.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 11, color: "#4488ff", textDecoration: "none", fontWeight: 700, letterSpacing: 1, fontFamily: "'Orbitron', sans-serif" }}>
                      {s.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,60,60,0.05)", border: "1px solid rgba(255,80,80,0.2)", borderRadius: 4, padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 12, maxWidth: 700, margin: "0 auto" }}>
            <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
            <p style={{ fontSize: 12, color: "#aa6666", lineHeight: 1.8, fontFamily: "'Exo 2', sans-serif" }}>
              <strong style={{ color: "#cc5555" }}>Scam Warning:</strong> The official $RIP contract address will ONLY be shared through our verified Telegram and X channels. Never buy from unverified sources or respond to DMs offering early access.
            </p>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section id="roadmap" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }} className="reveal reveal-up">
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
              <span className="glow-text">Roadmap</span>
            </div>
            <div style={{ width: 60, height: 2, background: "#1a6fff", margin: "0 auto", boxShadow: "0 0 10px #1a6fff" }} />
          </div>
          <div className="phase-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {PHASES.map((p, i) => (
              <div key={i} className={`phase-card reveal reveal-up delay-${(i % 3) + 1}`}>
                <div style={{ fontSize: 9, letterSpacing: 3, color: "#1a6fff", fontWeight: 700, marginBottom: 8 }}>PHASE {p.num}</div>
                <div style={{ fontSize: 13, fontWeight: 900, color: "#fff", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>{p.title}</div>
                <div style={{ width: 30, height: 1, background: "rgba(26,111,255,0.4)", marginBottom: 10 }} />
                <p style={{ fontSize: 11, color: "#5577aa", lineHeight: 1.8, fontFamily: "'Exo 2', sans-serif" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }} className="reveal reveal-up">
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#4488ff", marginBottom: 12, fontWeight: 600 }}>GOT QUESTIONS?</div>
            <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
              <span className="glow-text">FAQ</span>
            </div>
            <div style={{ width: 60, height: 2, background: "#1a6fff", margin: "0 auto", boxShadow: "0 0 10px #1a6fff" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i}
                  className={`reveal reveal-up delay-${Math.min(i + 1, 6)}`}
                  style={{
                    background: isOpen ? "rgba(10,25,70,0.9)" : "rgba(5,12,40,0.8)",
                    border: `1px solid ${isOpen ? "rgba(26,111,255,0.5)" : "rgba(26,111,255,0.2)"}`,
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "border-color 0.2s, background 0.2s",
                    boxShadow: isOpen ? "0 4px 20px rgba(26,111,255,0.15)" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%", background: "none", border: "none", cursor: "pointer",
                      padding: "18px 20px", display: "flex", alignItems: "center",
                      justifyContent: "space-between", gap: 16, textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700, color: isOpen ? "#fff" : "#8ab4ff", fontFamily: "'Orbitron', sans-serif", letterSpacing: 0.5, lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                    <span style={{
                      flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                      background: isOpen ? "rgba(26,111,255,0.3)" : "rgba(26,111,255,0.1)",
                      border: "1px solid rgba(26,111,255,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, color: "#4488ff", fontWeight: 700,
                      transition: "all 0.3s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}>
                      +
                    </span>
                  </button>

                  <div style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}>
                    <div style={{ padding: "0 20px 20px", borderTop: "1px solid rgba(26,111,255,0.1)" }}>
                      <p style={{ fontSize: 13, color: "#5577aa", lineHeight: 1.9, fontFamily: "'Exo 2', sans-serif", paddingTop: 16 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <p style={{ fontSize: 12, color: "#334466", fontFamily: "'Exo 2', sans-serif", marginBottom: 14 }}>Still have questions?</p>
            <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 11 }}>
              ✈ Ask in Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <div className="cta-box reveal reveal-scale" style={{ background: "rgba(5,12,40,0.8)", border: "1px solid rgba(26,111,255,0.3)", borderRadius: 6, padding: "60px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center top, rgba(26,111,255,0.12) 0%, transparent 60%)" }} />
            <div style={{ position: "relative" }}>
              <Logo size={54} />
              <div style={{ fontSize: isMobile ? 17 : 22, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase", margin: "18px 0 8px" }}>
                <span className="glow-text">Community Is Our Power</span>
              </div>
              <p style={{ fontSize: 12, color: "#6688bb", marginBottom: 28, fontFamily: "'Exo 2', sans-serif", letterSpacing: 1 }}>
                Join the army. Stay updated. Take revenge.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://t.me/TheRipCoinOfficial" target="_blank" rel="noopener noreferrer" className="btn-primary">✈ Join Telegram</a>
                <a href="https://x.com/OfficialRipCoin" target="_blank" rel="noopener noreferrer" className="btn-outline">𝕏 Follow on X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(26,111,255,0.1)", padding: "24px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 11, color: "#334466", fontFamily: "'Exo 2', sans-serif", lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
          RipCoin is a meme coin. Crypto is risky. Always do your own research. Only trust official RipCoin channels.
        </p>
        <div style={{ marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Logo size={20} />
          <span style={{ fontSize: 10, letterSpacing: 3, color: "#1a6fff", fontWeight: 700 }}>RIPCOIN © 2025</span>
        </div>
        <div style={{ marginTop: 10, fontSize: 10, letterSpacing: 3, color: "#334466", fontFamily: "'Orbitron', sans-serif", fontWeight: 700, textTransform: "uppercase" }}>
          Born from Rugs. Built for Revenge.
        </div>
      </footer>
    </div>
  );
}
