export default function Footer() {
  return (
    <footer className="bg-base-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display font-black text-3xl mb-4">Nex<span className="text-primary">Corp</span></p>
            <p className="opacity-60 text-sm leading-relaxed max-w-sm">
              Mitra transformasi digital terpercaya untuk bisnis modern. Kami hadir untuk mengubah visi Anda menjadi solusi teknologi yang berdampak nyata.
            </p>
            <div className="flex gap-3 mt-6">
              {/* LinkedIn */}
              <a href="#" className="btn btn-ghost btn-sm btn-circle opacity-60 hover:opacity-100" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="btn btn-ghost btn-sm btn-circle opacity-60 hover:opacity-100" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="btn btn-ghost btn-sm btn-circle opacity-60 hover:opacity-100" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <p className="font-display font-bold text-sm tracking-widest uppercase opacity-60 mb-4">Layanan</p>
            <ul className="space-y-2 text-sm opacity-70">
              {['Web Development', 'Mobile App', 'Cloud & DevOps', 'AI & Machine Learning', 'Cybersecurity'].map(s => (
                <li key={s}><a href="#services" className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <p className="font-display font-bold text-sm tracking-widest uppercase opacity-60 mb-4">Perusahaan</p>
            <ul className="space-y-2 text-sm opacity-70">
              {[
                { label: 'Tentang Kami', href: '#about' },
                { label: 'Tim Kami',     href: '#team' },
                { label: 'Portfolio',    href: '#portfolio' },
                { label: 'Karir',        href: '#contact' },
                { label: 'Blog',         href: '#contact' },
              ].map(l => (
                <li key={l.label}><a href={l.href} className="hover:text-primary transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-base-content/10">
          <p className="text-sm opacity-40">© 2025 NexCorp. Hak cipta dilindungi.</p>
          <div className="flex gap-6 text-sm opacity-40">
            <a href="#" className="hover:opacity-80">Kebijakan Privasi</a>
            <a href="#" className="hover:opacity-80">Syarat &amp; Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
