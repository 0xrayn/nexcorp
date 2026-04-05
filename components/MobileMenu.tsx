'use client'

export default function MobileMenu() {
  const close = () => {
    document.getElementById('mobile-menu')?.classList.remove('open')
  }

  return (
    <div id="mobile-menu" className="mobile-menu-overlay">
      <button
        onClick={close}
        className="absolute top-6 right-6 text-3xl opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Tutup menu"
      >✕</button>
      {[
        { href: '#hero',      label: 'Beranda' },
        { href: '#services',  label: 'Layanan' },
        { href: '#about',     label: 'Tentang' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#contact',   label: 'Kontak' },
      ].map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          onClick={close}
          className="hover:text-primary transition-colors menu-item"
          style={{ animationDelay: `${0.05 + i * 0.05}s` }}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
