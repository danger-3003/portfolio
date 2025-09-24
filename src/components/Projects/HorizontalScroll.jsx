"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const updateAnimation = () => {
        // Kill existing triggers before re-initializing
        ScrollTrigger.getAll().forEach((t) => t.kill());

        const totalWidth = sectionRef.current.scrollWidth;
        const windowWidth = window.innerWidth;

        gsap.to(sectionRef.current, {
          x: -(totalWidth - windowWidth),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => "+=" + (totalWidth - windowWidth), // scroll distance matches width
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      };

      updateAnimation();
      window.addEventListener("resize", updateAnimation);

      return () => {
        window.removeEventListener("resize", updateAnimation);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="overflow-hidden hidden md:block">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-dvh flex relative will-change-transform"
          >
            <div className="h-dvh flex justify-center items-center bg-red-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
              <h3>Section 1</h3>
            </div>
            <div className="h-dvh flex justify-center items-center bg-green-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
              <h3>Section 2</h3>
            </div>
            <div className="h-dvh flex justify-center items-center bg-blue-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
              <h3>Section 3</h3>
            </div>
            <div className="h-dvh flex justify-center items-center bg-yellow-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
              <h3>Section 4</h3>
            </div>
            <div className="h-dvh flex justify-center items-center bg-orange-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
              <h3>Section 5</h3>
            </div>
            <div className="h-dvh flex justify-center items-center bg-pink-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
              <h3>Section 6</h3>
            </div>
            <div className="h-dvh flex justify-center items-center bg-cyan-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
              <h3>Section 7</h3>
            </div>
            <div className="h-dvh flex justify-center items-center bg-fuchsia-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
              <h3>Section 8</h3>
            </div>
          </div>
        </div>
      </section>
      <div
        className="flex flex-col relative will-change-transform md:hidden"
      >
        <div className="h-dvh flex justify-center items-center bg-red-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
          <h3>Section 1</h3>
        </div>
        <div className="h-dvh flex justify-center items-center bg-green-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
          <h3>Section 2</h3>
        </div>
        <div className="h-dvh flex justify-center items-center bg-blue-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
          <h3>Section 3</h3>
        </div>
        <div className="h-dvh flex justify-center items-center bg-yellow-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
          <h3>Section 4</h3>
        </div>
        <div className="h-dvh flex justify-center items-center bg-orange-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
          <h3>Section 5</h3>
        </div>
        <div className="h-dvh flex justify-center items-center bg-pink-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
          <h3>Section 6</h3>
        </div>
        <div className="h-dvh flex justify-center items-center bg-cyan-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
          <h3>Section 7</h3>
        </div>
        <div className="h-dvh flex justify-center items-center bg-fuchsia-200 flex-shrink-0 w-screen md:w-1/2 lg:w-1/3">
          <h3>Section 8</h3>
        </div>
      </div>
    </>
  );
}

export default HorizontalScroll;
