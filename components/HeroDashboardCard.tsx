// Purely decorative dashboard card in hero section
// - pointer-events: none so it never blocks clicks on text behind
// - isolated in its own grid column (lg:grid-cols-2), cannot overlap left column text
export default function HeroDashboardCard() {
  return (
    <div className="relative w-full max-w-md" style={{ pointerEvents: 'none' }}>
      {/* Floating icon top-left */}
      <div className="float absolute -top-8 -left-8 w-24 h-24 rounded-2xl bg-primary/20 backdrop-blur border border-primary/30 flex items-center justify-center z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>

      {/* Floating icon bottom-right */}
      <div className="float2 absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-secondary/20 backdrop-blur border border-secondary/30 flex items-center justify-center z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      </div>

      {/* Main card */}
      <div className="bg-base-200/80 backdrop-blur-xl border border-base-content/10 rounded-3xl p-8 shadow-2xl tilt-card">
        {/* Window chrome dots */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-error" />
          <div className="w-3 h-3 rounded-full bg-warning" />
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="ml-auto text-xs opacity-40 font-mono">dashboard.nexcorp</span>
        </div>

        <div className="space-y-4">
          {/* Revenue Growth */}
          <div className="bg-base-300/50 rounded-xl p-4">
            <p className="text-xs opacity-50 mb-2">Revenue Growth</p>
            <p className="text-2xl font-display font-bold text-success">+147%</p>
            <div className="w-full bg-base-content/10 rounded-full h-1.5 mt-2">
              <div className="bg-success h-1.5 rounded-full" style={{ width: '73%' }} />
            </div>
          </div>

          {/* Active Projects & Team Members */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/10 rounded-xl p-3 border border-primary/20">
              <p className="text-xs opacity-60">Active Projects</p>
              <p className="text-xl font-display font-bold text-primary mt-1">24</p>
            </div>
            <div className="bg-secondary/10 rounded-xl p-3 border border-secondary/20">
              <p className="text-xs opacity-60">Team Members</p>
              <p className="text-xl font-display font-bold text-secondary mt-1">86</p>
            </div>
          </div>

          {/* Deployment Pipeline */}
          <div className="bg-base-300/50 rounded-xl p-4">
            <p className="text-xs opacity-50 mb-3">Deployment Pipeline</p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge badge-success badge-sm">Build ✓</span>
              <span className="badge badge-success badge-sm">Test ✓</span>
              <span className="badge badge-warning badge-sm animate-pulse">Deploy…</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
