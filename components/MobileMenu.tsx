'use client'

import { useEffect, useRef } from 'react'

export default function MobileMenu() {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = overlayRef.current
    if (!el) return

    const handleOpen = () => {
      el.style.display = 'flex'
      el.style.opacity = '0'
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { el.style.opacity = '1' })
      })
    }

    const close = () => {
      el.style.opacity = '0'
      document.body.style.overflow = ''
      setTimeout(() => { el.style.display = 'none' }, 250)
    }

    // Expose close for link clicks
    el.dataset.closeHandler = 'true'
    ;(el as any)._close = close

    window.addEventListener('mobile-menu-open', handleOpen)
    return () => {
      window.removeEventListener('mobile-menu-open', handleOpen)
      document.body.style.overflow = ''
    }
  }, [])

  const close = () => {
    const el = overlayRef.current
    if (!el) return
    ;(el as any)._close?.()
  }

  const links = [
    { href: '#hero',      label: 'Beranda' },
    { href: '#services',  label: 'Layanan' },
    { href: '#about',     label: 'Tentang' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact',   label: 'Kontak' },
  ]

  return (
    <div
      ref={overlayRef}
      style={{
        display: 'none',
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 9000,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.75rem',
        background: 'rgba(0,0,0,0.93)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        opacity: 0,
        transition: 'opacity 0.25s ease',
      }}
    >
      {/* Close button */}
      <button
        onClick={close}
        style={{
          position: 'absolute', top: '1.25rem', right: '1.25rem',
          fontSize: '1.5rem', color: 'white', opacity: 0.6,
          background: 'none', border: 'none', cursor: 'pointer',
          padding: '0.5rem', lineHeight: 1,
          zIndex: 1,
        }}
        aria-label="Tutup menu"
      >✕</button>

      {links.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={close}
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: 'clamp(1.5rem, 7vw, 2.25rem)',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            transition: 'opacity 0.2s',
            opacity: 0.9,
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.9')}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
