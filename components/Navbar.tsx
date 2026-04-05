'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMenu = () => window.dispatchEvent(new Event('mobile-menu-open'))

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-blur bg-base-100/80 shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-xl sm:text-2xl tracking-tight flex-shrink-0">
          Nex<span className="text-primary">Corp</span>
        </a>

        {/* Desktop nav — visible ONLY md and above */}
        <div className="navbar-desktop-links items-center gap-6 lg:gap-8">
          <a href="#services"  className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary whitespace-nowrap">Layanan</a>
          <a href="#about"     className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary whitespace-nowrap">Tentang</a>
          <a href="#portfolio" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary whitespace-nowrap">Portfolio</a>
          <a href="#contact"   className="btn btn-primary btn-sm rounded-full px-5 btn-glow whitespace-nowrap">Hubungi Kami</a>
        </div>

        {/* Hamburger — ONLY mobile/tablet */}
        <button
          className="navbar-hamburger btn btn-ghost btn-sm p-1"
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
