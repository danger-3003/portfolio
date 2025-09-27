"use client"

import React from 'react'
import { ProjectsInfo } from '@/constants/Projects'
import { Heading } from '../ui/Text'
import ProjectCard from './ProjectCard'
import LinkButton from '../ui/Button/LinkButton'
import HeaderImage from '../Header/HeaderImage'

function FeatureProjects() {
  return (
    <>
      <div className='w-full bg-[#aff2ea] flex items-center justify-center'>
        <div className='w-full max-w-[70rem]'>
          <HeaderImage />
        </div>
      </div>
      <div id='projectSection' className='w-full relative flex items-center justify-center flex-col pb-10 pt-20 md:pt-24 md:pb-20 px-5 sm:px-8 md:px-10'>
        <div className='bg-primary-400 dark:bg-[#aff2ea] w-full max-w-20 h-0.5 rounded-full absolute top-10'></div>
        <div className='max-w-[70rem] w-full overflow-hidden flex items-center justify-center flex-col'>
          <div className='w-full'>
            <Heading data-aos="fade-right" className="text-3xl md:text-4xl lg:text-5xl text-center sm:text-left">
              Featured Works
            </Heading>
          </div>
          <div className='grid grid-cols-1 max-w-96 sm:max-w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-7 md:mt-10'>
            {
              ProjectsInfo.map((item, key) => (
                item.featured &&
                <div key={key}>
                  <ProjectCard
                    projectItem={item}
                  />
                </div>
              ))
            }
          </div>
          <div className='w-full flex items-center justify-center sm:items-end sm:justify-end mt-10'>
            <LinkButton
              href={"/my-work"}
              text="View more"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureProjects