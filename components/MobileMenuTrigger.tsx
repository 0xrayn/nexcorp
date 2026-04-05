'use client'

export default function MobileMenuTrigger() {
  const openMenu = () => {
    document.getElementById('mobile-menu')?.classList.add('open')
  }

  return (
    <button className="md:hidden btn btn-ghost btn-sm" onClick={openMenu} aria-label="Open menu">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  )
}
