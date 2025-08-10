'use client';

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function useNavbarUrls() {
  const router = useRouter();
  const pathname = usePathname();

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

  const scrollOrNavigate = (id) => {
    if (typeof window === "undefined") return;

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with id '${id}' not found on home page.`);
      }
    } else {
      sessionStorage.setItem("scrollToId", id);
      router.push("/");
    }
  };

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
      click: () => scrollOrNavigate("connectSection"),
    }
  ];

  return urls;
}