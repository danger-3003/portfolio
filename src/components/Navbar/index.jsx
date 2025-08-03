"use client"

import React, { act, useState } from 'react'
import { navbarURL } from "@/constants/Navbar";
import { Text } from '../ui/Text';
import IconButton from '../ui/Button/IconButton';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Figma, Sun, Moon } from 'lucide-react';
import TextScrambler from '../ui/Animation/TextScrambler';
import { useThemeStore } from '@/store/ThemeStore';

function Navbar() {

  const [activeTab, setActiveTab] = useState(0);
  // const [theme, setTheme] = useState("light");
  const { theme, setTheme } = useThemeStore();

  const handleActiveTab = (index) => {
    setActiveTab(index);
  }

  const handleSetTheme = () => {
    setTheme();
  }

  return (
    <>
      <div className='flex fixed top-0 z-10 items-center justify-center w-full bg-gradient-to-l from-background/80 dark:from-black/30 dark:to-black/30 to-background/80 backdrop-blur-lg shadow-customShadow'>
        <nav className='h-16 max-w-[80rem] w-full px-5 relative flex items-center justify-center flex-row'>
          <p className='font-sheppard text-3xl bg-gradient-to-r from-primary-400 to-blue-500 text-transparent bg-clip-text absolute left-8 pr-2'>
            <TextScrambler text={"Hima Varsha"} />
          </p>
          <div className='flex items-center justify-center flex-row gap-7 text-primary-400'>
            {
              navbarURL.map((item, key) => (
                <div key={key} className='group'>
                  <Text onClick={() => { item.onClick(); handleActiveTab(key) }} className={`cursor-pointer px-1 -mb-0.5 ${activeTab === key ? "text-primary-400 font-bold" : "text-slate-500 dark:text-slate-300 hover:text-primary-400"} transition-all duration-500`}>
                    <TextScrambler text={item.title} duration={1000} />
                  </Text>
                  {/* <div className={`h-[1.5px] ${activeTab === key ? "w-full" : "w-0 group-hover:w-full"} duration-500 transition-all bg-primary-400 rounded`}></div> */}
                </div>
              ))
            }
          </div>
          <div className='absolute right-8 flex items-start justify-center gap-2'>
            <IconButton
              className="flex items-center justify-center size-8 group hover:bg-primary-300 dark:hover:bg-primary-400 rounded-lg duration-500 transition-all"
              onClick={() => { console.log("Linkedin") }}
            >
              <FontAwesomeIcon icon={faLinkedin} className='size-[60%] text-primary-300 group-hover:text-background dark:group-hover:text-black dark:text-white duration-500 transition-all' />
            </IconButton>
            <IconButton
              className="flex items-center justify-center size-8 group hover:bg-primary-300 dark:hover:bg-primary-400 rounded-lg duration-500 transition-all"
              onClick={() => { console.log("Linkedin") }}
            >
              <FontAwesomeIcon icon={faEnvelope} className='size-[60%] text-primary-300 group-hover:text-background dark:group-hover:text-black dark:text-white duration-500 transition-all' />
            </IconButton>
            <IconButton
              className="flex items-center justify-center size-8 group hover:bg-primary-300 dark:hover:bg-primary-400 rounded-lg duration-500 transition-all"
              onClick={() => { console.log("Linkedin") }}
            >
              <Figma className='size-[60%] text-primary-300 group-hover:text-background dark:group-hover:text-black dark:text-white duration-500 transition-all' />
            </IconButton>
            <IconButton
              className="flex items-center justify-center size-8 group hover:bg-primary-300 dark:hover:bg-primary-400 rounded-lg duration-500 transition-all relative"
              onClick={() => { handleSetTheme() }}
            >
              <Sun className={`size-[60%] text-primary-300 group-hover:text-background dark:group-hover:text-black dark:text-white absolute ${theme === "dark" ? "opacity-100" : "opacity-0"} duration-500 transition-all`} />
              <Moon className={`size-[60%] text-primary-300 group-hover:text-background dark:group-hover:text-black dark:text-white absolute ${theme === "light" ? "opacity-100" : "opacity-0"} duration-500 transition-all`} />
            </IconButton>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar