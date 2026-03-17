import type { HeroStep } from "../App";

type Tab = "slack" | "linear" | "github";

const stepToTab: Tab[] = ["slack", "linear", "github", "github"];

function SlackPanel() {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border/50">
        <span className="text-text-dim text-sm">#</span>
        <span className="text-sm text-text-primary font-semibold">eng-team</span>
        <span className="text-xs text-text-dim ml-2">Engineering discussions</span>
      </div>
      <div className="space-y-5">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center shrink-0 text-xs font-bold text-teal">DQ</div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-text-primary">Douglas</span>
              <span className="text-xs text-text-dim">2:50 PM</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              <span className="text-frosting font-semibold">@woz</span> can you lead the auth middleware rewrite? We need to move to JWT.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-lg bg-frosting/20 flex items-center justify-center shrink-0">
            <span className="text-sm">🍩</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-text-primary">woz</span>
              <span className="text-xs text-text-dim">2:50 PM</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              <span className="text-teal font-semibold">@Douglas</span> On it. I'll create a Linear project, write up a design doc, and start breaking it into tickets. See the project{" "}
              <span className="text-frosting underline cursor-pointer">here</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-3 border-t border-border/50">
        <div className="bg-bg-light rounded-lg border border-border/50 px-3 py-2.5">
          <span className="text-xs text-text-dim">Message #eng-team</span>
        </div>
      </div>
    </div>
  );
}

function LinearPanel() {
  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-3 h-3 rounded-full bg-teal" />
        <span className="font-mono text-sm text-text-primary font-semibold">WOZ-42</span>
        <span className="text-text-muted text-sm">Auth Middleware Rewrite</span>
        <span className="ml-auto px-2 py-0.5 bg-teal/10 text-teal text-xs rounded-md font-medium">In Progress</span>
      </div>
      <div className="bg-bg-light rounded-xl p-4 mb-4 border border-border/50">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-4 h-4 text-frosting" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span className="text-xs font-semibold text-text-primary">Design Doc</span>
          <span className="text-xs text-text-dim ml-auto">by @woz</span>
        </div>
        <p className="text-xs text-text-muted leading-relaxed">
          Replace Express session middleware with JWT-based auth. Move token storage to httpOnly cookies. Add refresh token rotation with 7-day expiry...
        </p>
      </div>
      <div className="space-y-2">
        {[
          { label: "JWT middleware implementation", status: "Done", done: true },
          { label: "Refresh token rotation", status: "Done", done: true },
        ].map((t) => (
          <div key={t.label} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-bg-light/50 border border-border/30">
            <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-text-primary">{t.label}</span>
            <span className="ml-auto text-xs text-teal font-medium">{t.status}</span>
          </div>
        ))}
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-frosting/5 border border-frosting/15">
          <div className="w-4 h-4 rounded-full border-2 border-frosting" />
          <span className="text-xs text-text-primary">Migration script & rollback plan</span>
          <span className="ml-auto text-xs text-frosting font-medium">In Progress</span>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-bg-light/50 border border-border/30">
          <div className="w-4 h-4 rounded-full border-2 border-border" />
          <span className="text-xs text-text-muted">E2E tests + screenshot evidence</span>
          <span className="ml-auto text-xs text-text-dim font-medium">Todo</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-frosting/20 flex items-center justify-center">
            <span className="text-[10px]">🍩</span>
          </div>
          <span className="text-xs font-semibold text-text-primary">woz</span>
          <span className="text-xs text-text-dim">2 min ago</span>
        </div>
        <p className="text-xs text-text-muted leading-relaxed">
          Picked up "Migration script & rollback plan" — all blockers resolved. Will test with screenshots when done.
        </p>
      </div>
    </div>
  );
}

function GitHubPanel() {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" />
        </svg>
        <span className="text-sm text-text-primary font-semibold">#84</span>
        <span className="text-sm text-text-muted">feat: JWT auth middleware</span>
        <span className="ml-auto px-2 py-0.5 bg-teal/10 text-teal text-xs rounded-md font-medium">Open</span>
      </div>
      <div className="space-y-4">
        <div className="bg-bg-light rounded-xl p-4 border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-400 font-bold">C</div>
            <span className="text-xs font-semibold text-text-primary">Claude</span>
            <span className="text-xs text-text-dim">reviewed 5 min ago</span>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-2">
            Consider adding rate limiting to the refresh token endpoint to prevent token abuse.
          </p>
          <span className="text-xs text-teal font-medium">Resolved by woz</span>
        </div>
        <div className="bg-bg-light rounded-xl p-4 border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] text-green-400 font-bold">O</div>
            <span className="text-xs font-semibold text-text-primary">Codex</span>
            <span className="text-xs text-text-dim">reviewed 3 min ago</span>
          </div>
          <p className="text-xs text-text-muted leading-relaxed mb-2">
            The token expiry constant should be configurable via env var.
          </p>
          <span className="text-xs text-teal font-medium">Resolved by woz</span>
        </div>
        <div className="bg-bg-light rounded-xl p-4 border border-frosting/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-frosting/20 flex items-center justify-center">
              <span className="text-[10px]">🍩</span>
            </div>
            <span className="text-xs font-semibold text-text-primary">woz</span>
            <span className="text-xs text-text-dim">1 min ago</span>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            All review comments addressed. Pushed fixes in <span className="font-mono text-frosting">3a8f2c1</span>. Re-requested review from both reviewers.
          </p>
        </div>
      </div>
    </div>
  );
}

const tabs: { id: Tab; label: string }[] = [
  { id: "slack", label: "Slack" },
  { id: "linear", label: "Linear" },
  { id: "github", label: "GitHub" },
];

export default function Mockup({ activeStep, onStepChange }: { activeStep: HeroStep; onStepChange: (step: HeroStep) => void }) {
  const activeTab = stepToTab[activeStep];

  function setActiveTab(tab: Tab) {
    const stepIndex = stepToTab.indexOf(tab);
    if (stepIndex !== -1) onStepChange(stepIndex as HeroStep);
  }

  return (
    <div className="hidden lg:block">
      <div className="mockup-glow bg-surface border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-1 px-4 py-3 border-b border-border bg-bg-light">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-3 py-1.5 text-xs font-medium rounded-md cursor-pointer transition-colors duration-150"
              style={
                activeTab === tab.id
                  ? { backgroundColor: "rgba(216, 142, 163, 0.1)", color: "#D88EA3" }
                  : { color: "#5A5E75" }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "slack" && <SlackPanel />}
        {activeTab === "linear" && <LinearPanel />}
        {activeTab === "github" && <GitHubPanel />}
      </div>
    </div>
  );
}
