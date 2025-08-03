"use client"

import React, { useState } from 'react';
import { navbarURL } from "@/constants/Navbar";
import { Text } from '../ui/Text';
import IconButton from '../ui/Button/IconButton';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Figma, Sun, Moon } from 'lucide-react';
import TextScrambler from '../ui/Animation/TextScrambler';
import { useThemeStore } from '@/store/ThemeStore';
import ClickOutside from '../ui/ClickOutside';

function Navbar() {

  const [activeTab, setActiveTab] = useState(0);
  // const [theme, setTheme] = useState("light");
  const { theme, setTheme } = useThemeStore();
  const [openMenu, setOpenMenu] = useState(false);

  const handleActiveTab = (index) => {
    setActiveTab(index);
  }

  const handleSetTheme = () => {
    setTheme();
  }

  const handleOpenMenu = () => {
    setOpenMenu((prev) => (prev === false ? true : false));
  }

  return (
    <>
      <ClickOutside onClickOutside={handleOpenMenu}>
        <div className='fixed top-0 z-10 flex items-center justify-center w-full bg-gradient-to-l from-background/80 dark:from-black/30 dark:to-black/30 to-background/80 backdrop-blur-lg shadow-customShadow'>
          <nav className='h-16 max-w-[80rem] w-full px-5 relative flex items-center justify-center flex-row'>
            <p className='font-sheppard text-3xl bg-gradient-to-r from-primary-400 to-blue-500 text-transparent bg-clip-text absolute left-5 sm:left-8 pr-2'>
              <TextScrambler text={"Hima Varsha"} />
            </p>
            <div className={`hidden md:flex items-center w-full justify-center flex-row gap-7 text-primary-400`}>
              {
                navbarURL.map((item, key) => (
                  <div key={key} className='group'>
                    <Text onClick={() => (item.onClick(), handleActiveTab(key), handleOpenMenu())} className={`cursor-pointer px-1 -mb-0.5 text-primary-400 hover:font-bold dark:text-slate-300 hover:text-primary-400"} transition-all duration-500`}>
                      <TextScrambler text={item.title} duration={1000} />
                    </Text>
                  </div>
                ))
              }
            </div>
            <div className='absolute right-5 sm:right-8 flex items-center justify-start gap-2'>
              <div className='hidden sm:flex items-start justify-center gap-2'>
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
              <div className='relative h-4 w-[20px] md:hidden flex items-center justify-center gap-0.5 flex-col cursor-pointer'
                onClick={() => { handleOpenMenu() }}
              >
                <div className={`w-[18px] h-[2.4px] bg-primary-400 dark:bg-text rounded-md absolute ${openMenu ? "rotate-45 top-[6.5px] dark:bg-primary-400" : "rotate-0 top-0 "} transition-all duration-500`}></div>
                <div className={`w-[18px] h-[2.4px] bg-primary-400 dark:bg-text rounded-md absolute ${openMenu ? "opacity-0" : "opacity-100"} transition-all duration-500`}></div>
                <div className={`w-[18px] h-[2.4px] bg-primary-400 dark:bg-text rounded-md absolute ${openMenu ? "-rotate-45 bottom-[6.5px] dark:bg-primary-400" : "rotate-0 bottom-0 "} transition-all duration-500`}></div>
              </div>
            </div>
          </nav >
        </div >
        <div className={`flex md:hidden fixed top-0 z-[9] h-44 left-0 items-center ${openMenu ? "top-16" : "-top-72"} w-full justify-center flex-col gap-4 text-primary-400 bg-gradient-to-l from-background/80 to-background/80 dark:from-black/30 dark:to-black/30 backdrop-blur-lg shadow-customShadow transition-all duration-500`}>
          {
            navbarURL.map((item, key) => (
              <div key={key} className='group'>
                <Text onClick={() => (item.onClick(), handleActiveTab(key), handleOpenMenu())} className={`cursor-pointer px-1 -mb-0.5 text-primary-400 hover:font-bold dark:text-slate-300 hover:text-primary-400"} transition-all duration-500`}>
                  <TextScrambler text={item.title} duration={1000} />
                </Text>
              </div>
            ))
          }
        </div >
        <div className='w-full h-12 z-10 fixed bottom-3 px-5 flex items-center justify-center flex-row'>
          <div className='flex sm:hidden items-center justify-evenly gap-2 w-full max-w-60 border-text border bg-gradient-to-l from-background/80 dark:from-black/30 dark:to-black/30 to-background/80 backdrop-blur-lg shadow-customShadow h-full rounded-xl'>
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
        </div>
      </ClickOutside>
    </>
  )
}

export default Navbar