"use client";

import React from 'react'
import Link from 'next/link';
import { Text } from '../ui/Text';

function ProjectCard({ projectItem }) {
  console.log(projectItem);
  return (
    <>
      <div className='flex items-center justify-center gap-2 flex-col'>
        <a href={"/"} className='flex items-center justify-center w-full'>
          <div className='border border-zinc-300 dark:border-zinc-700 rounded-xl overflow-hidden hover:bg-zinc-50 dark:hover:bg-zinc-800 duration-300 p-3 group hover:shadow-md hover:shadow-zinc-400/10 dark:hover:shadow-zinc-600/10'>
            <img src={projectItem.img} alt={projectItem.heading} className='group-hover:scale-110 duration-300' />
          </div>
        </a>
        <div>
          <a href={"/"} className='flex items-center justify-center w-full'>
            <Text className="text-lg font-medium">{projectItem.heading}</Text>
          </a>
        </div>
      </div >
    </>
  )
}

export default ProjectCard