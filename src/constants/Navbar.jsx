'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScrollOrNavigate } from "@/components/utils/handleScroll";

export function useNavbarUrls() {
  const pathname = usePathname();
  const scrollOrNavigate = useScrollOrNavigate();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const targetId = sessionStorage.getItem("scrollToId");
    if (targetId && pathname === "/") {
      let attempts = 0;
      const maxAttempts = 20;

      const tryScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollToId");
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 100);
        } else {
          sessionStorage.removeItem("scrollToId");
          console.warn(`Element with id '${targetId}' not found for scrolling.`);
        }
      };
      setTimeout(tryScroll, 100);
    }
  }, [pathname]);



  const urls = [
    {
      title: "Home",
      click: () => scrollOrNavigate("homeSection"),
    },
    {
      title: "About",
      click: () => scrollOrNavigate("aboutSection"),
    },
    {
      title: "My work",
      click: () => window.open("/my-work", "_self", "noopener,noreferrer"),
    },
    {
      title: "Connect",
      click: () => window.open("/connect", "_self", "noopener,noreferrer"),
    }
  ];

  return urls;
}