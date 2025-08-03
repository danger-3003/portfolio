"use client"

import React from 'react'
import { Text } from '../ui/Text'

function Footer() {
  return (
    <>
      <div className='h-[6.5rem] sm:h-16 bg-[#aff2ea] flex items-start sm:items-center justify-center py-3'>
        <Text className="text-[#000B58]">Designed by <span className='bg-gradient-to-r from-blue-500 to-blue-500 text-transparent bg-clip-text font-bold'>Hima Varsha</span></Text>
      </div>
    </>
  )
}

export default Footer