"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export function useScrollOrNavigate() {
  const router = useRouter();
  const pathname = usePathname();

  // Function to scroll or navigate
  const scrollOrNavigate = (id) => {
    if (typeof window === "undefined") return;

    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToId", id);
      router.push("/");
    }
  };

  // Handle scroll after navigating to "/"
  useEffect(() => {
    if (typeof window === "undefined") return;

    const targetId = sessionStorage.getItem("scrollToId");
    if (targetId && pathname === "/") {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollToId");
      }, 1200);
    }
  }, [pathname]);

  return scrollOrNavigate;
}
