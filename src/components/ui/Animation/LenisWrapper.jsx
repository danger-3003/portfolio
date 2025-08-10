'use client'

import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function LenisWrapper({ children }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function init() {
      // 1. Init AOS
      AOS.init({
        duration: 800,
        once: false,
        easing: 'ease-out-cubic',
        offset: 50,
      })

      // 2. Init Lenis
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      })

      lenis.on('scroll', () => {
        AOS.refresh()
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // 4. Mark as loaded
      setIsLoaded(true)

      // 5. Cleanup
      return () => {
        lenis.destroy()
      }
    }

    init()
  }, [])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <span className="animate-pulse text-lg">Loading...</span>
      </div>
    )
  }

  return <>{children}</>
}
