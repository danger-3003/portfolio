"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectPageInfo } from "@/constants/Projects";
import { Heading, Text } from "../ui/Text";
import BlurText from "../ui/Animation/Texts/BlurText";

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

  const handleAnimationComplete = () => {
    null;
  }

  return (
    <>
      <section className="overflow-hidden hidden lg:block">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-dvh flex relative will-change-transform"
          >
            <div className="h-screen max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh w-screen flex-shrink-0 grid grid-cols-5 gap-16">
              <div
                className="h-full w-full col-span-2"
                style={{
                  background: `url(/assets/projects/HeroBg.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",

                }}
              >
                <div className="bg-gradient-to-br from-black/70 to-black/50 h-full w-full flex items-center justify-center">
                  <h1 className="font-nunito font-semibold pointer-events-none text-3xl md:text-4xl lg:text-5xl text-white">
                    My Works
                  </h1>
                </div>
              </div>
              <div className="h-full w-full col-span-3 px-5 sm:px-8 md:px-10 py-7">
                <div className="pt-16 flex items-start justify-start gap-10 flex-col">
                  <Heading className="text-3xl md:text-4xl lg:text-5xl">
                    <BlurText
                      text={projectPageInfo.heading}
                      delay={50}
                      animateBy="words"
                      direction="bottom"
                      onAnimationComplete={handleAnimationComplete}
                      className="leading-[4rem]"
                    />
                  </Heading>
                  <div className="">
                    <BlurText
                      text={projectPageInfo.description}
                      delay={30}
                      animateBy="words"
                      direction="bottom"
                      onAnimationComplete={handleAnimationComplete}
                      className="text-sm sm:text-base font-nunito font-light pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-red-200 flex-shrink-0 w-screen lg:w-1/3">
              <h3>Section 1</h3>
            </div>
            <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-green-200 flex-shrink-0 w-screen lg:w-1/3">
              <h3>Section 2</h3>
            </div>
            <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-blue-200 flex-shrink-0 w-screen lg:w-1/3">
              <h3>Section 3</h3>
            </div>
            <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-yellow-200 flex-shrink-0 w-screen lg:w-1/3">
              <h3>Section 4</h3>
            </div>
            <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-orange-200 flex-shrink-0 w-screen lg:w-1/3">
              <h3>Section 5</h3>
            </div>
            <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-pink-200 flex-shrink-0 w-screen lg:w-1/3">
              <h3>Section 6</h3>
            </div>
            <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-cyan-200 flex-shrink-0 w-screen lg:w-1/3">
              <h3>Section 7</h3>
            </div>
            <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-fuchsia-200 flex-shrink-0 w-screen lg:w-1/3">
              <h3>Section 8</h3>
            </div>
          </div>
        </div>
      </section>
      <div
        className="flex flex-col relative will-change-transform lg:hidden"
      >
        <div className="h-max max-h-max lg:max-h-screen lg:h-dvh w-screen flex-shrink-0 grid grid-cols-1">
          <div
            className="h-screen max-h-[30rem] w-full col-span-1"
            style={{
              background: `url(/assets/projects/HeroBg.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",

            }}
          >
            <div className="bg-gradient-to-br from-black/70 to-black/50 h-full w-full flex items-center justify-center pt-16">
              <h1 className="font-nunito font-semibold pointer-events-none text-3xl md:text-4xl lg:text-5xl text-white">
                My Works
              </h1>
            </div>
          </div>
          <div className="h-max w-full col-span-1 px-5 sm:px-8 md:px-10 py-16">
            <div className="flex items-start justify-start gap-7 flex-col">
              <Heading className="text-3xl md:text-4xl lg:text-5xl">
                <BlurText
                  text={projectPageInfo.heading}
                  delay={50}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={handleAnimationComplete}
                  className="leading-[2.5rem] md:leading-[3rem]"
                />
              </Heading>
              <div className="">
                <BlurText
                  text={projectPageInfo.description}
                  delay={30}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-sm sm:text-base font-nunito font-light pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-red-200 flex-shrink-0 w-screen lg:w-1/3">
          <h3>Section 1</h3>
        </div>
        <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-green-200 flex-shrink-0 w-screen lg:w-1/3">
          <h3>Section 2</h3>
        </div>
        <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-blue-200 flex-shrink-0 w-screen lg:w-1/3">
          <h3>Section 3</h3>
        </div>
        <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-yellow-200 flex-shrink-0 w-screen lg:w-1/3">
          <h3>Section 4</h3>
        </div>
        <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-orange-200 flex-shrink-0 w-screen lg:w-1/3">
          <h3>Section 5</h3>
        </div>
        <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-pink-200 flex-shrink-0 w-screen lg:w-1/3">
          <h3>Section 6</h3>
        </div>
        <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-cyan-200 flex-shrink-0 w-screen lg:w-1/3">
          <h3>Section 7</h3>
        </div>
        <div className="h-screen px-5 sm:px-8 md:px-10 py-24 max-h-max md:max-h-[30rem] lg:max-h-screen lg:h-dvh flex justify-center items-center bg-fuchsia-200 flex-shrink-0 w-screen lg:w-1/3">
          <h3>Section 8</h3>
        </div>
      </div>
    </>
  );
}

export default HorizontalScroll;
