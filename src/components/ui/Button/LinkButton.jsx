import React from 'react'
import { ArrowRight } from 'lucide-react'

function LinkButton({ text, onClick, href, target }) {
  return (
    <>
      <a href={href} onClick={onClick} target={target} className="relative inline-flex items-center justify-center px-5 py-[5px] overflow-hidden transition duration-300 rounded-md shadow-xl group cursor-pointer text-sm md:text-base">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-fuchsia-500 to-cyan-400"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-primary-300 rounded-full opacity-10 group-hover:rotate-90 ease"></span>
        <span className="relative text-white font-nunito font-light md:font-normal w-max text-sm lg:text-[15px]">{text}</span>
        <span className='text-white text-sm pl-3'>
          <ArrowRight width={14} className='group-hover:rotate-0 -rotate-45 duration-300' />
        </span>
      </a>
    </>
  )
}

export default LinkButton