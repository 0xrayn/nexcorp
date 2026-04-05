'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/hooks/useTheme'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const { currentColors } = useTheme()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      el.style.opacity = '0.12'
      el.style.background = `radial-gradient(circle, ${currentColors[0]} 0%, transparent 70%)`
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    const onLeave = () => { el.style.opacity = '0' }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [currentColors])

  return <div id="cursor-glow" ref={ref} />
}
