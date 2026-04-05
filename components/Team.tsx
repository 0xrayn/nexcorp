// Team with avatar illustrations (colorful SVG faces, no initials)
const members = [
  {
    name: 'Ahmad Rizki',    role: 'CEO & Co-Founder',      bio: '15 tahun di industri teknologi',
    grad: 'from-primary to-secondary', shadow: 'group-hover:shadow-primary/30', roleColor: 'text-primary',
    // Unique face illustration colors
    skin: '#FBBF7C', hair: '#1F2937', shirt: '#6366F1',
  },
  {
    name: 'Sari Putri',     role: 'CTO',                   bio: 'Ahli arsitektur cloud & AI',
    grad: 'from-secondary to-accent', shadow: 'group-hover:shadow-secondary/30', roleColor: 'text-secondary',
    skin: '#F9A87A', hair: '#7C3AED', shirt: '#A855F7',
  },
  {
    name: 'Budi Hartono',   role: 'Lead Product Designer', bio: 'UX research & design systems',
    grad: 'from-accent to-warning', shadow: 'group-hover:shadow-accent/30', roleColor: 'text-accent',
    skin: '#FCD5A0', hair: '#292524', shirt: '#06B6D4',
  },
  {
    name: 'Dewi Wulandari', role: 'Head of Engineering',   bio: 'Full-stack & DevOps specialist',
    grad: 'from-error to-primary', shadow: 'group-hover:shadow-error/30', roleColor: 'text-error',
    skin: '#FBBF7C', hair: '#4C1D95', shirt: '#EF4444',
  },
]

function AvatarIllustration({ skin, hair, shirt, name }: { skin: string; hair: string; shirt: string; name: string }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="100" height="100" rx="16" fill="transparent"/>
      {/* Hair */}
      <ellipse cx="50" cy="28" rx="22" ry="20" fill={hair}/>
      {/* Face */}
      <ellipse cx="50" cy="42" rx="18" ry="20" fill={skin}/>
      {/* Eyes */}
      <ellipse cx="43" cy="40" rx="3" ry="3.5" fill="#1F2937"/>
      <ellipse cx="57" cy="40" rx="3" ry="3.5" fill="#1F2937"/>
      <circle cx="44" cy="39" r="1" fill="white" opacity="0.7"/>
      <circle cx="58" cy="39" r="1" fill="white" opacity="0.7"/>
      {/* Smile */}
      <path d="M 43 50 Q 50 57 57 50" fill="none" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Neck */}
      <rect x="44" y="60" width="12" height="8" fill={skin}/>
      {/* Shirt / body */}
      <path d="M 20 100 Q 20 72 36 68 L 50 73 L 64 68 Q 80 72 80 100 Z" fill={shirt}/>
      {/* Collar */}
      <path d="M 38 68 L 50 80 L 62 68" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  )
}

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
            <div key={m.name} className="group text-center reveal tilt-card" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
              {/* Avatar illustration */}
              <div className={"relative mx-auto w-40 h-40 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br " + m.grad + " shadow-lg " + m.shadow + " transition-shadow"}>
                <AvatarIllustration skin={m.skin} hair={m.hair} shirt={m.shirt} name={m.name} />
                {/* Verified badge */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-success flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-display font-bold text-xl">{m.name}</h3>
              <p className={"text-sm font-medium mt-1 " + m.roleColor}>{m.role}</p>
              <p className="text-sm opacity-50 mt-2">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
