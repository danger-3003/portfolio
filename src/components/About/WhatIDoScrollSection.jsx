"use client";

import React, { useRef, useEffect, useState } from "react";
import { WhatIDoCardInfo } from "@/constants/WhatIDo";
import { useThemeStore } from "@/store/ThemeStore";
import { Heading, Text } from "../ui/Text";
import BlurText from "../ui/Animation/Texts/BlurText";
import { ArrowDown } from "lucide-react";

// Helper for SVG dash positions
function getDashCoords(center, radius, angleDeg, dashLength) {
  const angleRad = (Math.PI / 180) * angleDeg;
  const x1 = center + radius * Math.cos(angleRad);
  const y1 = center + radius * Math.sin(angleRad);
  const x2 = center + (radius - dashLength) * Math.cos(angleRad);
  const y2 = center + (radius - dashLength) * Math.sin(angleRad);
  return { x1, y1, x2, y2 };
}

function WhatIDoScrollSection() {
  const theme = useThemeStore((state) => state.theme);
  const containerRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sectionTop = containerRef.current.offsetTop;
      const sectionHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const totalScreens = WhatIDoCardInfo.length;
      const totalProgressRange = totalScreens * 100;
      const effectiveHeight = sectionHeight - viewportHeight;

      let newScrollValue = 0;
      if (scrollY >= sectionTop && scrollY <= sectionTop + effectiveHeight) {
        const rawProgress = (scrollY - sectionTop) / effectiveHeight;
        newScrollValue = rawProgress * totalProgressRange;
      } else if (scrollY < sectionTop) {
        newScrollValue = 0;
      } else if (scrollY > sectionTop + effectiveHeight) {
        newScrollValue = totalProgressRange;
      }

      setScrollValue(newScrollValue);

      const index = Math.min(
        Math.floor(newScrollValue / 100),
        WhatIDoCardInfo.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SVG Progress Border Setup
  const SIZE = window.innerWidth > 1280 ? 96 * 4 : window.innerWidth > 768 ? 84 * 4 : 76 * 4;
  const STROKE = 1.5; // px stroke width
  const RADIUS = (SIZE - STROKE) / 2;
  const CIRCUM = 2 * Math.PI * RADIUS;
  const dashLength = 14; // px, dash size

  const dashPositions = [-90, 150, 30]; // Top, left, right (degrees)

  const totalProgressRange = WhatIDoCardInfo.length * 100;
  let progressRatio = scrollValue / totalProgressRange;
  progressRatio = Math.min(Math.max(progressRatio, 0), 1);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300vh] flex items-start justify-start flex-col"
    >
      <div className="w-full sticky top-0 h-screen z-[5] flex items-center justify-center pointer-events-none">
        {/* Center Content */}
        <div className="sticky h-screen top-0 z-20 flex items-center justify-center flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-10 text-white isolate">
          {/* Left Title */}
          <div className="flex items-center justify-end lg:items-center lg:justify-center flex-col text-center md:text-left">
            <Heading className="text-3xl md:text-4xl lg:text-5xl">
              <BlurText
                activeIndex={activeIndex}
                text={WhatIDoCardInfo[activeIndex].title}
                delay={50}
                animateBy="words"
                direction="bottom"
                onAnimationComplete={handleAnimationComplete}
                className=""
              />
            </Heading>
          </div>
          {/* Circle with Progress Border and Dashes */}
          <div className="flex items-center justify-center w-full h-72 md:h-80 lg:h-screen">
            <div className="size-72 md:size-80 xl:size-96 rounded-full flex items-center justify-center relative">
              <Text className="absolute top-5 md:top-6 lg:top-7 text-xl md:text-2xl">
                What I Do?
              </Text>
              <div className="absolute bottom-5 lg:bottom-7">
                <ArrowDown />
              </div>
              {/* SVG Progress + Dashes */}
              <svg
                width={SIZE}
                height={SIZE}
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                {/* Progress Circle */}
                <circle
                  cx={SIZE / 2}
                  cy={SIZE / 2}
                  r={RADIUS}
                  stroke="grey"
                  strokeWidth={STROKE}
                  fill="none"
                  strokeDasharray={`6 6`}  // dash length 6px, gap 6px
                  strokeDashoffset={CIRCUM - CIRCUM * progressRatio}
                  strokeLinecap="round"
                  style={{
                    transition: "stroke-dashoffset",
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%",
                  }}
                />
                <circle
                  cx={SIZE / 2}
                  cy={SIZE / 2}
                  r={RADIUS}
                  stroke="white"
                  strokeWidth={STROKE}
                  fill="none"
                  strokeDasharray={CIRCUM}
                  strokeDashoffset={CIRCUM - CIRCUM * progressRatio}
                  strokeLinecap="round"
                  style={{
                    transition: "stroke-dashoffset",
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%",
                  }}
                />
                {dashPositions.map((angle, idx) => {
                  const { x1, y1, x2, y2 } = getDashCoords(SIZE / 2, RADIUS, angle, dashLength);
                  return (
                    <line
                      key={idx}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="grey"
                      strokeWidth={1}
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
              {/* Masked Images */}
              {WhatIDoCardInfo.map((item, key) => {
                const cardStart = key * 100;
                const cardEnd = (key + 1) * 100;
                let clipCirclePercent = 0;

                if (key === 0) {
                  clipCirclePercent = 100;
                } else if (scrollValue >= cardStart && scrollValue <= cardEnd) {
                  clipCirclePercent = ((scrollValue - cardStart) / 100) * 100;
                } else if (scrollValue > cardEnd) {
                  clipCirclePercent = 100;
                }

                return (
                  <div
                    key={key}
                    className="absolute rounded-full overflow-hidden bg-transparent size-40 md:size-48 lg:size-52 xl:size-56"
                    style={{
                      clipPath: `circle(${clipCirclePercent}% at 50% 50%)`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute rounded-full size-40 md:size-48 xl:size-52"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right Description */}
          <div className="flex items-center justify-start lg:items-center lg:justify-center flex-col text-center lg:text-left max-w-md">
            <BlurText
              activeIndex={activeIndex}
              text={WhatIDoCardInfo[activeIndex].description}
              delay={5}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-base px-5 text-center lg:text-left font-nunito font-light"
            />
          </div>
        </div>

        {/* Background Images */}
        {WhatIDoCardInfo.map((item, key) => {
          const cardStart = key * 100;
          const cardEnd = (key + 1) * 100;
          let cardProgress = 0;

          if (key === 0) {
            cardProgress = 100;
          } else if (scrollValue >= cardStart && scrollValue <= cardEnd) {
            cardProgress = scrollValue - cardStart;
          } else if (scrollValue > cardEnd) {
            cardProgress = 100;
          }

          return (
            <div
              key={key}
              className="w-full absolute bottom-0 overflow-hidden"
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
                height: `${cardProgress}%`,
                backgroundAttachment: "fixed",
              }}
            >
              <div className="h-full w-full bg-black/70" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhatIDoScrollSection;
