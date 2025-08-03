"use client"

import React from 'react'
import { Heading, Text } from '../ui/Text'

function AboutSection() {
  return (
    <>
      <div className='w-full flex items-center justify-center flex-col pt-20 pb-24 px-5 md:px-10'>
        <div className='max-w-[80rem] w-full '>
          <div className='w-full flex items-center justify-center flex-col-reverse md:flex-row gap-10 lg:gap-32'>
            <div className='sm:basis-[60%] lg:basis-2/3 flex items-start justify-start flex-col gap-7 lg:gap-10'>
              <Heading className="uppercase text-4xl lg:text-5xl">Who I Am?</Heading>
              <Text className="text-justify">
                Hi there! I'm Hima Varsha, a passionate <span className='font-bold bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent w-max'>UI/UX Designer</span> and <span className='font-bold bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent w-max'>Creative Professional </span>
                who blends design thinking with storytelling to create seamless digital experiences.
                I specialize in transforming complex ideas into simple, elegant, and user-focused designs.
                My approach combines visual aesthetics with thoughtful content strategies to deliver impactful results.
              </Text>
            </div>
            <div className='sm:basis-[35%] lg:basis-1/3 w-full flex items-center justify-center'>
              <img src="/assets/profile/profile.svg" alt="Profile" className='w-[70%] max-w-96 md:w-full lg:w-[90%]' />
            </div>
          </div>
          <div className='border-l-2 pl-1.5 py-5 mt-10 border-black dark:border-white text-primary-400 flex items-start justify-start flex-col gap-2 w-full sm:w-[65%] lg:w-2/3 custom-transition'>
            <div className='flex items-start justify-start flex-row text-3xl'>
              <span className='text-[3.5rem] md:text-[4.5rem] font-poppins pr-1.5'>❝</span><p className='w-auto'>Design is not just what it looks like and feels like. Design is how it works.<span className='text-xl font-poppins'>❞</span></p>
            </div>
            <div className='pl-8'>
              <Text>- Hima Varsha</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection