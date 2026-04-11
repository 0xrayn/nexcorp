import Image from 'next/image'

const testimonials = [
  {
    stars: 5,
    quote: 'NexCorp benar-benar mengubah cara kami beroperasi. Platform yang mereka bangun meningkatkan efisiensi 60% dalam 3 bulan pertama.',
    name: 'Reza Hakim',
    title: 'CTO, Tokomed',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces&auto=format&q=80',
    cardBg: 'bg-base-200',
    border: 'border border-base-content/5',
    textColor: 'opacity-70',
    sep: 'border-base-content/10',
    nameColor: '',
    featured: false,
  },
  {
    stars: 5,
    quote: 'Tim NexCorp sangat profesional dan responsif. Mereka memahami kebutuhan bisnis kami jauh lebih baik dari vendor lain.',
    name: 'Lisa Agustina',
    title: 'CEO, EduNusa',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces&auto=format&q=80',
    cardBg: 'bg-primary',
    border: '',
    textColor: 'text-primary-content/80',
    sep: 'border-primary-content/20',
    nameColor: 'text-primary-content',
    featured: true,
  },
  {
    stars: 5,
    quote: 'Hasil kerja NexCorp melampaui ekspektasi kami. Delivery tepat waktu, kualitas luar biasa, dan after-sales support yang sangat baik.',
    name: 'Muhammad Pratama',
    title: 'COO, LogistikaID',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces&auto=format&q=80',
    cardBg: 'bg-base-200',
    border: 'border border-base-content/5',
    textColor: 'opacity-70',
    sep: 'border-base-content/10',
    nameColor: '',
    featured: false,
  },
]

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
              className={`card ${t.cardBg} ${t.border} p-8 tilt-card reveal`}
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, si) => (
                  <svg key={si} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className={`leading-relaxed italic text-sm ${t.textColor}`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className={`flex items-center gap-3 mt-6 pt-6 border-t ${t.sep}`}>
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-base-300 relative">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className={`font-semibold font-display text-sm ${t.nameColor}`}>{t.name}</p>
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
