import SidebarElement from "./SidebarElement";

const elements = [
  "Demographics",
  "History",
  "Medications",
  "Documents",
  "Labs",
  "Procedures",
  "Visits",
  "Problems",
];

const Sidebar = () => {
  return (
    <div className="space-y-6 h-full text-2xl flex flex-col pt-[200px] min-h-screen w-full">
      {elements.map((x, index) => {
        return <SidebarElement key={index} title={x} />;
      })}
    </div>
  );
};
export default Sidebar;
