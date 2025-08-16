"use client"

import React from 'react'
import { Heading, Text } from '../ui/Text';

function WhatIDoCard({ data }) {
  console.log(data);
  return (
    <>
      <div className='size-full custom-transition relative' style={{ backgroundImage: `url(${data.image})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className='flex items-center justify-end flex-col gap-4 absolute pb-5 bg-gradient-to-b from-white/0 via-white/40 to-white/100 size-full custom-transition opacity-100 dark:opacity-0'>
          <Heading className="text-2xl md:text-3xl custom-transition">{data.title}</Heading>
          <Text className="text-center custom-transition px-2">{data.description}</Text>
        </div>
        <div className='flex items-center justify-end flex-col gap-4 absolute pb-5 bg-gradient-to-b from-black/0 via-black/40 to-black/100 size-full custom-transition opacity-0 dark:opacity-100'>
          <Heading className="text-2xl md:text-3xl custom-transition">{data.title}</Heading>
          <Text className="text-center custom-transition px-2">{data.description}</Text>
        </div>
      </div>
    </>
  );
}

export default WhatIDoCard