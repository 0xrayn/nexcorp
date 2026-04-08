'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

export const themes = [
  { name: 'dark',      colors: ['#6366f1', '#a855f7'] },
  { name: 'light',     colors: ['#4f46e5', '#9333ea'] },
  { name: 'cupcake',   colors: ['#65c3c8', '#ef9fbc'] },
  { name: 'cyberpunk', colors: ['#ff7598', '#75d1f0'] },
  { name: 'forest',    colors: ['#1eb854', '#14b8a6'] },
  { name: 'aqua',      colors: ['#09ecf3', '#966fb3'] },
  { name: 'luxury',    colors: ['#dca54c', '#c6a0f6'] },
  { name: 'dracula',   colors: ['#ff79c6', '#bd93f9'] },
  { name: 'nord',      colors: ['#5e81ac', '#88c0d0'] },
  { name: 'sunset',    colors: ['#ff865b', '#fd6f9c'] },
]

interface ThemeContextType {
  theme: string
  setTheme: (name: string) => void
  currentColors: string[]
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  currentColors: themes[0].colors,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState('dark')

  useEffect(() => {
    // Read saved theme from localStorage on mount
    const saved = localStorage.getItem('nexcorp-theme') || 'dark'
    setThemeState(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const setTheme = useCallback((name: string) => {
    // Update React state
    setThemeState(name)
    // Update DOM immediately  this is what DaisyUI reads
    document.documentElement.setAttribute('data-theme', name)
    // Persist
    try { localStorage.setItem('nexcorp-theme', name) } catch {}
  }, [])

  const currentColors = themes.find(t => t.name === theme)?.colors ?? themes[0].colors

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentColors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
