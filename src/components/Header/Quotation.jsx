import React from 'react'

function Quotation() {
  return (
    <>
      <div className="h-screen max-h-[900px] flex items-center justify-center relative overflow-hidden w-full">
        <div className="bg-violet-400 size-80 rounded-full blur-[6rem] absolute -mt-20 -ml-[25rem] animate-one"></div>
        <div className="bg-pink-700 size-[26rem] rounded-full blur-[6rem] absolute ml-60 -mt-40 animate-two"></div>
        <div className="bg-orange-500 size-96 rounded-full blur-[6rem] absolute mt-20 animate-three"></div>
        <div className="h-full w-full relative">
          <div className="w-full h-full bg-gradient-to-br backdrop-blur-xl flex items-center justify-center px-5 md:px-10">
            <p className="text-white max-w-[40rem] text-[3rem] sm:text-[5rem] text-center font-bitcount font-light tracking-tight leading-[4rem] sm:leading-[5rem]">
              {/* <TextScrambler text={"Every pixel has a purpose."} duration={4000} /> */}
              Every pixel has a purpose.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quotation