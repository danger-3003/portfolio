"use client"

import React, { useLayoutEffect, useRef } from 'react'
import AboutSection from './AboutSection'
import WhatIDoScrollSection from './WhatIDoScrollSection'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

function About() {

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="max-w-[70rem] w-full flex flex-col items-center justify-center"
      >
        <AboutSection />
      </div>
      <div
        className="w-full"
      >
        <WhatIDoScrollSection />
      </div>
    </div >
  )
}

export default About
