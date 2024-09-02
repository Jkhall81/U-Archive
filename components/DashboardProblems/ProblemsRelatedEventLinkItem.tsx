import { VerticalDivider } from "../VerticalDivider";
import { cn } from "@/lib/utils";

interface Props {
  index: number;
  type: string;
  data: any;
  onClick: () => void;
  isSelected: boolean;
}

export const ProblemsRelatedEventLinkItem = ({
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
        "flex justify-center select-none 3xl:space-x-4 space-x-2 border-2 border-black dark:bg-neutral-800 bg-neutral-300 dark:border-white 3xl:m-4 my-4 mx-2 rounded-3xl 3xl:text-xl cursor-pointer py-6 3xl:pl-6 pl-3 hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600",
        `${
          isSelected
            ? "text-blue-500 border-blue-500 dark:bg-neutral-700 dark:border-blue-500 bg-neutral-200"
            : ""
        }`
      )}
    >
      <div className="3xl:w-4 flex items-center">
        <p>{index + 1}</p>
      </div>
      <VerticalDivider />

      {/* Centered Content */}
      <div className="flex flex-1 pr-1">
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
