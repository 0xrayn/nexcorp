// Dashboard card - diperkecil (scale-75) dan dibuat tidak overlap text
export default function HeroDashboardCard() {
  return (
    <div className="relative w-full max-w-sm" style={{ pointerEvents: 'none', transform: 'scale(1.0)', transformOrigin: 'center top' }}>
      {/* Floating icon top-left */}
      <div className="float absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur border border-primary/30 flex items-center justify-center z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      {/* Floating icon bottom-right */}
      <div className="float2 absolute -bottom-4 -right-4 w-14 h-14 rounded-2xl bg-secondary/20 backdrop-blur border border-secondary/30 flex items-center justify-center z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
        </svg>
      </div>

      {/* Main card  padding lebih kecil */}
      <div className="bg-base-200/80 backdrop-blur-xl border border-base-content/10 rounded-2xl p-5 shadow-2xl">
        {/* Window chrome dots */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-error" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning" />
          <div className="w-2.5 h-2.5 rounded-full bg-success" />
          <span className="ml-auto text-[10px] opacity-40 font-mono">dashboard.nexcorp</span>
        </div>

        <div className="space-y-3">
          {/* Revenue Growth */}
          <div className="bg-base-300/50 rounded-xl p-3">
            <p className="text-[10px] opacity-50 mb-1">Revenue Growth</p>
            <p className="text-lg font-display font-bold text-success">+147%</p>
            <div className="w-full bg-base-content/10 rounded-full h-1 mt-1.5">
              <div className="bg-success h-1 rounded-full" style={{ width: '73%' }} />
            </div>
          </div>
          {/* Active Projects & Team Members */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-primary/10 rounded-xl p-2.5 border border-primary/20">
              <p className="text-[10px] opacity-60">Active Projects</p>
              <p className="text-base font-display font-bold text-primary mt-0.5">24</p>
            </div>
            <div className="bg-secondary/10 rounded-xl p-2.5 border border-secondary/20">
              <p className="text-[10px] opacity-60">Team Members</p>
              <p className="text-base font-display font-bold text-secondary mt-0.5">86</p>
            </div>
          </div>
          {/* Deployment Pipeline */}
          <div className="bg-base-300/50 rounded-xl p-3">
            <p className="text-[10px] opacity-50 mb-2">Deployment Pipeline</p>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="badge badge-success" style={{ fontSize: '10px', padding: '2px 6px' }}>Build ✓</span>
              <span className="badge badge-success" style={{ fontSize: '10px', padding: '2px 6px' }}>Test ✓</span>
              <span className="badge badge-warning animate-pulse" style={{ fontSize: '10px', padding: '2px 6px' }}>Deploy…</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
