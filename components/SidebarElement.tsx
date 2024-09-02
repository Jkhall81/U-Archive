import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  icon?: JSX.Element;
  className: string;
}

const SidebarElement = ({ title, icon, className }: Props) => {
  return (
    <TooltipProvider>
      <Link
        href={`/dashboard/${title.toLowerCase()}`}
        className={cn("w-full flex 3xl:pl-10", className)}
      >
        {icon && (
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="3xl:mr-4 text-3xl mx-2">{icon}</span>
            </TooltipTrigger>
            <TooltipContent className="bg-white dark:text-black" side="right">
              <p className="3xl:hidden">{title}</p>
            </TooltipContent>
          </Tooltip>
        )}
        <span className="3xl:block hidden">{title}</span>
      </Link>
    </TooltipProvider>
  );
};
export default SidebarElement;
