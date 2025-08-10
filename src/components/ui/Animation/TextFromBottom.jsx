"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // 1️⃣ Lenis setup for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2️⃣ GSAP animation
    let ctx = gsap.context(() => {
      gsap.set(".wrapper", { perspective: 1000 });

      // Intro falls back with 3D depth
      gsap.to(".intro", {
        scale: 0.9,
        yPercent: -10,
        z: -250,
        rotationX: 5,
        opacity: 0.7,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content slides up
      gsap.from(".content", {
        yPercent: 100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="wrapper relative">
      {/* Intro Section */}
      <section className="intro fixed top-0 left-0 w-full h-screen bg-indigo-500 flex items-center justify-center text-white text-5xl font-bold z-20">
        Intro Screen
      </section>

      {/* Content Section */}
      <section className="content relative z-30 bg-white min-h-[200vh] text-black">
        <div className="h-screen flex items-center justify-center text-3xl font-semibold shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          Card 1
        </div>
        <div className="h-screen flex items-center justify-center text-3xl font-semibold shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          Card 2
        </div>
      </section>
    </main>
  );
}
