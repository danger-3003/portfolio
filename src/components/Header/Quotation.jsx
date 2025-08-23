"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Quotation() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const redRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const red = redRef.current;

    // Center the redRef in viewport
    gsap.set(red, {
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      scale: 1,
      transformOrigin: "center center",
    });

    // Initial setup for content
    gsap.set(content, {
      scale: 1,
      transformOrigin: "49.5% center",
    });

    const isMobile = window.innerWidth <= 640;
    const scrollEnd = isMobile ? "+=200%" : "+=300%";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: scrollEnd,
        scrub: true,
        pin: true,
      },
    });

    tl.addLabel("start", 0)
      .to(content, { scale: 10, duration: 1, ease: "power3.inOut" }, "start")
      .to(red, { scale: isMobile ? 200 : 400, duration: 1, ease: "power3.inOut" }, "start+=0.2")
      .to(red, { opacity: 1, duration: 0.1 }, "start+=0.2");

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  const scrollDown = () => {
    const el = document.getElementById("aboutSection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div id="homeSection" className="w-full"></div>
      <section ref={sectionRef} className="h-screen flex items-center justify-center flex-col relative overflow-hidden w-full">
        <div className="bg-violet-400 size-80 rounded-full blur-[6rem] absolute -mt-20 -ml-[25rem] animate-one"></div>
        <div className="bg-pink-700 size-[26rem] rounded-full blur-[6rem] absolute ml-60 -mt-40 animate-two"></div>
        <div className="bg-orange-500 size-96 rounded-full blur-[6rem] absolute mt-20 animate-three"></div>
        <div
          ref={redRef}
          className="w-1 h-1 bg-background rounded-full z-20 opacity-0"
        />
        <div
          ref={contentRef}
          className="text-background max-w-[40rem] text-[2.75rem] sm:text-[5rem] text-center font-bitcount font-light tracking-tight leading-[4rem] sm:leading-[5rem] w-full px-4"
        >
          <div>Every pixel</div>
          <div>has a</div>
          <div>purpose.</div>
        </div>
        <div className="w-full text-text absolute bottom-0 flex items-center justify-center mb-16 sm:mb-5 font-nunito text-sm tracking-widest">
          <div className="flex items-center justify-center" onClick={() => { scrollDown(); console.log("clicked") }}>
            <p>Scroll For More</p>
            <ArrowDown width={14} className="-mt-0.5 ml-0.5" />
          </div>
        </div>
      </section>
    </>
  );
}
