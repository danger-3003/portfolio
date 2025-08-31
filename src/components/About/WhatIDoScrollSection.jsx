"use client";

import React, { useRef, useEffect, useState } from "react";
import { WhatIDoCardInfo } from "@/constants/WhatIDo";
import { useThemeStore } from "@/store/ThemeStore";
import { Heading, Text } from "../ui/Text";

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

      // 🔑 compute which card is active
      const index = Math.min(
        Math.floor(newScrollValue / 100),
        WhatIDoCardInfo.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300vh] flex items-start justify-start flex-col"
    >
      <div className="w-full sticky top-0 h-screen z-[5] flex items-center justify-center pointer-events-none">
        {/* Center Content */}
        <div className="sticky top-0 z-20 grid grid-cols-1 lg:grid-cols-3 gap-6 text-white">
          {/* Left Title */}
          <div className="flex items-center justify-center flex-col text-center md:text-left">
            <Heading className="text-3xl md:text-4xl lg:text-5xl">{WhatIDoCardInfo[activeIndex].title}</Heading>
          </div>
          {/* Circle */}
          <div className="flex items-center justify-center">
            <div className="border border-white size-72 md:size-80 xl:size-96 rounded-full flex items-center justify-center relative">
              <Text className="absolute top-5 md:top-7 text-xl md:text-2xl">What I Do?</Text>
              <Text className="absolute bottom-5 md:bottom-7 text-base">scroll</Text>
              {WhatIDoCardInfo.map((item, key) => {
                const cardStart = key * 100;
                const cardEnd = (key + 1) * 100;

                let clipCirclePercent = 0;

                if (key === 0) {
                  clipCirclePercent = 100; // First card fully visible
                } else if (scrollValue >= cardStart && scrollValue <= cardEnd) {
                  clipCirclePercent = ((scrollValue - cardStart) / 100) * 100; // percent 0 to 100
                } else if (scrollValue > cardEnd) {
                  clipCirclePercent = 100;
                }

                return (
                  <div
                    key={key}
                    className="absolute rounded-full overflow-hidden bg-transparent size-40 md:size-48 xl:size-52"
                    style={{
                      clipPath: `circle(${clipCirclePercent}% at 50% 50%)`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute rounded-full size-40 md:size-48 xl:size-52"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right Description */}
          <div className="flex items-center justify-center flex-col text-center md:text-left max-w-md">
            <Text className="text-base px-5">{WhatIDoCardInfo[activeIndex].description}</Text>
          </div>
        </div>

        {/* Background Images */}
        {WhatIDoCardInfo.map((item, key) => {
          const cardStart = key * 100;
          const cardEnd = (key + 1) * 100;

          let cardProgress = 0;

          if (key === 0) {
            cardProgress = 100; // First card always full
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
