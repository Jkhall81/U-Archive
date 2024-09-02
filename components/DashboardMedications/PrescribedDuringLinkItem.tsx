import { VerticalDivider } from "../VerticalDivider";
import { cn } from "@/lib/utils";

interface Props {
  index: number;
  type: string;
  data: any;
  onClick: () => void;
  isSelected: boolean;
}

export const PrescribedDuringLinkItem = ({
  index,
  onClick,
  isSelected,
  type,
  data,
}: Props) => {
  return (
    <section
      onClick={onClick}
      className={cn(
        "flex justify-center select-none space-x-4 border border-black dark:bg-neutral-800 bg-neutral-300 dark:border-white m-4 rounded-3xl text-xl cursor-pointer py-6 pl-6 hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600",
        `${
          isSelected ? "text-blue-500 border-blue-500 dark:border-blue-500" : ""
        }`
      )}
    >
      <div className="w-4 flex items-center">
        <p>{index + 1}</p>
      </div>
      <VerticalDivider />

      {/* Centered Content */}
      <div className="flex items-center flex-1 pr-2">
        <div className="flex items-center">
          <div className="flex">
            <span className="mr-4 text-blue-500">Related Event:</span>
            <p>{type}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
