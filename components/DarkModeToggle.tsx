"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LuSun } from "react-icons/lu";
import { IoMoonSharp } from "react-icons/io5";

const DarkModeToggle = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState<null | boolean>(null);

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    } else if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, [pathname]);

  useEffect(() => {
    console.log(darkMode);
    if (darkMode !== null) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");

      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  const iconSize = 25;
  return (
    <div
      className="text-black dark:text-white cursor-pointer"
      onClick={toggleTheme}
    >
      {darkMode ? <IoMoonSharp size={iconSize} /> : <LuSun size={iconSize} />}
    </div>
  );
};
export default DarkModeToggle;
