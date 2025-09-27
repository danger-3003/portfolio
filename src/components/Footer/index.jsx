"use client"

import React from 'react'
import { Text, Heading } from '../ui/Text'
import { useNavbarUrls } from '@/constants/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Figma } from 'lucide-react'
import IconButton from '../ui/Button/IconButton';

function Footer() {

  const navbarUrls = useNavbarUrls();

  return (
    <>
      <div className='relative'>
        <div className=''>
          <div className='bg-slate-100 dark:bg-[#1f1f21] flex items-center justify-center flex-col pt-20 pb-5 px-5 sm:px-8 md:px-10 w-full'>
            <div className='max-w-[70rem] w-full'>
              <div className='flex items-center justify-center w-full flex-col gap-5'>
                <div className='flex items-center sm:items-start justify-between flex-col sm:flex-row w-full gap-5'>
                  <div className='w-full max-w-80 md:max-w-96'>
                    <Heading className="text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left">Let’s create something amazing together...</Heading>
                  </div>
                  <div>
                    <p className='font-nunito text-base sm:text-lg font-medium mb-3 hidden sm:block'>Quick links</p>
                    <div className='flex items-center sm:items-start justify-evenly flex-wrap sm:flex-col gap-3 sm:gap-1 w-full max-w-80'>
                      {
                        navbarUrls.map((item, key) => (
                          <button type='button' key={key} onClick={item.click}><Text>{item.title}</Text></button>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className='hidden sm:flex items-center justify-center gap-2 pt-10 lg:pt-20'>
                  <IconButton
                    className="flex items-center justify-center size-10 group hover:bg-primary-300 dark:hover:bg-primary-400 rounded-lg custom-transition"
                    onClick={() => { typeof window !== "undefined" && window.open("https://www.linkedin.com/in/hima-varsha-barla", "_blank") }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} className='size-[60%] text-primary-300 group-hover:text-background dark:group-hover:text-black dark:text-white custom-transition' />
                  </IconButton>
                  <IconButton
                    className="flex items-center justify-center size-10 group hover:bg-primary-300 dark:hover:bg-primary-400 rounded-lg custom-transition"
                    onClick={() => { typeof window !== "undefined" && window.open("mailto:varshahima46@gmail.com", "_blank") }}                >
                    <FontAwesomeIcon icon={faEnvelope} className='size-[60%] text-primary-300 group-hover:text-background dark:group-hover:text-black dark:text-white custom-transition' />
                  </IconButton>
                  <IconButton
                    className="flex items-center justify-center size-10 group hover:bg-primary-300 dark:hover:bg-primary-400 rounded-lg custom-transition"
                    onClick={() => { console.log("Behance") }}
                  >
                    <Figma className='size-[60%] text-primary-300 group-hover:text-background dark:group-hover:text-black dark:text-white custom-transition' />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-slate-100 dark:bg-zinc-800 flex items-center justify-center py-4 border-t border-text w-full'>
            <Text className="text-text">Designed  with ❤️ by <a href='https://www.linkedin.com/in/hima-varsha-barla' target='_blank' className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent text-base sm:text-lg bg-clip-text font-semibold mb-0.5 pointer-events-auto'>Hima Varsha</a></Text>
          </div>
        </div>
        <div className='sticky -z-10 bottom-0 pt-5 pb-20 sm:py-10 flex items-center justify-center bg-slate-200 dark:bg-zinc-800/20 w-full'>
          <div className='max-w-[70rem] w-full flex items-center justify-center'>
            <p className="text-[14.5vw] xl:text-[12rem] leading-none truncate font-poppins text-slate-400 dark:text-zinc-600">
              Hima Varsha
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer