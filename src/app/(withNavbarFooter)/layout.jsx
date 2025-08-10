"use client"

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useThemeStore } from "@/store/ThemeStore";

export default function MainLayout({ children }) {
  const cursorOut = useRef(null);
  const cursorIn = useRef(null);
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (theme) {
      null
    }
    else {
      setTheme();
    }
    const handleMouseMove = (e) => {
      // Move OUTER cursor first (immediate)
      gsap.to(cursorOut.current, {
        x: e.clientX - 11,
        y: e.clientY - 13,
        duration: 0.7,
        ease: 'power3.out'
      });

      // Move INNER cursor next (delayed)
      gsap.to(cursorIn.current, {
        x: e.clientX - 2,
        y: e.clientY - 3,
        delay: 0.100,
        duration: 0.7,
        ease: 'power3.out'
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorOut}
        className="border border-primary-400 dark:border-white size-6 rounded-full z-50 fixed flex items-center justify-center pointer-events-none"
      >
      </div>
      <div
        ref={cursorIn}
        className="fixed z-50 bg-primary-400 dark:bg-white size-1.5 rounded-full pointer-events-none"
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
