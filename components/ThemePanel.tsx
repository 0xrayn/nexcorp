'use client'

import { useState } from 'react'
import { useTheme, themes } from '@/hooks/useTheme'

export default function ThemePanel() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div
      id="theme-panel"
      className={open ? '' : 'hidden-panel'}
    >
      <div className="flex items-center bg-base-200 shadow-2xl rounded-l-2xl overflow-hidden">
        {/* Toggle tab */}
        <button
          onClick={() => setOpen(v => !v)}
          className="w-11 min-h-[120px] bg-primary flex items-center justify-center rounded-l-2xl hover:bg-primary-focus transition-colors"
          title="Ganti Tema"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-content" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a7 7 0 0 1 0 14"/>
          </svg>
        </button>
        {/* Dots */}
        <div className="flex flex-col gap-3 p-3">
          <p className="text-[10px] font-display font-bold text-base-content/50 uppercase tracking-widest">Tema</p>
          <div className="flex flex-col gap-2">
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
