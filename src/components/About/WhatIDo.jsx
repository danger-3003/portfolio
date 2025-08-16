"use client"

import React, { useState } from 'react'
import WhatIDoCard from './WhatIDoCard'
import { WhatIDoCardInfo } from '@/constants/WhatIDo'
import { Heading, Text } from '../ui/Text'

function WhatIDo() {
  const [activeTab, setActiveTab] = useState(0);
  const [cardData, setCardData] = useState({
    title: "Research",
    description: "Conducting cross-domain research to ensure designs are both functional and engaging.",
    image: "assets/profile/Research.svg",
  });
  return (
    <>
      <div className='w-full overflow-hidden flex items-center justify-center flex-col py-10 md:pt-16 md:pb-24 px-5 sm:px-8 md:px-10'>
        <div className='w-full flex items-center sm:items-end md:items-start justify-center flex-col sm:flex-row gap-10 md:gap-0'>
          <div className='basis-[60%] sm:basis-1/2 flex items-start justify-start flex-col gap-7 lg:gap-10 sm:mr-5 md:mr-10'>
            <Heading className="uppercase text-3xl md:text-4xl lg:text-5xl">
              What I Do
            </Heading>
            <Text>I design simple, user-friendly interfaces backed by research and real user insights. From concept to testing, my focus is on creating digital experiences that are intuitive, engaging, and a joy to use.</Text>
            <div className='flex items-start justify-start flex-col gap-3'>
              {
                WhatIDoCardInfo.map((cardItem, key) => (
                  <div key={key} className='flex items-center justify-center gap-3 cursor-pointer' onClick={() => { setActiveTab(key); setCardData(cardItem); }}>
                    <div className={`relative border-2 ${activeTab === key ? "border-primary-400 opacity-100" : "border-slate-500 dark:border-gray-400 opacity-50"} rounded-full size-6 flex items-center justify-center custom-transition`}>
                      <div className={`absolute bg-text opacity-50 size-2 rounded-full custom-transition`}></div>
                    </div>
                    <Text className={`${activeTab === key ? "font-semibold text-primary-400 opacity-100" : "font-normal text-text opacity-50 dark:opacity-40"} custom-transition`}>{cardItem.title}</Text>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='max-w-[15rem] w-[70vw] sm:w-full sm:max-w-full sm:basis-1/2 sm:size-full aspect-square flex items-center justify-center'>
            <WhatIDoCard data={cardData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatIDo