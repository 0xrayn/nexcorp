'use client'

import { useEffect, useRef, useState } from 'react'

const words = ['Membangun', 'Berinovasi', 'Mentransformasi', 'Berkolaborasi']

export default function TypingText() {
  const [displayed, setDisplayed] = useState('')
  const stateRef = useRef({ wIdx: 0, cIdx: 0, deleting: false })

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    function typeLoop() {
      const { wIdx, cIdx, deleting } = stateRef.current
      const word = words[wIdx]

      if (!deleting) {
        const next = word.slice(0, cIdx + 1)
        setDisplayed(next)
        stateRef.current.cIdx++
        if (stateRef.current.cIdx === word.length) {
          stateRef.current.deleting = true
          timeoutId = setTimeout(typeLoop, 1800)
          return
        }
      } else {
        const next = word.slice(0, cIdx - 1)
        setDisplayed(next)
        stateRef.current.cIdx--
        if (stateRef.current.cIdx === 0) {
          stateRef.current.deleting = false
          stateRef.current.wIdx = (wIdx + 1) % words.length
        }
      }
      timeoutId = setTimeout(typeLoop, stateRef.current.deleting ? 55 : 95)
    }

    typeLoop()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <span className="text-primary">{displayed}</span>
      <span className="typing-cursor" />
    </>
  )
}
