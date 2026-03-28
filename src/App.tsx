import { useState } from "react";
import { CgMonday, CgLinear, CgSlack, CgTrello, CgVercel } from "react-icons/cg";
import { BsMicrosoftTeams } from "react-icons/bs";
import { SiAsana, SiDiscord, SiSentry, SiDatadog, SiRender, SiGooglecloud, SiJira, SiGitlab, SiNotion, SiSupabase, SiCloudflare, SiMongodb, SiTelegram, SiWhatsapp, SiRedis, SiDocker, SiSalesforce, SiHubspot, SiGooglemeet, SiMixpanel, SiPosthog, SiPostgresql, SiMysql, SiFirebase } from "react-icons/si";
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

function GranolaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1308 1350" fill="currentColor">
      <path d="M1033.77,1021.55c-21.6,24.24-40.11,38.92-50.31,45.93c-4.8,3.19-7.8,7.65-11.99,11.48c-22.2,19.14-46.26,24.83-63.06,38.23c-22.8,17.86-107.98,39.1-132.18,46.54c-40.96,9.31-87.03,12.67-137.43,10.75c-10.91,0-20.99,0-30.26-0.73c-3.76-0.29-7.54,0.68-11.31,0.72c-0.15,0-0.29,0-0.42,0c-0.4,0-1.07-0.29-2.01-0.86c-1.06-0.65-2.26-1.06-3.51-1.06c-0.33,0-0.65-0.03-0.97-0.07c-5.08-0.7-7.78,1.09-9.73,2.08c-1.48,0.75-3.09,0.12-4.49-0.77c-4.43-2.81-14.32-9.14-17.68-10.16c-3.32-1.01-3.64,0.37-5.41,0.68c-1.18,0.21-2.41-0.21-3.3-1.01c-0.99-0.9-2.06-2.2-4.5-3.5c-4.49-2.39-6.88,3.04-13.55-3.03c-0.97-0.88-1.54-2.61-2.85-2.7c-0.33-0.02-0.56-0.04-0.89-0.1c-6.72-1.3-18.92-3.8-27.12-6.29c-9.6-2.55-6.61-4.46-10.81-6.37c-56.4-21.05-136.79-62.52-166.19-91.86c-10.8-10.84-23.4-35.72-31.2-42.1c-6-5.1-18-15.31-21-20.41c-2.4-4.47-0-12.75-4.2-18.49c-5.4-7.02-16.2-10.85-26.4-26.79c-11.4-17.86-18-41.46-29.4-65.7C202,854.91,175,786.02,175,660.36c0-84.2,39-200.93,55.8-216.88c10.8-10.21,9.6-32.53,17.39-43.37c89.01-123.75,244.8-214.79,430.2-224.35c7.53-0.39,15.07-0.63,22.62-0.72c45.74-0.53,91.58,4.47,136.04,15.31c44.41,10.83,86.87,27.73,128.26,46.95c0,0,4.91,0.39,6.21,1.03c2.16,1.06,3.07,2.99,5.23,4.06c2.16,1.06,5.28,0.16,7.64,0.64c7.77,1.59,9.17,6.21,10.6,8.05c1.74,2.23,3.83,3.09,7.78,4.22c10.31,2.96,11.67,6.37,13.07,7.94c1.12,1.25,1.61,2.88,2.17,4.34c0.57,1.48,1.7,2.84,3.28,3.21c3.42,0.8,8.06,4.98,9.02,10.69c0.63,3.72,4.65,5.32,3.55,12.3c-0.36,2.26,2.05,5.6-10.6,18.07s-39.18,20.33-55.34,14.14c-55.85-21.41-64.13-25.53-86.57-31.65c-40.96-11.17-75.85-18.76-118.36-17.96c-67.8,1.28-121.21,7.66-185.41,29.98c-28.14,9.97-81.27,37.11-107.93,58.24c-26.66,21.13-65.26,50.32-81.19,77.33c-5.58,9.46-11.86,18.5-25.06,33.17c-19.2,21.05-41.42,81.93-48.62,111.28c-1.8,6.38,2.99,13.4,0.59,19.78c-2.4,7.02-13.8,10.21-15,15.95c-4.8,20.41-3.6,46.56-3.6,68.88c0,12.12,3.6,28.7,7.8,38.27c3,6.38,12.6,10.85,13.8,17.22c0.6,4.46-5.39,9.56-5.4,13.39c0,3.19,5.39,46.57,8.39,52.95c4.2,7.65,17.4,17.22,21,26.15c2.4,6.38-4.21,12.76,0.59,19.14c3,3.83,12.61,3.82,16.21,8.92c4.8,6.38,15,24.87,19.8,30.62c3.6,4.47,10.2,6.39,13.2,8.3c9,6.38,1.2,12.11,9.6,21.68c26.4,29.98,67.2,66.98,106.2,83.57c6.02,2.56,67.75,26.13,71.39,26.15c87,12.83,184.84,11.63,269.44-35.58c19.8-10.85,131.97-88.81,150.57-181.3c4.2-18.5,9.6-63.16,7.2-81.02c-9.6-66.34-50.48-161.76-125.41-197.09c-39.91-18.82-70.2-18.5-78-17.22c-22.8,4.46-30.6-8.93-51.6-7.02c-64.2,5.1-127.2,22.97-176.4,74.63c-45,47.84-54.01,109.08-31.21,147.99c2.4,5.1,1.2,11.48-3.6,14.67c-2.1,1.28-4.05,2.87-4.95,4.55c-1.79,3.33,3.39,5.11,6.95,6.36c24.96,8.73,33.96,50.84,67,49.06h7.2c0,0,13.8,0,19.2-6.38c4.44-5.24,4.42-11.35,1.27-14.06c-1.4-1.21-3.18-1.93-3.59-3.74c-0.45-1.99-0.68-4.61-0.68-5.79c0-1.28,1.8-1.92,1.8-3.2c0-3.83-4.2-7.01-3.6-10.84c0.38-2.04,3.21-4.85,5.21-6.96c1.52-1.6,1.54-3.63,0.55-5.6c-0.04-0.07-0.07-0.14-0.11-0.21c-0.96-1.97-1.14-4.32-0.49-6.41c0.38-1.2,0.83-2.49,0.83-3.78c0.6-5.74-1.79-8.29-2.39-12.76c0-1.58,8.54-5.32,11.56-7.66c0.89-0.69,0.98-1.84,0.69-2.93c-0.62-2.32-1.45-3.03-1.45-7.27c0-1.02,0.86-2.44,1.89-3.79c2.08-2.71,4-5.6,4.94-8.88l1.66-5.79c0.69-2.42,2.53-4.34,4.92-5.15c4.13-1.39,2.22-8.13,6.16-10.01c1.15-0.55,4.02,0.15,8.63-0.83c9.59-1.91,3-5.1,4.8-10.21c0.84-3.12,3.44-2.81,5.96-2.56c2.02,0.2,3.98-0.46,5.43-1.88c1.43-1.39,2.87-3.02,4.81-3.85c2.43-1.03,8.81-1.23,13.38-1.27c1.88-0.02,3.74-0.29,5.61-0.51c5.1-0.6,12.33-0.24,15.82-0.77c4.2-0.64,6.6-4.47,10.19-4.47c3,0,7.21,5.1,10.21,5.1c3,0,6-2.55,9-2.55c1.8,0,2.4,3.19,5.4,3.19h1.2c0,0,27.6,0.64,56.4,18.49c19.8,12.12,34.2,41.47,34.2,41.47c13.8,23.6-1.51,47.86-1.51,69.55c0,8.93,3,16.58,1.2,24.88c-1.2,6.38-6,11.49-7.8,16.59c-1.8,4.46-1.79,10.21-7.79,18.49c-4.8,7.02-7.21,7.01-8.41,8.29c-1.8,1.91-17.34,25.41-27.54,34.34c-27,24.24-51.96,31.34-88.56,31.97c-16.2,0.64-18,3.83-20.4,3.83c-8.4,0.64-46.79-1.27-58.8-3.19c0,0-53.4-10.21-74.4-20.41c-11.4-5.1-86.41-60.6-103.21-91.86c-52.2-98.23-40.2-202.84,13.8-273.01c39-51.03,103.2-117.37,255.59-130.13c77.4-6.38,146.41,3.83,200.41,29.35c76.2,35.72,132,98.87,166.8,173.5C1154.8,743.28,1151.37,887.6,1033.77,1021.55z"/>
    </svg>
  );
}

function FirefliesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 56 56" fill="currentColor">
      <path d="M18.4,0H0v18.3h18.4V0z"/>
      <path d="M40.2,22.1H21.8v18.3h18.4V22.1z"/>
      <path d="M40.2,0H21.8v18.3H56v-2.6c0-4.2-1.7-8.1-4.6-11.1C48.4,1.7,44.4,0,40.2,0z"/>
      <path d="M0,22.1v18.3c0,4.2,1.7,8.1,4.6,11.1c3,2.9,7,4.6,11.2,4.6h2.6V22.1H0z"/>
    </svg>
  );
}

function SegmentIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      {/* Top arc - semicircle from left-center up and over to upper-right */}
      <path d="M10 50A44 44 0 0 1 82 12" stroke="currentColor" strokeWidth="9" strokeLinecap="round" fill="none"/>
      {/* Top horizontal bar */}
      <rect x="30" y="35" width="62" height="9" rx="4.5"/>
      {/* Top-right dot */}
      <circle cx="86" cy="18" r="5"/>
      {/* Bottom horizontal bar */}
      <rect x="8" y="56" width="62" height="9" rx="4.5"/>
      {/* Bottom arc - semicircle from right-center down and around to lower-left */}
      <path d="M90 50A44 44 0 0 1 18 88" stroke="currentColor" strokeWidth="9" strokeLinecap="round" fill="none"/>
      {/* Bottom-left dot */}
      <circle cx="14" cy="82" r="5"/>
    </svg>
  );
}

function ZoomIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 212 212" fill="currentColor">
      <path fillRule="evenodd" d="M106,0C47.5,0,0,47.5,0,106s47.5,106,106,106s106-47.5,106-106S164.5,0,106,0z M135,94l26-19c2.3-1.9,4-1.4,4,2v58c0,3.8-2.2,3.4-4,2l-26-19V94z M47,77.2c0-1.8,1.4-3.2,3.2-3.2h63c9.8,0,17.7,7.9,17.7,17.6v43.2c0,1.8-1.4,3.2-3.2,3.2h-63C54.9,138,47,130.1,47,120.4V77.2z"/>
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
              <a href="https://docs.woz.bot" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer">Docs</a>
              <a href="#pricing" className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer">Pricing</a>
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
          <div className="flex flex-col items-center gap-6">
            {[
              { label: "Issue tracking", items: [
                { icon: CgLinear, name: "Linear" },
                { icon: SiJira, name: "Jira" },
                { icon: CgMonday, name: "Monday" },
                { icon: SiAsana, name: "Asana" },
                { icon: CgTrello, name: "Trello" },
                { icon: SiNotion, name: "Notion" },
              ]},
              { label: "Team messaging", items: [
                { icon: CgSlack, name: "Slack" },
                { icon: BsMicrosoftTeams, name: "Teams" },
                { icon: SiDiscord, name: "Discord" },
                { icon: SiTelegram, name: "Telegram" },
                { icon: SiWhatsapp, name: "WhatsApp" },
              ]},
              { label: "Customer tracking", items: [
                { icon: SiSalesforce, name: "Salesforce" },
                { icon: SiHubspot, name: "HubSpot" },
                { icon: GranolaIcon, name: "Granola" },
                { icon: FirefliesIcon, name: "Fireflies.ai" },
                { icon: ZoomIcon, name: "Zoom" },
                { icon: SiGooglemeet, name: "Google Meet" },
              ]},
              { label: "Observability & Analytics", items: [
                { icon: SiSentry, name: "Sentry" },
                { icon: SiDatadog, name: "Datadog" },
                { icon: SegmentIcon, name: "Segment" },
                { icon: SiMixpanel, name: "Mixpanel" },
                { icon: SiPosthog, name: "PostHog" },
              ]},
              { label: "Databases", items: [
                { icon: SiPostgresql, name: "PostgreSQL" },
                { icon: SiMysql, name: "MySQL" },
                { icon: SiMongodb, name: "MongoDB" },
                { icon: SiRedis, name: "Redis" },
                { icon: SiSupabase, name: "Supabase" },
                { icon: SiFirebase, name: "Firebase" },
              ]},
              { label: "Infrastructure", items: [
                { icon: GitHubIcon, name: "GitHub" },
                { icon: SiGitlab, name: "GitLab" },
                { icon: CgVercel, name: "Vercel" },
                { icon: SiCloudflare, name: "Cloudflare" },
                { icon: SiRender, name: "Render" },
                { icon: FaAws, name: "AWS" },
                { icon: SiGooglecloud, name: "GCP" },
                { icon: VscAzure, name: "Azure" },
                { icon: SiDocker, name: "Docker" },
              ]},
            ].map((row, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-dim/60">{row.label}</span>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                  {row.items.map((item) => (
                    <a key={item.name} href={`https://docs.woz.bot/integrations/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-300 ease-in-out cursor-pointer rounded-md px-2 py-1">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>
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
