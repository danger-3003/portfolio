import React from 'react'

function LinkButton({ text, onClick, href, target }) {
  return (
    <>
      <a href={href} onClick={onClick} target={target} className="relative inline-flex items-center justify-center px-5 py-0.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group cursor-pointer text-sm md:text-base">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-500 to-cyan-400"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-violet-300 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white font-nunito font-light md:font-normal">{text}</span>
      </a>
    </>
  )
}

export default LinkButton