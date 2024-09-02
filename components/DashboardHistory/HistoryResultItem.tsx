import { cn } from "@/lib/utils";
import { VerticalDivider } from "../VerticalDivider";

interface Props {
  item: string;
  index: number;
  date: string;
  onClick: () => void;
  isSelected: boolean;
}

export const HistoryResultItem = ({
  item,
  index,
  date,
  onClick,
  isSelected,
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
      <div className="w-[5%] flex items-center">
        <p>{index + 1}</p>
      </div>
      <VerticalDivider />

      <div className="flex-1 flex items-center pr-2">
        <div className="flex-col items-center">
          <div className="flex">
            <span className="mr-4 text-blue-500">Item:</span>
            <p>{item.length > 18 ? item.slice(0, 19) + "..." : item}</p>
          </div>
          <div className="flex">
            <span className="mr-4 text-blue-500">Date:</span>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
