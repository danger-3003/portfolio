"use client";

import React from 'react'
import { ArrowRight } from 'lucide-react';
import { Heading, Text } from '../ui/Text';

function ProjectCard({ projectItem }) {
  console.log(projectItem);
  return (
    <>
      <div className='flex items-center justify-center flex-col border border-zinc-300 dark:border-zinc-700 rounded-xl overflow-hidden hover:bg-zinc-50 dark:hover:bg-zinc-800 duration-300 p-3 lg:p-5 group hover:shadow-md hover:shadow-zinc-400/10 dark:hover:shadow-zinc-600/10'>
        <Heading className="w-full text-xl md:text-[28px]">{projectItem.heading}</Heading>
        <p className="font-nunito font-light text-sm sm:text-[14px] pt-5">{projectItem.glance}</p>
        <div className='w-full'>
          <img src={projectItem.img} alt={projectItem.heading} className='group-hover:scale-110 duration-300 w-full' />
        </div>
        <div className='flex items-start justify-start w-full'>
          <a href={"/"} className='flex items-center justify-center gap-2 bg-primary-300 dark:bg-white text-background cursor-pointer text-[13px] font-nunito rounded-md px-3 pb-[2px] pt-[2.5px] mt-5'>
            Explore more
            <ArrowRight width={14} />
          </a>
        </div>
      </div >
    </>
  )
}

export default ProjectCard