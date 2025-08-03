import React from 'react'

import { Heading, Text } from "../ui/Text";
import LinkButton from "../ui/Button/LinkButton";
import HeaderImage from "./HeaderImage";

function HeaderContent() {
  return (
    <>
      {/* aff2ea */}
      <div className='w-full h-max bg-[#aff2ea] flex items-center justify-center flex-col'>
        <div className='max-w-[80rem] w-full flex items-center justify-center flex-col'>
          <div className="h-screen max-h-[40rem] w-full flex items-center justify-center flex-col px-5 md:px-10 bg-background rounded-b-full">
            <div className="text-center">
              <Text className="text-xl sm:text-2xl md:text-3xl font-semibold text-text">Hi There!</Text>
              <Heading className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-10 md:leading-[4rem] font-semibold">I'm <span className="bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent w-max font-extrabold">Hima&nbsp;Varsha</span></Heading>
              {/* <Text className="text-[1rem] sm:text-2xl mt-5 leading-[5rem]">{text}<Cursor>|</Cursor></Text> */}
              <Text className={"text-[1rem] sm:text-2xl tracking-[0.3rem] mt-2"}>UI/UX Designer</Text>
            </div>
            <div className="flex items-center justify-center gap-5 mt-5 md:mt-10">
              <LinkButton
                target={"_blank"}
                href={"/assets/profile/HimaVarsha.pdf"}
                text={"Resume"}
              />
              <LinkButton
                target={""}
                onClick={() => { console.log("My work") }}
                text={"My work"}
              />
            </div>
          </div>
          <HeaderImage />
        </div>
      </div>
    </>
  )
}

export default HeaderContent