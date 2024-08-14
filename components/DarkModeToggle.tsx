"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const DarkModeToggle = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") === "dark"
      : false
  );

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    console.log(darkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (pathname === "/") {
      setDarkMode(true);
    }

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode, pathname]);

  const iconSize = 25;
  return (
    <>
      <div
        className="bg-transparent text-black dark:text-white cursor-pointer"
        onClick={toggleTheme}
      >
        {darkMode ? (
          <IoMoonSharp size={iconSize} />
        ) : (
          <IoSunnySharp size={iconSize} />
        )}
      </div>
    </>
  );
};
export default DarkModeToggle;
