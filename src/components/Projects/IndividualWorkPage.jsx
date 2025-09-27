"use client"

import React from 'react'
import { Heading, Text } from '../ui/Text'
import { Target, Lightbulb, Zap, CircleCheckBig } from 'lucide-react'

function IndividualWorkPage({ project }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div
          className="max-w-[70rem] w-full flex flex-col items-center justify-center pb-10 py-20 px-5 sm:px-8 md:px-10"
        >
          <div className='flex items-start justify-center flex-col gap-7 lg:gap-10 pt-6'>
            <div
              data-aos="fade-up"
              className={`flex items-center justify-center w-full rounded-lg sm:rounded-xl lg:rounded-2xl bg-text`}
            >
              <img src={project.img} alt={project.heading} className="w-full max-w-[40rem]" />
            </div>
            <Heading data-aos="fade-right" className="text-3xl md:text-4xl lg:text-5xl">
              {project.heading}
            </Heading>
            <div data-aos="fade-right" className='flex items-start justify-start flex-col gap-3 bg-slate-100 dark:bg-[#1f1f21] p-5 md:p-7 rounded-lg sm:rounded-xl lg:rounded-2xl border-l-4 border-primary-400'>
              <p className="text-xl sm:text-2xl font-semibold font-nunito pointer-events-none">Problem Statement</p>
              <Text>{project.problemStatement}</Text>
            </div>
            <div data-aos="fade-right" className='flex items-start justify-start flex-col gap-3'>
              <p className="text-xl sm:text-2xl font-semibold font-nunito pointer-events-none">Description</p>
              <Text>{project.about}</Text>
            </div>
            <div data-aos="fade-right" className='flex items-start justify-start flex-col gap-3'>
              <p className="text-xl sm:text-2xl font-semibold font-nunito pointer-events-none">Process</p>
              <ul className='list-disc list-outside ml-4'>
                {
                  project.process.map((item, key) => (
                    <li key={key} className='py-1 text-sm sm:text-base font-nunito font-light pointer-events-none'>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div data-aos="fade-right" className='flex items-start justify-start flex-col gap-3'>
              <p className="text-xl sm:text-2xl font-semibold font-nunito pointer-events-none">Solution</p>
              <div className='flex items-start justify-start flex-col gap-3 bg-slate-100 dark:bg-[#1f1f21] p-5 md:p-7 rounded-lg sm:rounded-xl lg:rounded-2xl'>
                <Text>{project.problemStatement}</Text>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default IndividualWorkPage