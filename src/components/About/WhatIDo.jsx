"use client"

import React, { useState } from 'react'
import WhatIDoCard from './WhatIDoCard'
import { WhatIDoCardInfo } from '@/constants/WhatIDo'
import { Heading, Text } from '../ui/Text'

function WhatIDo() {

  const [activeCard, setActiveCard] = useState(0);

  const handleClick = (key) => {
    setActiveCard(key);
  }

  return (
    <>
      <div className='w-full relative overflow-hidden flex items-center justify-center flex-col py-10 md:pt-16 md:pb-24 px-5 sm:px-8 md:px-10'>
        <div className='w-full h-full md:h-[30rem] flex items-start justify-center flex-col md:flex-row gap-10 lg:gap-32'>
          <div className='sm:basis-[60%] lg:basis-2/3 flex items-start justify-start flex-col gap-7 lg:gap-10'>
            <Heading data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl">
              What I Do
            </Heading>
            <Text data-aos="fade-up" data-aos-delay="100" className="text-left">I design clean, user-friendly interfaces backed by research and real user insights, ensuring every interaction feels natural.
              From early concepts and wireframes to high-fidelity prototypes, my process is guided by user needs and continuous testing.
              Through iteration and refinement, I focus on creating seamless, intuitive experiences that balance aesthetics with functionality.
              The result is digital products that are engaging, enjoyable, and truly memorable to use.
            </Text>
            <div className='hidden md:flex items-start justify-start flex-col gap-3'>
              {
                WhatIDoCardInfo.map((cardItem, key) => (
                  <div key={key} className='flex items-center justify-center gap-3 cursor-pointer' onClick={() => { setActiveCard(key) }}>
                    <div className={`relative border-2 ${activeCard === key ? "border-primary-400 opacity-100" : "border-slate-500 dark:border-gray-400 opacity-50"} rounded-full size-6 flex items-center justify-center custom-transition`}>
                      <div className={`absolute bg-text opacity-50 size-2 rounded-full custom-transition`}></div>
                    </div>
                    <Text className={`${activeCard === key ? "font-semibold text-primary-400 opacity-100" : "font-normal text-text opacity-50 dark:opacity-40"} custom-transition`}>{cardItem.title}</Text>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='basis-full w-full md:basis-[35%] lg:basis-1/3 flex items-center justify-center flex-col gap-3'>
            {
              WhatIDoCardInfo.map((cardItem, key) => (
                <div key={key} onClick={() => handleClick(key)}>
                  <WhatIDoCard data={cardItem} activeCard={activeCard} />
                </div>
              ))
            }
          </div>
        </div >
      </div >
    </>
  )
}

export default WhatIDo