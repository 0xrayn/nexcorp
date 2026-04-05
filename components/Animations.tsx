'use client'

import { useReveal, useCounter } from '@/hooks/useReveal'
import { useEffect } from 'react'

export default function Animations() {
  useReveal()
  useCounter()

  // Tilt cards mouse effect (desktop)
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.tilt-card')

    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []

    cards.forEach(card => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top
        const cx = r.width / 2
        const cy = r.height / 2
        const rx = ((y - cy) / cy) * -6
        const ry = ((x - cx) / cx) * 6
        card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`
      }
      const leave = () => {
        card.style.transform = ''
      }
      card.addEventListener('mousemove', move)
      card.addEventListener('mouseleave', leave)
      handlers.push({ el: card, move, leave })
    })

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  // Mobile menu: inject open/close CSS via a <style> tag
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      #mobile-menu { display: none; }
      #mobile-menu.open { display: flex; }
      #mobile-menu a {
        opacity: 0;
        transform: translateY(30px);
        animation: menuIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards;
      }
      #mobile-menu a:nth-child(1) { animation-delay: .05s; }
      #mobile-menu a:nth-child(2) { animation-delay: .10s; }
      #mobile-menu a:nth-child(3) { animation-delay: .15s; }
      #mobile-menu a:nth-child(4) { animation-delay: .20s; }
      #mobile-menu a:nth-child(5) { animation-delay: .25s; }
      @keyframes menuIn { to { opacity: 1; transform: translateY(0); } }
    `
    document.head.appendChild(style)
    return () => { document.head.removeChild(style) }
  }, [])

  return null
}
