const projects = [
  {
    gradient: 'from-blue-500 to-purple-600',
    badge: 'E-Commerce', badgeColor: 'badge-primary',
    title: 'Marketplace Platform',
    stack: 'Next.js · Node.js · PostgreSQL',
    num: '01',
    colSpan: '',
    aspect: 'aspect-[4/3]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    gradient: 'from-emerald-500 to-teal-600',
    badge: 'Fintech', badgeColor: 'badge-success',
    title: 'Banking Super App',
    stack: 'React Native · Go · Redis',
    num: '02',
    colSpan: '',
    aspect: 'aspect-[4/3]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    gradient: 'from-orange-500 to-red-500',
    badge: 'Logistics', badgeColor: 'badge-warning',
    title: 'Fleet Management System',
    stack: 'Vue.js · Python · MongoDB',
    num: '03',
    colSpan: '',
    aspect: 'aspect-[4/3]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    gradient: 'from-indigo-600 to-pink-500',
    badge: 'Healthcare', badgeColor: 'badge-secondary',
    title: 'Hospital Management Platform',
    stack: 'React · .NET · SQL Server · Azure — Platform manajemen rumah sakit terintegrasi untuk 50+ faskes',
    num: '04',
    colSpan: 'md:col-span-2',
    aspect: 'aspect-video',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    gradient: 'from-cyan-500 to-blue-600',
    badge: 'EdTech', badgeColor: 'badge-info',
    title: 'Learning Management System',
    stack: 'Next.js · GraphQL · Prisma',
    num: '05',
    colSpan: '',
    aspect: 'aspect-[4/3]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
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
              className={`group relative overflow-hidden rounded-2xl ${p.aspect} bg-gradient-to-br ${p.gradient} tilt-card reveal cursor-pointer ${p.colSpan}`}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className={`badge ${p.badgeColor} badge-sm mb-2 w-fit`}>{p.badge}</span>
                <h3 className="text-white font-display font-bold text-xl">{p.title}</h3>
                <p className="text-white/70 text-sm mt-1">{p.stack}</p>
              </div>
              {/* Icon bg */}
              <div className="absolute inset-0 flex items-center justify-center">{p.icon}</div>
              {/* Number watermark */}
              <div className="absolute top-4 right-4 text-white/20 font-display font-black text-6xl select-none">{p.num}</div>
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
