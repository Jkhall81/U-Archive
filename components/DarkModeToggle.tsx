"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LuSun } from "react-icons/lu";
import { IoMoonSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";

interface Props {
  styles: string;
  size?: number;
}

const DarkModeToggle = ({ styles, size }: Props) => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState<null | boolean>(null);

  // Effect to apply the saved theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // If no saved theme, use a default theme (you can remove this line if not needed)
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(isDarkMode);
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  }, [pathname]);

  // Effect to save the theme in localStorage
  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const iconSize = size ? size : 25;
  return (
    <div
      className={cn("text-black dark:text-white cursor-pointer", styles)}
      onClick={toggleTheme}
    >
      {darkMode ? <IoMoonSharp size={iconSize} /> : <LuSun size={iconSize} />}
    </div>
  );
};

export default DarkModeToggle;
