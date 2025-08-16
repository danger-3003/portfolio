import React from 'react'

import { Heading, Text } from "../ui/Text";
import LinkButton from "../ui/Button/LinkButton";
import HeaderImage from "./HeaderImage";
import { useRouter } from 'next/navigation';

function HeaderContent() {

  const router = useRouter();
  const handleNavigate = () => {
    router.push("/my-work")
  }

  return (
    <>
      {/* aff2ea */}
      <div className='w-full h-max bg-[#aff2ea] flex items-center justify-center flex-col'>
        <div className='max-w-[80rem] w-full flex items-center justify-center flex-col'>
          <div className="h-screen max-h-[40rem] w-full flex items-center justify-center flex-col px-5 sm:px-8 md:px-10 bg-background rounded-b-full custom-transition">
            <div className="text-center">
              <Text data-aos="fade-up" className="text-xl sm:text-2xl md:text-3xl font-semibold text-text custom-transition">Hi There!</Text>
              <h1 data-aos="fade-up" data-aos-delay="100" className="font-poppins text-4xl md:text-5xl lg:text-[4rem] leading-10 md:leading-[4rem]"><span className='text-2xl md:text-3xl lg:text-4xl'>I'm</span> <span className="bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent w-max font-semibold tracking-wider">Hima&nbsp;Varsha</span></h1>
              <p data-aos="fade-up" data-aos-delay="200" className={"text-[1rem] sm:text-2xl tracking-[0.3rem] mt-2 font-nunito font-light"}>UI/UX Designer</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="flex items-center justify-center gap-5 mt-5 md:mt-10">
              <LinkButton
                target={"_blank"}
                href={"/assets/profile/HimaVarsha.pdf"}
                text={"Resume"}
              />
              <LinkButton
                target={""}
                onClick={handleNavigate}
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