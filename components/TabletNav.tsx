"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BsClipboardDataFill } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { IoIosDocument } from "react-icons/io";
import { LuTestTube } from "react-icons/lu";
import { FaProcedures } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import DarkModeToggle from "./DarkModeToggle";

const elements = [
  {
    title: "Demographics",
    href: "/dashboard/demographics",
    icon: <BsClipboardDataFill />,
  },
  { title: "History", href: "/dashboard/history", icon: <MdHistory /> },
  {
    title: "Medications",
    href: "/dashboard/medications",
    icon: <GiMedicines />,
  },
  { title: "Documents", href: "/dashboard/documents", icon: <IoIosDocument /> },
  { title: "Labs", href: "/dashboard/labs", icon: <LuTestTube /> },
  {
    title: "Procedures",
    href: "/dashboard/procedures",
    icon: <FaProcedures />,
  },
  { title: "Visits", href: "/dashboard/visits", icon: <FaUserDoctor /> },
  { title: "Problems", href: "/dashboard/problems", icon: <GiHealthNormal /> },
];

export const TabletNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  return (
    <section className="w-full h-full flex-col">
      <div className="tablet:hidden cursor-pointer flex justify-between">
        <GiHamburgerMenu onClick={handleModal} className="m-4" size={60} />
        <Link className="text-3xl mt-4 font-semibold" href="/">
          Home
        </Link>
        <DarkModeToggle styles="m-4" size={45} />
      </div>
      <aside
        className={cn(
          "space-y-10 border-2 tablet:translate-x-[-700px] bg-neutral-300 dark:bg-transparent select-none border-black dark:border-white rounded-2xl text-2xl flex flex-col py-8 w-full",
          isOpen ? "" : "hidden"
        )}
      >
        {elements.map((x, index) => {
          const isActive = pathname === `/dashboard/${x.title.toLowerCase()}`;
          return (
            <main key={index} className="flex justify-center">
              <div
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-start w-[200px] tablet:w-0" // Adjust width as necessary
              >
                <span className="text-4xl mr-4">{x.icon}</span>
                <Link
                  className={cn(isActive ? "text-blue-500" : "", "text-center")}
                  href={x.href}
                >
                  {x.title}
                </Link>
              </div>
            </main>
          );
        })}
      </aside>
    </section>
  );
};
