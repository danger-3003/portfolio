"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Quotation() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    gsap.set(section, { transformOrigin: "center center" });
    gsap.set(content, { transformOrigin: "49.5% center" });

    // Zoom to single letter scale on scroll
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=500%",
        scrub: true,
        pin: true,
      },
    })
      .to({}, { duration: 0.1 })
      .to(content, {
        scale: 250,
        ease: "power3.inOut",
      })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center relative overflow-hidden w-full"
    >
      {/* Blobs - colors unchanged */}
      <div className="bg-violet-400 size-80 rounded-full blur-[6rem] absolute -mt-20 -ml-[25rem] animate-one"></div>
      <div className="bg-pink-700 size-[26rem] rounded-full blur-[6rem] absolute ml-60 -mt-40 animate-two"></div>
      <div className="bg-orange-500 size-96 rounded-full blur-[6rem] absolute mt-20 animate-three"></div>

      {/* Content - text unchanged */}
      <div
        ref={contentRef}
        className="text-background max-w-[40rem] text-[3rem] sm:text-[5rem] text-center font-bitcount font-light tracking-tight leading-[4rem] sm:leading-[5rem] w-full"
      >
        Every pixel has a purpose.
      </div>
    </section>
  );
}

export default Quotation;
