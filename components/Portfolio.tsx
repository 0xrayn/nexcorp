// Portfolio with gradient placeholder images (abstract SVG patterns per project)
const projects = [
  {
    gradient: 'from-blue-600 via-indigo-600 to-purple-700',
    badge: 'E-Commerce', badgeColor: 'badge-primary',
    title: 'Marketplace Platform',
    stack: 'Next.js · Node.js · PostgreSQL',
    num: '01', colSpan: '', aspect: 'aspect-[4/3]',
    pattern: (
      // Shopping grid pattern
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="200" height="150" fill="url(#grid1)"/>
        <circle cx="100" cy="75" r="40" fill="none" stroke="white" strokeWidth="1" opacity="0.4"/>
        <circle cx="100" cy="75" r="25" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
        <rect x="80" y="55" width="40" height="40" rx="4" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
  {
    gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
    badge: 'Fintech', badgeColor: 'badge-success',
    title: 'Banking Super App',
    stack: 'React Native · Go · Redis',
    num: '02', colSpan: '', aspect: 'aspect-[4/3]',
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="dots2" width="15" height="15" patternUnits="userSpaceOnUse"><circle cx="7" cy="7" r="1" fill="white"/></pattern></defs>
        <rect width="200" height="150" fill="url(#dots2)"/>
        <rect x="40" y="30" width="120" height="80" rx="8" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="40" y1="55" x2="160" y2="55" stroke="white" strokeWidth="1" opacity="0.3"/>
        <rect x="55" y="65" width="30" height="8" rx="4" fill="white" opacity="0.2"/>
      </svg>
    ),
  },
  {
    gradient: 'from-orange-500 via-rose-500 to-red-600',
    badge: 'Logistics', badgeColor: 'badge-warning',
    title: 'Fleet Management System',
    stack: 'Vue.js · Python · MongoDB',
    num: '03', colSpan: '', aspect: 'aspect-[4/3]',
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="hex3" width="28" height="28" patternUnits="userSpaceOnUse"><polygon points="14,2 26,9 26,23 14,30 2,23 2,9" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="200" height="150" fill="url(#hex3)"/>
        <circle cx="60" cy="75" r="20" fill="none" stroke="white" strokeWidth="1" opacity="0.4"/>
        <circle cx="140" cy="75" r="20" fill="none" stroke="white" strokeWidth="1" opacity="0.4"/>
        <line x1="80" y1="75" x2="120" y2="75" stroke="white" strokeWidth="2" opacity="0.3"/>
      </svg>
    ),
  },
  {
    gradient: 'from-violet-600 via-purple-600 to-pink-600',
    badge: 'Healthcare', badgeColor: 'badge-secondary',
    title: 'Hospital Management Platform',
    stack: 'React · .NET · SQL Server · Azure',
    num: '04', colSpan: 'md:col-span-2', aspect: 'aspect-video',
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="wave4" width="60" height="40" patternUnits="userSpaceOnUse"><path d="M0 20 Q15 0 30 20 Q45 40 60 20" fill="none" stroke="white" strokeWidth="0.8"/></pattern></defs>
        <rect width="400" height="225" fill="url(#wave4)"/>
        <path d="M 60 112 L 100 60 L 140 90 L 180 40 L 220 80 L 260 55 L 300 85 L 340 112" fill="none" stroke="white" strokeWidth="2" opacity="0.5"/>
        <circle cx="180" cy="40" r="5" fill="white" opacity="0.6"/>
      </svg>
    ),
  },
  {
    gradient: 'from-sky-500 via-blue-600 to-indigo-700',
    badge: 'EdTech', badgeColor: 'badge-info',
    title: 'Learning Management System',
    stack: 'Next.js · GraphQL · Prisma',
    num: '05', colSpan: '', aspect: 'aspect-[4/3]',
    pattern: (
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="lines5" width="20" height="20" patternUnits="userSpaceOnUse"><line x1="0" y1="10" x2="20" y2="10" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="200" height="150" fill="url(#lines5)"/>
        <rect x="50" y="30" width="100" height="90" rx="6" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="60" y1="55" x2="140" y2="55" stroke="white" strokeWidth="1" opacity="0.3"/>
        <line x1="60" y1="70" x2="120" y2="70" stroke="white" strokeWidth="1" opacity="0.3"/>
        <line x1="60" y1="85" x2="130" y2="85" stroke="white" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3 reveal">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-display font-black reveal" style={{ animationDelay: '.1s' }}>
            Karya yang<br />Berbicara Sendiri
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={"group relative overflow-hidden rounded-2xl " + p.aspect + " bg-gradient-to-br " + p.gradient + " tilt-card reveal cursor-pointer " + p.colSpan}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              {/* Abstract SVG pattern background */}
              {p.pattern}

              {/* Number watermark */}
              <div className="absolute top-4 right-4 text-white/10 font-display font-black text-7xl select-none leading-none">{p.num}</div>

              {/* Default visible label (bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent translate-y-0">
                <span className={"badge " + p.badgeColor + " badge-sm mb-1.5"}>{p.badge}</span>
                <h3 className="text-white font-display font-bold text-lg leading-tight">{p.title}</h3>
              </div>

              {/* Hover overlay with stack info */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                <span className={"badge " + p.badgeColor + " badge-sm mb-2 w-fit"}>{p.badge}</span>
                <h3 className="text-white font-display font-bold text-lg">{p.title}</h3>
                <p className="text-white/70 text-sm mt-1">{p.stack}</p>
                <div className="mt-3 flex items-center gap-1 text-white/50 text-xs font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  Lihat Project →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href="#contact" className="btn btn-outline btn-lg rounded-full px-10">Lihat Semua Portfolio →</a>
        </div>
      </div>
    </section>
  )
}
