'use client'

import { useEffect, useState } from 'react'
import MobileMenuTrigger from './MobileMenuTrigger'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary">Layanan</a>
          <a href="#about" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary">Tentang</a>
          <a href="#portfolio" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary">Portfolio</a>
          <a href="#team" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity hover:text-primary">Tim</a>
          <a href="#contact" className="btn btn-primary btn-sm rounded-full px-6 btn-glow">Hubungi Kami</a>
        </div>
        <MobileMenuTrigger />
      </div>
    </nav>
  )
}
