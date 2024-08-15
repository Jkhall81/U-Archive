"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "w-full h-[140px] bg-transparent absolute flex max-2xl:hidden",
        `${pathname === "/" ? "text-white" : ""}`
      )}
    >
      <div className="h-[90%] w-[33%] bg-transparent  flex justify-between items-center px-6 text-2xl font-semibold">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about-us">About Us</Link>
      </div>
      <div className="h-full w-[33%]"></div>
      <div className="h-[90%] w-[33%] bg-transparent flex justify-between items-center px-6 text-2xl font-semibold">
        <Link href="/sign-in">Sign in</Link>
        {pathname !== "/" ? <DarkModeToggle /> : ""}
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
};
