const members = [
  { initials: 'AR', name: 'Ahmad Rizki',     role: 'CEO & Co-Founder',       bio: '15 tahun di industri teknologi',  gradient: 'from-primary to-secondary',   color: 'primary'   },
  { initials: 'SP', name: 'Sari Putri',      role: 'CTO',                    bio: 'Ahli arsitektur cloud & AI',     gradient: 'from-secondary to-accent',    color: 'secondary' },
  { initials: 'BH', name: 'Budi Hartono',    role: 'Lead Product Designer',  bio: 'UX research & design systems',   gradient: 'from-accent to-warning',      color: 'accent'    },
  { initials: 'DW', name: 'Dewi Wulandari',  role: 'Head of Engineering',    bio: 'Full-stack & DevOps specialist', gradient: 'from-error to-primary',       color: 'error'     },
]

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

export default function Team() {
  return (
    <section id="team" className="py-32 bg-base-200/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3 reveal">Tim Kami</p>
          <h2 className="text-4xl md:text-6xl font-display font-black reveal" style={{ animationDelay: '.1s' }}>
            Otak di Balik<br />Inovasi NexCorp
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div
              key={m.name}
              className="group text-center reveal tilt-card"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="relative mx-auto w-40 h-40 mb-6">
                <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${m.gradient} flex items-center justify-center text-4xl font-display font-black text-white shadow-lg group-hover:shadow-${m.color}/30 transition-shadow`}>
                  {m.initials}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-success flex items-center justify-center">
                  <CheckIcon />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl">{m.name}</h3>
              <p className={`text-${m.color} text-sm font-medium mt-1`}>{m.role}</p>
              <p className="text-sm opacity-50 mt-2">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
