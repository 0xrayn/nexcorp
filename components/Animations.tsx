'use client'

import { useReveal, useCounter } from '@/hooks/useReveal'
import { useEffect } from 'react'

export default function Animations() {
  useReveal()
  useCounter()

  // Tilt cards mouse effect (desktop only)
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.tilt-card')
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []

    cards.forEach(card => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -6
        const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 6
        card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`
      }
      const leave = () => { card.style.transform = '' }
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

  return null
}
