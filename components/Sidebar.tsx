import SidebarElement from "./SidebarElement";
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
  return (
    <div className="space-y-10 h-full text-2xl flex flex-col pt-[200px] min-h-screen w-full">
      {elements.map((x, index) => {
        return <SidebarElement key={index} title={x.title} icon={x.icon} />;
      })}
    </div>
  );
};
export default Sidebar;
