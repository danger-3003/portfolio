"use client"

import React from 'react'
import AboutSection from './AboutSection'
import WhatIDo from './WhatIDo'

function About() {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div id='aboutSection' className='max-w-[80rem] w-full flex items-center justify-center flex-col'>
          <AboutSection />
          <WhatIDo />
        </div>
      </div>
    </>
  )
}

export default About