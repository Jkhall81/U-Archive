import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  icon?: JSX.Element;
  className: string;
}

const SidebarElement = ({ title, icon, className }: Props) => {
  return (
    <Link
      href={`/dashboard/${title.toLowerCase()}`}
      className={cn("w-full flex pl-10", className)}
    >
      {icon && <span className="mr-4 text-3xl">{icon}</span>}
      {title}
    </Link>
  );
};
export default SidebarElement;
