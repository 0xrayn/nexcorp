const services = [
  {
    title: 'Web Development',
    desc: 'Website dan aplikasi web berkinerja tinggi dengan teknologi terkini — React, Next.js, dan arsitektur modern.',
    accent: 'primary',
    tags: ['Next.js', 'React', 'TypeScript'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: 'Mobile App',
    desc: 'Aplikasi mobile iOS & Android yang intuitif, cepat, dan scalable menggunakan React Native dan Flutter.',
    accent: 'secondary',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Infrastruktur cloud yang scalable, CI/CD pipeline, dan monitoring real-time untuk zero-downtime deployment.',
    accent: 'accent',
    tags: ['AWS', 'GCP', 'Docker', 'K8s'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Implementasi AI/ML untuk otomasi bisnis, analisis prediktif, dan solusi kecerdasan buatan custom.',
    accent: 'success',
    tags: ['Python', 'TensorFlow', 'LLM'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    desc: 'Audit keamanan komprehensif, penetration testing, dan implementasi sistem keamanan enterprise.',
    accent: 'warning',
    tags: ['Pentest', 'SOC', 'Compliance'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-warning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    desc: 'Desain interface yang indah, intuitif, dan user-centric — dari riset hingga prototype siap produksi.',
    accent: 'error',
    tags: ['Figma', 'Research', 'Prototyping'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-error" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22a10 10 0 1 1 0-20"/>
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
              className={`group card bg-base-200 border border-base-content/5 hover:border-${s.accent}/40 transition-all duration-300 tilt-card reveal`}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="card-body p-8">
                <div className={`w-14 h-14 rounded-2xl bg-${s.accent}/10 flex items-center justify-center mb-6 group-hover:bg-${s.accent}/20 transition-colors`}>
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
        </div>
      </div>
    </section>
  )
}
