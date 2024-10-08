"use client";

import SidebarElement from "./SidebarElement";
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

const elements = [
  { title: "Demographics", icon: <BsClipboardDataFill /> },
  { title: "History", icon: <MdHistory /> },
  { title: "Medications", icon: <GiMedicines /> },
  { title: "Documents", icon: <IoIosDocument /> },
  { title: "Labs", icon: <LuTestTube /> },
  { title: "Procedures", icon: <FaProcedures /> },
  { title: "Visits", icon: <FaUserDoctor /> },
  { title: "Problems", icon: <GiHealthNormal /> },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-10 border-2 bg-neutral-300 dark:bg-transparent select-none border-black dark:border-white rounded-2xl text-2xl flex flex-col py-8 w-full">
      {elements.map((x, index) => {
        const isActive = pathname === `/dashboard/${x.title.toLowerCase()}`;
        return (
          <SidebarElement
            className={cn(isActive ? "text-blue-600" : "")}
            key={index}
            title={x.title}
            icon={x.icon}
          />
        );
      })}
    </div>
  );
};
export default Sidebar;
