"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import LinkButton from "../ui/Button/LinkButton";
import { Text } from "../ui/Text";
import { useRouter } from 'next/navigation';
import { useThemeStore } from "@/store/ThemeStore";
import Particles from "../ui/Particles";

gsap.registerPlugin(ScrollTrigger);

export default function Quotation() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const redRef = useRef(null);
  const theme = useThemeStore(state => state.theme);
  const [defaultColors, setDefaultColors] = useState(["#ffffff", "#ffffff", "#ffffff"]);

  useEffect(() => {
    console.log("demo");
    if (theme === "light") {
      setDefaultColors(["#191919", "#191919", "#191919"]);
    }
    else {
      setDefaultColors(["#ffffff", "#ffffff", "#ffffff"]);
    }
  }, [theme]);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const red = redRef.current;

    gsap.set(red, {
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      scale: 1,
      transformOrigin: "center center",
      opacity: 0, // reset opacity
      height: 1,  // reset size
      width: 1,
    });

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
      .to(red, { height: isMobile ? 1000 : 1800, width: isMobile ? 1000 : 1800, duration: 1, ease: "power3.inOut" }, "start+=0.2")
      .to(red, { opacity: 1, duration: 0.1 }, "start+=0.2");

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, [theme]);

  const scrollDown = () => {
    const el = document.getElementById("aboutSection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  const router = useRouter();
  const handleNavigate = () => {
    router.push("/my-work")
  }

  return (
    <>
      <div id="homeSection" className="w-full"></div>
      <section ref={sectionRef} className="h-dvh flex items-center justify-center flex-col relative overflow-hidden w-full will-change-transform">
        <div className="absolute w-screen h-screen z-[1]">
          <Particles
            particleColors={defaultColors}
            particleCount={150}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={70}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            cameraDistance={30}
          />
        </div>
        <div className="bg-cyan-400 size-80 rounded-full blur-[6rem] absolute -mt-20 -ml-[25rem] animate-one"></div>
        <div className="bg-[#D11C9F] size-[26rem] rounded-full blur-[6rem] absolute ml-60 -mt-40 animate-two"></div>
        <div className="bg-[#AC52F2] size-96 rounded-full blur-[6rem] absolute mt-20 animate-three"></div>
        <div
          ref={redRef}
          className="w-1 h-1 bg-background rounded-full z-[15] opacity-0 relative overflow-hidden flex items-center justify-center will-change-transform"
        >
          {/* This inner wrapper stays constant */}
          <div className="absolute flex items-center justify-center w-full max-w-[80rem]">
            <div className="h-dvh w-full relative flex items-center justify-center flex-col px-5 sm:px-8 md:px-10 bg-background">
              <div className="text-center">
                <Text data-aos="fade-up" className="text-xl sm:text-2xl md:text-3xl font-semibold text-text custom-transition">
                  Hi There!
                </Text>
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="font-poppins text-4xl md:text-5xl lg:text-[4rem] leading-10 md:leading-[4rem] w-max"
                >
                  <span className="text-2xl md:text-3xl lg:text-4xl">I'm</span>&nbsp;
                  <span className="bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent w-max font-semibold tracking-wider">
                    Hima&nbsp;Varsha
                  </span>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className={
                    "text-[1rem] sm:text-2xl tracking-[0.3rem] mt-2 font-nunito font-light"
                  }
                >
                  UI/UX Designer
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex items-center justify-center gap-5 mt-5 md:mt-10"
              >
                <LinkButton
                  target={"_blank"}
                  href={"/assets/profile/HimaVarsha.pdf"}
                  text={"Resume"}
                />
                <LinkButton
                  target={""}
                  onClick={handleNavigate}
                  text={"My work"}
                />
              </div>
              <div className='absolute bottom-0 flex items-center justify-center mb-16 sm:mb-5 font-nunito text-sm tracking-widest'>
                <div className="flex items-center justify-center">
                  <p>Scroll For More</p>
                  <ArrowDown width={14} className="-mt-0.5 ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={contentRef}
          className="text-background max-w-[40rem] text-[2.75rem] sm:text-[5rem] text-center font-bitcount font-light tracking-tight leading-[4rem] sm:leading-[5rem] w-full px-4"
        >
          <div>Every pixel</div>
          <div>has a</div>
          <div>purpose.</div>
        </div>
        <div className="w-full text-text absolute bottom-0 flex items-center justify-center mb-16 sm:mb-5 font-nunito text-sm tracking-widest">
          <div className="flex items-center justify-center">
            <p>Scroll For More</p>
            <ArrowDown width={14} className="-mt-0.5 ml-0.5" />
          </div>
        </div>
      </section>
    </>
  );
}
