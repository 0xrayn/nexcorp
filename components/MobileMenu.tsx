'use client'

import { useEffect } from 'react'

export default function MobileMenu() {
  const close = () => {
    document.getElementById('mobile-menu')?.classList.remove('open')
  }

  return (
    <div
      id="mobile-menu"
      style={{
        display: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        fontFamily: "'Syne', sans-serif",
        fontSize: '2rem',
        fontWeight: 700,
        backdropFilter: 'blur(30px)',
        background: 'rgba(0,0,0,.85)',
      }}
      className="mobile-menu-overlay"
    >
      <button
        onClick={close}
        className="absolute top-6 right-6 text-3xl opacity-60"
        aria-label="Close menu"
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
          className="hover:text-primary transition-colors"
          style={{ animationDelay: `${0.05 + i * 0.05}s` }}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
