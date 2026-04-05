export default function About() {
  return (
    <section id="about" className="py-32 bg-base-200/40 relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="reveal-left">
            <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3">Tentang NexCorp</p>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight mb-8">
              Bukan Sekadar<br />Vendor Teknologi
            </h2>
            <p className="opacity-70 leading-relaxed mb-6">
              Sejak 2012, NexCorp telah menjadi mitra transformasi digital bagi ratusan perusahaan dari berbagai industri. Kami bukan hanya menyediakan teknologi — kami membangun fondasi digital yang menopang pertumbuhan bisnis jangka panjang.
            </p>
            <p className="opacity-70 leading-relaxed mb-10">
              Dengan tim lebih dari 80 profesional berpengalaman, kami mengkombinasikan keahlian teknis mendalam dengan pemahaman bisnis yang tajam untuk menghadirkan solusi yang benar-benar berdampak.
            </p>

            <div className="space-y-4">
              {[
                {
                  accent: 'primary',
                  title: 'Kualitas Tanpa Kompromi',
                  desc: 'Setiap baris kode ditulis dengan standar enterprise tertinggi',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  ),
                },
                {
                  accent: 'secondary',
                  title: 'Delivery Tepat Waktu',
                  desc: 'Metodologi agile yang menjamin timeline dan kualitas',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  ),
                },
                {
                  accent: 'accent',
                  title: 'Support 24/7',
                  desc: 'Tim dedicated siap membantu kapanpun Anda membutuhkan',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                },
              ].map(item => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-${item.accent}/10 flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold font-display">{item.title}</p>
                    <p className="text-sm opacity-60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-6 reveal-right">
            {[
              { target: 250, suffix: '+', color: 'primary', label: 'Proyek Delivered', sub: 'Dari startup hingga enterprise' },
              { target: 86,  suffix: '+', color: 'secondary', label: 'Expert Engineers', sub: 'Profesional bersertifikat', mt: true },
              { target: 12,  suffix: '+', color: 'accent', label: 'Tahun Berdiri', sub: 'Terpercaya sejak 2012', mtn: true },
              { target: 98,  suffix: '%', color: 'success', label: 'Satisfaction Rate', sub: 'Klien yang kembali lagi' },
            ].map(s => (
              <div
                key={s.label}
                className={`card bg-base-100 border border-base-content/5 p-8 text-center hover:border-${s.color}/30 transition-colors ${s.mt ? 'mt-8' : ''} ${s.mtn ? '-mt-8' : ''}`}
              >
                <p className={`text-5xl font-display font-black text-${s.color} mb-2`}>
                  <span className="counter" data-target={s.target}>0</span>{s.suffix}
                </p>
                <p className="font-display font-semibold">{s.label}</p>
                <p className="text-sm opacity-50 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
