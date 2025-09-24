"use client"

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useThemeStore } from "@/store/ThemeStore";

export default function MainLayout({ children }) {
  const cursorOut = useRef(null);
  const cursorIn = useRef(null);
  const bodyRef = useRef(null);
  const { theme, setTheme } = useThemeStore();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (!theme) {
      setTheme();
    }

    const handleMouseMove = (e) => {
      gsap.to(cursorOut.current, {
        x: e.clientX - 11,
        y: e.clientY - 13,
        duration: 0.7,
        ease: 'power3.out'
      });

      gsap.to(cursorIn.current, {
        x: e.clientX - 2,
        y: e.clientY - 3,
        delay: 0.1,
        duration: 0.7,
        ease: 'power3.out'
      });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress.toFixed(1));
    };

    const hideCursor = () => {
      gsap.to([cursorOut.current, cursorIn.current], { opacity: 0, duration: 0.2 });
    };

    const showCursor = () => {
      gsap.to([cursorOut.current, cursorIn.current], { opacity: 1, duration: 0.2 });
    };

    const pointerElements = document.querySelectorAll("a, button, [role='button'], input, select, textarea");

    pointerElements.forEach(el => {
      el.addEventListener("mouseenter", hideCursor);
      el.addEventListener("mouseleave", showCursor);
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      pointerElements.forEach(el => {
        el.removeEventListener("mouseenter", hideCursor);
        el.removeEventListener("mouseleave", showCursor);
      });
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        ref={cursorOut}
        className="border border-primary-400 dark:border-white size-6 rounded-full z-50 fixed flex items-center justify-center pointer-events-none mix-blend-multiply dark:mix-blend-lighten"
      />
      <div
        ref={cursorIn}
        className="fixed z-50 bg-primary-400 dark:bg-white size-1.5 rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-lighten"
      />

      {/* Navbar gets scroll progress */}
      <Navbar scrollProgress={scrollProgress} />
      <div ref={bodyRef} className='cursor-default'>
        {children}
      </div>
      <Footer />
    </>
  );
}
