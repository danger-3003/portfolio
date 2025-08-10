'use client';

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function useNavbarUrls() {
  const router = useRouter();
  const pathname = usePathname();

  // Scroll to section if coming from another page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const targetId = sessionStorage.getItem("scrollToId");
      if (targetId && pathname === "/") {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollToId");
      }
    }
  }, [pathname]);

  const scrollOrNavigate = (id) => {
    if (typeof window === "undefined") return;

    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
