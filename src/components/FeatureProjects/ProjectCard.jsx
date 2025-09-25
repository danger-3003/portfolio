"use client";

import React from 'react'
import { ArrowRight } from 'lucide-react';
import { Heading, Text } from '../ui/Text';

function ProjectCard({ projectItem }) {
  return (
    <>
      <div className='flex items-center justify-center flex-col border border-zinc-300 dark:border-zinc-700 rounded-xl overflow-hidden hover:bg-zinc-50 dark:hover:bg-zinc-800 duration-300 p-3 lg:p-5 group hover:shadow-md hover:shadow-zinc-400/10 dark:hover:shadow-zinc-600/10'>
        <h3 className="w-full text-xl md:text-[24px] font-poppins">{projectItem.heading}</h3>
        <p className="font-nunito font-light text-sm sm:text-[14px] pt-5">{projectItem.glance}</p>
        <div className='w-full'>
          <img src={projectItem.img} alt={projectItem.heading} className='group-hover:scale-110 duration-300 w-full' />
        </div>
        <div className='flex items-start justify-start w-full'>
          <a href={"/"} className='flex items-center justify-center group/button-group gap-2 bg-text text-background cursor-pointer text-[13px] font-nunito rounded-md px-3 pb-[2px] pt-[2.5px] mt-5'>
            Explore more
            <ArrowRight width={14} className='group-hover/button-group:rotate-0 -rotate-45 duration-300' />
          </a>
        </div>
      </div >
    </>
  )
}

export default ProjectCard