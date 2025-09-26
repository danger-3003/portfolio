"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projectPageInfo, ProjectsInfo } from "@/constants/Projects";
import { Heading } from "../ui/Text";
import BlurText from "../ui/Animation/Texts/BlurText";
import { ArrowRight, ArrowDown } from "lucide-react";
import ProjectSection from "./ProjectSection";

function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const updateAnimation = () => {
        // Kill existing triggers before re-initializing
        ScrollTrigger.getAll().forEach((t) => t.kill());

        const totalWidth = sectionRef.current?.scrollWidth || 0;
        const windowWidth = window.innerWidth;

        if (windowWidth >= 1024) {
          // Apply horizontal scroll only for lg+
          gsap.to(sectionRef.current, {
            x: -(totalWidth - windowWidth),
            ease: "none",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: () => "+=" + (totalWidth - windowWidth),
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        } else {
          // Reset any transform for small screens (vertical scroll)
          gsap.set(sectionRef.current, { clearProps: "all" });
        }
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

  const handleAnimationComplete = () => null;

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="flex relative will-change-transform flex-col lg:flex-row"
        >
          {/* Hero + Sections */}
          <div className=" lg:h-dvh lg:flex-shrink-0 w-screen flex items-start justify-start flex-col lg:grid grid-cols-5 lg:gap-16">
            <div
              className="h-screen max-h-max md:max-h-[30rem] lg:max-h-screen w-full col-span-2"
              style={{
                background: `url(/assets/projects/HeroBg.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-gradient-to-br from-black/70 to-black/50 h-full w-full flex items-center justify-center px-5 sm:px-8 md:px-10 py-40">
                <h1 className="font-nunito font-semibold text-3xl md:text-4xl lg:text-5xl text-white pt-16">
                  My Works
                </h1>
              </div>
            </div>
            <div className="h-screen max-h-max lg:max-h-screen w-full col-span-3 px-5 sm:px-8 md:px-10 py-7 flex flex-col justify-between">
              <div className="pt-16 pb-5 lg:py-16 flex flex-col gap-5 lg:gap-10">
                <Heading className="text-3xl md:text-4xl lg:text-5xl">
                  <BlurText
                    text={projectPageInfo.heading}
                    delay={50}
                    animateBy="words"
                    direction="bottom"
                    onAnimationComplete={handleAnimationComplete}
                    className=" leading-[3rem] lg:leading-[4rem]"
                  />
                </Heading>
                <BlurText
                  text={projectPageInfo.description}
                  delay={30}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-sm sm:text-base font-nunito font-light"
                />
              </div>
              <div className="flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-between w-full">
                <div>
                  <div
                    className="flex lg:hidden items-center"
                  >
                    <p>Scroll For More</p>
                    <ArrowDown width={14} className="ml-1 mt-0.5" />
                  </div>
                  <div className="items-center hidden lg:flex">
                    <p>Scroll For More</p>
                    <ArrowRight width={14} className="ml-1 mt-0.5" />
                  </div>
                </div>
                <div className="w-full lg:w-auto mb-12 lg:mb-0">
                  <div className='flex justify-center sm:justify-end items-start lg:justify-start w-full lg:w-auto'>
                    <a href={"/"} className='flex items-center justify-center group/button-group gap-2 bg-text text-background cursor-pointer text-[13px] font-nunito rounded-md px-3 pb-[2px] pt-[2.5px]'>
                      Connect
                      <ArrowRight width={14} className='group-hover/button-group:rotate-0 -rotate-45 duration-300' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            ProjectsInfo.map((item, key) => (
              <div key={key} className="h-screen max-h-[90vh] md:max-h-[35rem] lg:max-h-screen lg:h-dvh flex justify-center items-center lg:flex-shrink-0 w-screen lg:w-1/3">
                <ProjectSection
                  index={key}
                  projectItem={item}
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default HorizontalScroll;
