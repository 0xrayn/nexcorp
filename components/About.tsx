export default function About() {
  return (
    <section id="about" className="py-32 bg-base-200/40 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-left">
            <p className="text-primary font-display font-bold text-sm tracking-widest uppercase mb-3">Tentang NexCorp</p>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight mb-8">
              Bukan Sekadar<br />Vendor Teknologi
            </h2>
            <p className="opacity-70 leading-relaxed mb-6">
              Sejak 2012, NexCorp telah menjadi mitra transformasi digital bagi ratusan perusahaan dari berbagai industri. Kami bukan hanya menyediakan teknologi  kami membangun fondasi digital yang menopang pertumbuhan bisnis jangka panjang.
            </p>
            <p className="opacity-70 leading-relaxed mb-10">
              Dengan tim lebih dari 80 profesional berpengalaman, kami mengkombinasikan keahlian teknis mendalam dengan pemahaman bisnis yang tajam untuk menghadirkan solusi yang benar-benar berdampak.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-display">Kualitas Tanpa Kompromi</p>
                  <p className="text-sm opacity-60">Setiap baris kode ditulis dengan standar enterprise tertinggi</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-display">Delivery Tepat Waktu</p>
                  <p className="text-sm opacity-60">Metodologi agile yang menjamin timeline dan kualitas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold font-display">Support 24/7</p>
                  <p className="text-sm opacity-60">Tim dedicated siap membantu kapanpun Anda membutuhkan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 reveal-right">
            <div className="card bg-base-100 border border-base-content/5 p-8 text-center hover:border-primary/30 transition-colors">
              <p className="text-5xl font-display font-black text-primary mb-2"><span className="counter" data-target="250">0</span>+</p>
              <p className="font-display font-semibold">Proyek Delivered</p>
              <p className="text-sm opacity-50 mt-1">Dari startup hingga enterprise</p>
            </div>
            <div className="card bg-base-100 border border-base-content/5 p-8 text-center hover:border-secondary/30 transition-colors mt-8">
              <p className="text-5xl font-display font-black text-secondary mb-2"><span className="counter" data-target="86">0</span>+</p>
              <p className="font-display font-semibold">Expert Engineers</p>
              <p className="text-sm opacity-50 mt-1">Profesional bersertifikat</p>
            </div>
            <div className="card bg-base-100 border border-base-content/5 p-8 text-center hover:border-accent/30 transition-colors -mt-8">
              <p className="text-5xl font-display font-black text-accent mb-2"><span className="counter" data-target="12">0</span>+</p>
              <p className="font-display font-semibold">Tahun Berdiri</p>
              <p className="text-sm opacity-50 mt-1">Terpercaya sejak 2012</p>
            </div>
            <div className="card bg-base-100 border border-base-content/5 p-8 text-center hover:border-success/30 transition-colors">
              <p className="text-5xl font-display font-black text-success mb-2"><span className="counter" data-target="98">0</span>%</p>
              <p className="font-display font-semibold">Satisfaction Rate</p>
              <p className="text-sm opacity-50 mt-1">Klien yang kembali lagi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
