"use client"

import React from 'react'
import { Heading, Text } from '../ui/Text';

function WhatIDoCard({ data }) {
  return (
    <>
      <div className='size-full max-w-80 custom-transition relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden group shadow-none hover:shadow-customShadow transition-shadow duration-300'>
        <img src={data.image} alt={data.title} className='size-full scale-100 group-hover:scale-110 relative z-[2] custom-transition' />
        <div className='flex items-center justify-end flex-col gap-4 absolute -bottom-80 group-hover:bottom-0 opacity-0 group-hover:opacity-100 z-[5] pb-2 md:pb-3 lg:pb-5 bg-gradient-to-b from-white/0 dark:from-black/0 via-white/60 dark:via-black/60 to-white/100 dark:to-black/100 size-full aspect-square custom-transition'>
          <Heading className="text-2xl custom-transition">{data.title}</Heading>
          <Text className="text-center custom-transition px-2">{data.description}</Text>
        </div>
      </div>
    </>
  );
}

export default WhatIDoCard