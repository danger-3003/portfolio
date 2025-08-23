"use client"

import React, { useState } from 'react'
import WhatIDoCard from './WhatIDoCard'
import { WhatIDoCardInfo } from '@/constants/WhatIDo'
import { Heading, Text } from '../ui/Text'

function WhatIDo() {

  return (
    <>
      <div className='w-full relative overflow-hidden flex items-center justify-center flex-col py-10 md:pt-16 md:pb-24 px-5 sm:px-8 md:px-10'>
        <div className='w-full flex items-center justify-center flex-col gap-10 md:gap-0'>
          <div className='max-w-[60%] flex items-center justify-center flex-col gap-7 lg:gap-10'>
            <Heading data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl">
              What I Do
            </Heading>
            <Text data-aos="fade-up" data-aos-delay="100" className="text-center">I design simple, user-friendly interfaces backed by research and real user insights. From concept to testing, my focus is on creating digital experiences that are intuitive, engaging, and a joy to use.</Text>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7 lg:gap-10 mt-10'>
            {
              WhatIDoCardInfo.map((cardItem, key) => (
                <div key={key} data-aos="fade-up" data-aos-delay={(key + 1) * 100}>
                  <WhatIDoCard data={cardItem} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatIDo