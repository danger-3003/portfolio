"use client"

import React from 'react'
import { Heading, Text } from '../ui/Text';

function WhatIDoCard({ data, activeCard }) {
  return (
    <>
      <button className={`hidden md:block w-full ${activeCard === data.id ? "h-80 border-primary-400 border" : "h-16 border-0"} min-w-80 transition-all duration-500 relative rounded-xl sm:rounded-2xl overflow-hidden group shadow-customShadow`}>
        <img src={data.image} alt={data.title} className='w-full relative z-[2] custom-transition opacity-80 dark:opacity-100 rounded-xl sm:rounded-2xl' />
        <div className={`flex items-center justify-end flex-col gap-4 z-[5] absolute 
          ${activeCard === data.id ?
            "bottom-0 from-white/0 dark:from-black/0 to-white/100 dark:to-black/90 via-white/60 dark:via-black/50 pb-2" :
            "bottom-0 from-white/0 dark:from-black/20 via-white/40 dark:via-black/50 to-white/30 dark:to-black/70 pb-0 backdrop-blur-sm"} 
          bg-gradient-to-b size-full duration-500`}
        >
          <div className=''>
            <Heading className="text-2xl custom-transition">{data.title}</Heading>
          </div>
          <div className={`${activeCard === data.id ? "min-h-[4.5rem]" : "min-h-0"} h-0 overflow-hidden custom-transition`}>
            <Text className="text-center custom-transition px-2">{data.description}</Text>
          </div>
        </div>
      </button>
      <button className='block md:hidden size-full max-w-80 custom-transition relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden group shadow-none hover:shadow-customShadow transition-shadow duration-300'>
        <img src={data.image} alt={data.title} className='size-full scale-100 group-hover:scale-110 relative z-[2] custom-transition' />
        <div className='flex items-center justify-end flex-col gap-4 absolute -bottom-80 group-hover:bottom-0 opacity-0 group-hover:opacity-100 z-[5] pb-2 md:pb-3 lg:pb-5 bg-gradient-to-b from-white/0 dark:from-black/0 via-white/60 dark:via-black/60 to-white/100 dark:to-black/100 size-full aspect-square custom-transition'>
          <Heading className="text-2xl custom-transition">{data.title}</Heading>
          <Text className="text-center custom-transition px-2">{data.description}</Text>
        </div>
      </button>
    </>
  );
}

export default WhatIDoCard