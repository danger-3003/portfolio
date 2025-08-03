import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set, get) => {
      // Apply theme on store creation
      const applyTheme = (theme) => {
        document.documentElement.classList.toggle("dark", theme === "dark");
      };

      return {
        theme: undefined,
        setTheme: () => {
          const current = get().theme;
          const newTheme = current === "light" ? "dark" : "light";
          applyTheme(newTheme);
          set({ theme: newTheme });
        },
        initializeTheme: () => {
          const savedTheme = get().theme;
          applyTheme(savedTheme);
        },
      };
    },
    {
      name: "theme-storage",
    }
  )
);
