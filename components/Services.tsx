const services = [
  {
    title: 'Web Development',
    desc: 'Website dan aplikasi web berkinerja tinggi dengan teknologi terkini — React, Next.js, dan arsitektur modern.',
    tags: ['Next.js', 'React', 'TypeScript'],
    cardBorder: 'hover:border-primary/40',
    iconBg: 'bg-primary/10 group-hover:bg-primary/20',
    glow: 'group-hover:shadow-primary/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: 'Mobile App',
    desc: 'Aplikasi mobile iOS & Android yang intuitif, cepat, dan scalable menggunakan React Native dan Flutter.',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
    cardBorder: 'hover:border-secondary/40',
    iconBg: 'bg-secondary/10 group-hover:bg-secondary/20',
    glow: 'group-hover:shadow-secondary/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infrastruktur cloud yang scalable, CI/CD pipeline, dan monitoring 24/7 untuk operasional bisnis tanpa gangguan.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    cardBorder: 'hover:border-accent/40',
    iconBg: 'bg-accent/10 group-hover:bg-accent/20',
    glow: 'group-hover:shadow-accent/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Integrasi kecerdasan buatan ke dalam produk Anda — dari chatbot cerdas hingga analitik prediktif berbasis data.',
    tags: ['Python', 'TensorFlow', 'LLM'],
    cardBorder: 'hover:border-warning/40',
    iconBg: 'bg-warning/10 group-hover:bg-warning/20',
    glow: 'group-hover:shadow-warning/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-warning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    desc: 'Audit keamanan, penetration testing, dan implementasi protokol keamanan berlapis untuk melindungi aset digital Anda.',
    tags: ['Pentest', 'SOC', 'ISO 27001'],
    cardBorder: 'hover:border-success/40',
    iconBg: 'bg-success/10 group-hover:bg-success/20',
    glow: 'group-hover:shadow-success/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3 reveal">Layanan Kami</p>
          <h2 className="text-4xl md:text-6xl font-display font-black leading-tight reveal" style={{ animationDelay: '.1s' }}>
            Solusi Lengkap<br />Untuk Bisnis Anda
          </h2>
          <p className="mt-6 text-lg opacity-60 max-w-xl mx-auto reveal" style={{ animationDelay: '.2s' }}>
            Dari strategi hingga eksekusi, kami menyediakan layanan teknologi end-to-end yang mendorong pertumbuhan nyata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={"group card bg-base-200 border border-base-content/5 " + s.cardBorder + " transition-all duration-300 tilt-card reveal shadow-lg " + s.glow}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="card-body p-8">
                <div className={"w-14 h-14 rounded-2xl " + s.iconBg + " flex items-center justify-center mb-6 transition-colors"}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map(tag => (
                    <span key={tag} className="badge badge-outline badge-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* IT Consulting — gradient highlight card */}
          <div className="group card bg-gradient-to-br from-primary to-secondary border-0 tilt-card reveal shadow-xl shadow-primary/20" style={{ animationDelay: '0.35s' }}>
            <div className="card-body p-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white">IT Consulting</h3>
              <p className="text-white/70 text-sm leading-relaxed">Konsultasi strategis dari para ahli berpengalaman untuk merancang roadmap teknologi yang tepat sasaran.</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all">
                Konsultasi Gratis
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
