export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          Digital Wellness
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-6">
          Block Social Apps<br />
          <span className="text-[#58a6ff]">Until You Go Outside</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-xl mb-10">
          DoomScroll Blocker uses your GPS to lock social media until you physically leave your home. No willpower needed — just walk out the door.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Start for $3/mo
          </a>
          <a href="#how" className="text-[#58a6ff] hover:underline text-base">
            How it works ↓
          </a>
        </div>
        <p className="mt-6 text-sm text-[#8b949e]">Works as a PWA + browser extension. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-4xl mx-auto px-4 py-16 grid sm:grid-cols-3 gap-8 text-center">
        {[
          { step: "1", title: "Set Home Location", desc: "Open the PWA and pin your home coordinates with one tap." },
          { step: "2", title: "Install Extension", desc: "Add the companion browser extension to Chrome or Firefox." },
          { step: "3", title: "Go Outside", desc: "GPS detects you've left. Social sites instantly unblock." }
        ].map((item) => (
          <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-[#58a6ff]/20 text-[#58a6ff] font-bold text-lg flex items-center justify-center mx-auto mb-4">
              {item.step}
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-[#8b949e] text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff]">Pro</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-extrabold text-white">$3</span>
            <span className="text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to reclaim your focus.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "GPS-based site blocking",
              "Unlimited blocked sites",
              "Chrome & Firefox extension",
              "PWA for iOS & Android",
              "Custom block schedules",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl text-base transition-colors"
          >
            Get Started
          </a>
          <p className="mt-4 text-xs text-[#8b949e]">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the GPS blocking actually work?",
              a: "The PWA continuously checks your GPS coordinates against your saved home location. When you move beyond your set radius, it signals the browser extension via a secure local API to unblock your chosen sites."
            },
            {
              q: "Which social media sites can I block?",
              a: "You can block any site you choose — Twitter/X, Instagram, TikTok, Reddit, Facebook, YouTube, and more. The extension lets you manage a custom blocklist."
            },
            {
              q: "Does it work on mobile?",
              a: "Yes. Install the PWA on iOS or Android for background GPS tracking. The browser extension works on desktop Chrome and Firefox."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-[#8b949e] text-sm border-t border-[#30363d]">
        <p>© {new Date().getFullYear()} DoomScroll Blocker. All rights reserved.</p>
      </footer>
    </main>
  );
}
