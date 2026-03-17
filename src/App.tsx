import { useState } from "react";
import { CgMonday, CgLinear, CgSlack, CgTrello, CgVercel, CgBitbucket } from "react-icons/cg";
import { BsMicrosoftTeams } from "react-icons/bs";
import { SiAsana, SiDiscord, SiSentry, SiDatadog, SiRender, SiGooglecloud, SiJira, SiGitlab, SiNotion, SiStripe, SiSupabase, SiCloudflare, SiMongodb, SiTelegram, SiWhatsapp, SiRedis, SiDocker } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import Mockup from "./components/Mockup";

export type HeroStep = 0 | 1 | 2 | 3;

const GITHUB_URL = "https://github.com/douglasqian/woz";
const OPENCLAW_URL = "https://openclaw.ai";
const INSTALL_CMD = "curl -fsSL https://woz.bot/install | sh";

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function copyInstall() {
  navigator.clipboard.writeText(INSTALL_CMD);
}

const features = [
  {
    from: "Tickets",
    to: "Projects",
    toColor: "text-frosting bg-frosting/10",
    title: "Leads entire projects",
    desc: "Creates Linear projects, breaks them into milestones, scopes every ticket, and automatically picks up unblocked work. Woz doesn't wait to be told what to do.",
  },
  {
    from: "Planning",
    to: "Design docs",
    toColor: "text-peach bg-peach/10",
    title: "Writes design docs",
    desc: "Produces full technical design documents with architecture decisions, trade-offs, and scope. Plans entire projects, not just the next ticket.",
  },
  {
    from: "Testing",
    to: "Screenshots",
    toColor: "text-teal bg-teal/10",
    title: "Tests with visual evidence",
    desc: "Tests changes end-to-end and provides screenshot evidence. You see exactly what changed before you merge. Trust, but verify.",
  },
  {
    from: "PRs",
    to: "Triage",
    toColor: "text-coral-light bg-coral/10",
    title: "Triages all reviewers",
    desc: (
      <>
        Waits for your favorite code reviewers —{" "}
        <span className="font-mono text-text-primary text-xs">Claude, Codex, humans</span> — and
        triages feedback automatically. Pushes fixes, resolves threads, re-requests review.
      </>
    ),
  },
];

const steps = [
  { num: 1, color: "bg-frosting/10 text-frosting", title: "Project", desc: "Create Linear projects, not just tickets" },
  { num: 2, color: "bg-peach/10 text-peach", title: "Design", desc: "Write design docs and plan architecture" },
  { num: 3, color: "bg-teal/10 text-teal", title: "Test", desc: "Woz tests changes with visual screenshots" },
  { num: 4, color: "bg-coral/10 text-coral-light", title: "PR", desc: "Triage reviews from Claude, Codex, and humans" },
];

export default function App() {
  const [activeStep, setActiveStep] = useState<HeroStep>(0);

  return (
    <div className="antialiased overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-bg/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="font-mono font-bold text-lg text-text-primary cursor-pointer">
              woz<span className="text-frosting">.bot</span>
            </a>
            <div className="hidden sm:flex items-center gap-6">
              <a href="#features" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer">Features</a>
              <a href="#how" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer">How it works</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer">
              <GitHubIcon />
              GitHub
            </a>
            <a href="#get-started" className="px-4 py-2 bg-frosting text-bg rounded-lg text-sm font-semibold hover:bg-frosting-light transition-colors duration-200 cursor-pointer">
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg min-h-screen flex items-center px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-frosting/20 bg-frosting/5 text-sm mb-8 cursor-pointer hover:bg-frosting/10 transition-colors duration-200">
              <span className="text-xs font-semibold text-frosting bg-frosting/15 px-2 py-0.5 rounded-full">New</span>
              <span className="text-text-muted">Open source · Built on OpenClaw</span>
              <svg className="w-3 h-3 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </div>

            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] mb-6 tracking-tight">
              Meet <span className="text-gradient-frosting">Woz,</span> your<br />
              new CTO
            </h1>

            <a href="#get-started" className="inline-flex items-center px-5 py-2.5 bg-text-primary text-bg rounded-lg text-sm font-semibold hover:bg-white transition-colors duration-200 cursor-pointer mb-8">
              Start building
            </a>

            <p className="text-text-muted mb-8 text-base leading-relaxed max-w-md">
              <span className="text-text-primary font-semibold">Lead your projects</span> with your AI CTO that plans, codes, tests, and ships.
            </p>

            <div className="flex flex-col gap-1">
              {steps.map((step, i) => {
                const isActive = activeStep === i;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(i as HeroStep)}
                    className="rounded-xl px-4 py-3 flex items-center gap-4 transition-colors duration-200 cursor-pointer"
                    style={isActive ? { backgroundColor: "rgba(216, 142, 163, 0.06)", border: "1px solid rgba(216, 142, 163, 0.15)" } : { border: "1px solid transparent" }}
                  >
                    <span
                      className="w-8 h-8 rounded-full border text-sm font-semibold flex items-center justify-center shrink-0"
                      style={isActive ? { borderColor: "rgba(216, 142, 163, 0.4)", color: "#D88EA3" } : { borderColor: "#2A3050", color: "#5A5E75" }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <span className="font-semibold text-text-primary text-sm">{step.title}</span>
                      <p className="text-text-muted text-xs">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Mockup activeStep={activeStep} onStepChange={setActiveStep} />
        </div>
      </section>

      {/* Works with */}
      <section className="py-16 px-6 border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-dim text-xs font-mono uppercase tracking-wider mb-8">Works where you work</p>
          <div className="flex flex-col items-center gap-5">
            {[
              [
                { icon: CgLinear, name: "Linear" },
                { icon: SiJira, name: "Jira" },
                { icon: CgMonday, name: "Monday" },
                { icon: SiAsana, name: "Asana" },
                { icon: CgTrello, name: "Trello" },
                { icon: SiNotion, name: "Notion" },
              ],
              [
                { icon: CgSlack, name: "Slack" },
                { icon: BsMicrosoftTeams, name: "Teams" },
                { icon: SiDiscord, name: "Discord" },
                { icon: SiTelegram, name: "Telegram" },
                { icon: SiWhatsapp, name: "WhatsApp" },
              ],
              [
                { icon: GitHubIcon, name: "GitHub" },
                { icon: SiGitlab, name: "GitLab" },
                { icon: SiSentry, name: "Sentry" },
                { icon: SiDatadog, name: "Datadog" },
                { icon: SiSupabase, name: "Supabase" },
                { icon: SiRedis, name: "Redis" },
                { icon: SiMongodb, name: "MongoDB" },
              ],
              [
                { icon: SiCloudflare, name: "Cloudflare" },
                { icon: CgVercel, name: "Vercel" },
                { icon: SiRender, name: "Render" },
                { icon: FaAws, name: "AWS" },
                { icon: SiGooglecloud, name: "GCP" },
                { icon: VscAzure, name: "Azure" },
                { icon: SiDocker, name: "Docker" },
              ],
            ].map((row, i) => (
              <div key={i} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {row.map((item) => (
                  <a key={item.name} href={`https://docs.woz.bot/integrations/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-300 ease-in-out cursor-pointer rounded-md px-2 py-1">
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-frosting font-mono text-sm font-semibold mb-4 text-center tracking-wider uppercase">Why Woz</p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center mb-4 tracking-tight">
            AI engineers do tasks.<br />
            <span className="text-gradient-frosting">Woz runs the show.</span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto text-lg">
            We know what coding agents can do. Woz takes it to a whole 'nother level.
          </p>


          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-surface/50 border border-border rounded-2xl p-6 cursor-pointer transition-colors duration-200 hover:border-border-light hover:bg-surface/80">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-text-dim bg-bg-light px-2 py-1 rounded">{f.from}</span>
                  <svg className="w-4 h-4 text-text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${f.toColor}`}>{f.to}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* How it works */}
      <section id="how" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-frosting font-mono text-sm font-semibold mb-4 text-center tracking-wider uppercase">Architecture</p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center mb-4 tracking-tight">How it works</h2>
          <p className="text-text-muted text-center mb-16 max-w-lg mx-auto">
            Woz is an{" "}
            <a href={OPENCLAW_URL} target="_blank" rel="noopener noreferrer" className="text-frosting hover:text-frosting-light transition-colors duration-200 underline underline-offset-4 decoration-frosting/30 hover:decoration-frosting/60 cursor-pointer">
              OpenClaw
            </a>{" "}
            fork, extended with a web server that connects to Linear and GitHub via webhooks.
          </p>

          <div className="flex flex-col gap-3">
            {[
              { num: "1", color: "bg-frosting/10 text-frosting", title: "Install with one command", desc: "Download Woz and connect your Linear, GitHub, and Slack accounts." },
              { num: "2", color: "bg-peach/10 text-peach", title: "Woz listens via webhooks", desc: "A lightweight web server receives events from Linear and GitHub in real time." },
              { num: "3", color: "bg-teal/10 text-teal", title: "Woz takes action", desc: "Plans projects, picks up tickets, writes code, tests with screenshots, triages reviews — autonomously." },
            ].map((s) => (
              <div key={s.num} className="flex items-start gap-4 bg-surface/50 border border-border rounded-xl p-5 hover:border-border-light transition-colors duration-200">
                <span className={`w-8 h-8 rounded-full ${s.color} text-sm font-semibold flex items-center justify-center shrink-0 mt-0.5`}>{s.num}</span>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-text-muted text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Install */}
      <section id="get-started" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-frosting font-mono text-sm font-semibold mb-4 tracking-wider uppercase">Get started</p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-4 tracking-tight">One command to go</h2>
          <p className="text-text-muted mb-10">Install Woz and start leading projects in minutes.</p>

          <div className="relative inline-flex items-center bg-surface border border-border rounded-xl overflow-hidden max-w-full hover:border-border-light transition-colors duration-200">
            <div className="px-5 py-4 font-mono text-sm sm:text-base overflow-x-auto whitespace-nowrap">
              <span className="text-text-dim select-none">$ </span>
              <span className="text-text-primary">curl -fsSL</span>{" "}
              <span className="text-teal-light">https://woz.bot/install</span>{" "}
              <span className="text-text-primary">| sh</span>
              <span className="cursor-blink" />
            </div>
            <button
              onClick={copyInstall}
              className="px-4 py-4 border-l border-border text-text-dim hover:text-frosting hover:bg-surface-light transition-colors duration-200 cursor-pointer shrink-0"
              aria-label="Copy install command"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            </button>
          </div>
          <p className="mt-5 text-sm text-text-dim">macOS · Linux · WSL</p>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Open source */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-4 tracking-tight">Built in the open</h2>
          <p className="text-text-muted mb-8 max-w-md mx-auto">Woz is open source. Read the code, open an issue, or submit a PR.</p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-surface border border-border text-text-primary rounded-lg text-sm font-semibold hover:bg-surface-light hover:border-border-light transition-colors duration-200 cursor-pointer"
          >
            <GitHubIcon className="w-5 h-5" />
            Star on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-sm text-text-dim">
            woz<span className="text-frosting-dim">.bot</span>
          </span>
          <div className="flex items-center gap-6">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-text-dim hover:text-text-muted transition-colors duration-200 cursor-pointer">GitHub</a>
            <a href={OPENCLAW_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-text-dim hover:text-text-muted transition-colors duration-200 cursor-pointer">OpenClaw</a>
          </div>
          <span className="text-sm text-text-dim">&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
