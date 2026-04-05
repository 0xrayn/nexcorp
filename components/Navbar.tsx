'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMenu = () => document.getElementById('mobile-menu')?.classList.add('open')

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-blur bg-base-100/80 shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-2xl tracking-tight">
          Nex<span className="text-primary">Corp</span>
        </a>

        {/* Desktop nav — hidden on mobile/tablet */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services"   className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary">Layanan</a>
          <a href="#about"      className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary">Tentang</a>
          <a href="#portfolio"  className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary">Portfolio</a>
          <a href="#contact"    className="btn btn-primary btn-sm rounded-full px-6 btn-glow">Hubungi Kami</a>
        </div>

        {/* Hamburger — ONLY on mobile/tablet, hidden on md and above */}
        <button
          className="flex md:hidden btn btn-ghost btn-sm"
          onClick={openMenu}
          aria-label="Buka menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
