'use client'

import { useState } from 'react'
import { useTheme, themes } from '@/hooks/useTheme'

export default function ThemePanel() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div
      id="theme-panel"
      className={open ? 'theme-panel-open' : 'theme-panel-closed'}
    >
      <div className="flex items-center bg-base-200 shadow-2xl rounded-l-2xl overflow-hidden">
        {/* Toggle tab */}
        <button
          onClick={() => setOpen(v => !v)}
          className="theme-toggle-btn bg-primary flex items-center justify-center rounded-l-2xl hover:bg-primary-focus"
          title="Ganti Tema"
          aria-label="Ganti Tema"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary-content" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a7 7 0 0 1 0 14"/>
          </svg>
        </button>
        {/* Dots */}
        <div className="flex flex-col gap-2 p-2.5">
          <p className="text-[9px] font-display font-bold text-base-content/50 uppercase tracking-widest">Tema</p>
          <div className="flex flex-col gap-1.5">
            {themes.map(t => (
              <button
                key={t.name}
                className={'theme-dot' + (t.name === theme ? ' active' : '')}
                style={{ background: `linear-gradient(135deg,${t.colors[0]},${t.colors[1]})` }}
                title={t.name}
                onClick={() => setTheme(t.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
