'use client'

import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right')

    const show = (el: HTMLElement) => {
      const delay = el.style.animationDelay || '0s'
      const ms = parseFloat(delay) * 1000 || 0
      setTimeout(() => el.classList.add('visible'), ms * 0.4)
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            show(e.target as HTMLElement)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect()
      // Already visible in viewport on mount  show immediately
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        show(el)
      } else {
        io.observe(el)
      }
    })

    return () => io.disconnect()
  }, [])
}

export function useCounter() {
  useEffect(() => {
    function animateCounter(el: HTMLElement, target: number, duration = 1800) {
      let startTime: number | null = null
      function step(timestamp: number) {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 4)
        el.textContent = String(Math.floor(ease * target))
        if (progress < 1) requestAnimationFrame(step)
        else el.textContent = String(target)
      }
      requestAnimationFrame(step)
    }

    const counterIO = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            animateCounter(el, parseInt(el.dataset.target || '0'))
            counterIO.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('.counter').forEach(el => counterIO.observe(el))
    return () => counterIO.disconnect()
  }, [])
}
