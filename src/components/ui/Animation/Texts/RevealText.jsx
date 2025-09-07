'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export default function RevealText({
  children,
  bgColor = '',
  fgColor = '',
  className = '',
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType(textRef.current, { types: 'words' });

    gsap.fromTo(
      split.words,
      { color: bgColor },
      {
        color: fgColor,
        duration: 0.3,
        stagger: 0.08,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          end: 'top 20%',
          scrub: true,
          toggleActions: 'play play reverse reverse',
        },
      }
    );

    return () => {
      // Cleanup on unmount
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [bgColor, fgColor]);

  return (
    <p
      ref={textRef}
      className={`${className}`}
      data-bg-color={bgColor}
      data-fg-color={fgColor}
    >
      {children}
    </p>
  );
}
