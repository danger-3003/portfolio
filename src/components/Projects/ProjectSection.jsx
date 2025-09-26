"use client"

import React from 'react'
import { Heading } from '../ui/Text'

function ProjectSection({ index, projectItem }) {
  return (
    <>
      <div
        className='w-full h-full relative overflow-hidden group border-t-[1px] lg:border-l-[1px] border-slate-300 dark:border-zinc-800'
      >
        <div
          className='w-full h-full absolute z-[2] group-hover:opacity-100 opacity-0 group-hover:scale-110 custom-transition'
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/profile/Wireframe.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
        </div>
        <div className='w-full h-full px-5 sm:px-8 md:px-10 py-16 lg:py-24 absolute z-[3] group-hover:text-white custom-transition'>
          <p className='text-[10rem] font-poppins '>{index}</p>
          <Heading className="text-2xl md:text-3xl lg:text-4xl">
            {projectItem.heading}
          </Heading>
        </div>
      </div>
    </>
  )
}

export default ProjectSection