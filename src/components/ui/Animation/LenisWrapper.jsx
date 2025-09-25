'use client'

import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import AOS from 'aos'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
        ScrollTrigger.update() // keep GSAP in sync
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // 3. Init GSAP + ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length ? lenis.scrollTo(value) : lenis.scroll
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        },
      })

      ScrollTrigger.refresh()

      // 4. Mark as loaded
      setIsLoaded(true)

      // 5. Cleanup
      return () => {
        lenis.destroy()
        ScrollTrigger.kill()
      }
    }

    init()
  }, [])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-dvh bg-black text-white">
        <span className="animate-pulse text-lg">Loading...</span>
      </div>
    )
  }

  return <>{children}</>
}
