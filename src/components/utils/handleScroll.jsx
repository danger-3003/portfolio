"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export function useScrollOrNavigate() {
  const router = useRouter();
  const pathname = usePathname();

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

  // handle scroll after navigating to "/"
  useEffect(() => {
    if (pathname === "/") {
      const scrollToId = sessionStorage.getItem("scrollToId");
      if (scrollToId) {
        sessionStorage.removeItem("scrollToId");
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [pathname]);

  return scrollOrNavigate;
}
