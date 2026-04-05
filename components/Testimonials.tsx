const testimonials = [
  {
    stars: 5,
    quote: 'NexCorp benar-benar mengubah cara kami beroperasi. Platform yang mereka bangun meningkatkan efisiensi 60% dalam 3 bulan pertama.',
    name: 'Reza Hakim',
    title: 'CTO, Tokomed',
    initials: 'RH',
    accentBg: 'bg-base-200',
    accentBorder: 'border-base-content/5',
    avatarBg: 'bg-primary',
    avatarText: 'text-primary-content',
    borderSep: 'border-base-content/10',
  },
  {
    stars: 5,
    quote: 'Tim NexCorp sangat profesional dan responsif. Mereka memahami kebutuhan bisnis kami jauh lebih baik dari vendor lain.',
    name: 'Lisa Agustina',
    title: 'CEO, EduNusa',
    initials: 'LA',
    accentBg: 'bg-primary',
    accentBorder: '',
    avatarBg: 'bg-primary-content/20',
    avatarText: '',
    borderSep: 'border-primary-content/20',
    featured: true,
  },
  {
    stars: 5,
    quote: 'Hasil kerja NexCorp melampaui ekspektasi kami. Delivery tepat waktu, kualitas luar biasa, dan after-sales support yang sangat baik.',
    name: 'Muhammad Pratama',
    title: 'COO, LogistikaID',
    initials: 'MP',
    accentBg: 'bg-base-200',
    accentBorder: 'border-base-content/5',
    avatarBg: 'bg-secondary',
    avatarText: 'text-secondary-content',
    borderSep: 'border-base-content/10',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3 reveal">Testimoni</p>
          <h2 className="text-4xl md:text-6xl font-display font-black reveal" style={{ animationDelay: '.1s' }}>
            Kata Klien Kami
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card ${t.accentBg} ${t.accentBorder ? `border ${t.accentBorder}` : ''} p-8 tilt-card reveal`}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="flex gap-1 mb-4">{'⭐'.repeat(t.stars)}</div>
              <p className={`${t.featured ? 'text-primary-content/80' : 'opacity-70'} leading-relaxed italic`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className={`flex items-center gap-3 mt-6 pt-6 border-t ${t.borderSep}`}>
                <div className={`w-10 h-10 rounded-xl ${t.avatarBg} flex items-center justify-center font-display font-bold ${t.avatarText}`}>
                  {t.initials}
                </div>
                <div>
                  <p className={`font-semibold font-display text-sm ${t.featured ? '' : ''}`}>{t.name}</p>
                  <p className={`text-xs ${t.featured ? 'text-primary-content/60' : 'opacity-50'}`}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
