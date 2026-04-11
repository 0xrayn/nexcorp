// Testimonials with avatar photo illustrations
const testimonials = [
  {
    stars: 5,
    quote: 'NexCorp benar-benar mengubah cara kami beroperasi. Platform yang mereka bangun meningkatkan efisiensi 60% dalam 3 bulan pertama.',
    name: 'Reza Hakim', title: 'CTO, Tokomed',
    skin: '#FBBF7C', hair: '#1F2937', shirt: '#3B82F6',
    cardBg: 'bg-base-200', border: 'border border-base-content/5', textColor: 'opacity-70', sep: 'border-base-content/10', nameColor: '',
  },
  {
    stars: 5,
    quote: 'Tim NexCorp sangat profesional dan responsif. Mereka memahami kebutuhan bisnis kami jauh lebih baik dari vendor lain.',
    name: 'Lisa Agustina', title: 'CEO, EduNusa',
    skin: '#F9C5A7', hair: '#6D28D9', shirt: '#7C3AED',
    cardBg: 'bg-primary', border: '', textColor: 'text-primary-content/80', sep: 'border-primary-content/20', nameColor: 'text-primary-content',
    featured: true,
  },
  {
    stars: 5,
    quote: 'Hasil kerja NexCorp melampaui ekspektasi kami. Delivery tepat waktu, kualitas luar biasa, dan after-sales support yang sangat baik.',
    name: 'Muhammad Pratama', title: 'COO, LogistikaID',
    skin: '#FCD5A0', hair: '#292524', shirt: '#10B981',
    cardBg: 'bg-base-200', border: 'border border-base-content/5', textColor: 'opacity-70', sep: 'border-base-content/10', nameColor: '',
  },
]

function MiniAvatar({ skin, hair, shirt }: { skin: string; hair: string; shirt: string }) {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="20" cy="11" rx="9" ry="8" fill={hair}/>
      <ellipse cx="20" cy="17" rx="7.5" ry="8" fill={skin}/>
      <ellipse cx="17.5" cy="16" rx="1.2" ry="1.4" fill="#1F2937"/>
      <ellipse cx="22.5" cy="16" rx="1.2" ry="1.4" fill="#1F2937"/>
      <path d="M 17 20 Q 20 23 23 20" fill="none" stroke="#1F2937" strokeWidth="0.8" strokeLinecap="round"/>
      <rect x="17" y="24" width="6" height="4" fill={skin}/>
      <path d="M 6 40 Q 6 28 14 26 L 20 29 L 26 26 Q 34 28 34 40 Z" fill={shirt}/>
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16">
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
              className={"card " + t.cardBg + " " + t.border + " p-8 tilt-card reveal"}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="flex gap-1 mb-4 text-lg">{'⭐'.repeat(t.stars)}</div>
              <p className={"leading-relaxed italic text-sm " + t.textColor}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className={"flex items-center gap-3 mt-6 pt-6 border-t " + t.sep}>
                {/* Avatar illustration */}
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-base-300">
                  <MiniAvatar skin={t.skin} hair={t.hair} shirt={t.shirt} />
                </div>
                <div>
                  <p className={"font-semibold font-display text-sm " + t.nameColor}>{t.name}</p>
                  <p className={"text-xs " + (t.featured ? 'text-primary-content/60' : 'opacity-50')}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
