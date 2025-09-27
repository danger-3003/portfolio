"use client"

import React, { useEffect, useRef, useState } from "react"
import { Heading, Text } from "../ui/Text"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

function ProjectSection({ index, projectItem }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // For mouse-following anchor
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    // Apply only for screens < lg (1024px)
    if (window.innerWidth < 1024) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
            } else {
              setIsVisible(false) // remove this line if you want it to stay visible
            }
          })
        },
        { threshold: 0.7 } // 80% of element in view
      )

      observer.observe(element)
      return () => observer.disconnect()
    }
  }, [])

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect()
    if (!rect) return
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="w-full h-full relative overflow-hidden group border-t-[1px] lg:border-l-[1px] border-slate-300 dark:border-zinc-800"
      onClick={() => {
        window !== undefined && window.open(projectItem.meta.openGraph.url, "_self", "noopener,noreferrer")
      }}
    >
      {/* Background overlay */}
      <div
        className={`
          bg-overlay w-full h-full absolute z-[2] custom-transition
          ${isVisible ? "opacity-100 scale-105" : "opacity-0"}
          lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-110
        `}
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(/assets/profile/Wireframe.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={`
        w-full h-full px-5 sm:px-8 md:px-10 py-16 lg:py-24 absolute z-[3] custom-transition
        ${isVisible ? "text-white" : ""}
        lg:group-hover:text-white flex items-start justify-between flex-col
      `}>
        <p className="text-[17rem] lg:text-[15rem] font-nunito lg:basis-2/3">
          {index}
        </p>
        <div className="flex items-start justify-start flex-col gap-5 md:gap-7 lg:gap-10 lg:basis-1/3">
          <Heading className="text-2xl md:text-3xl lg:text-4xl">
            {projectItem.heading}
          </Heading>
          <Text>{projectItem.description}</Text>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
