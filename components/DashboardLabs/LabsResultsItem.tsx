import { VerticalDivider } from "../VerticalDivider";
import { cn } from "@/lib/utils";

interface Props {
  testName: string;
  index: number;
  onClick: () => void;
  isSelected: boolean;
}

export const LabsResultsItem = ({
  index,
  testName,
  onClick,
  isSelected,
}: Props) => {
  return (
    <section
      onClick={onClick}
      className={cn(
        "flex justify-center space-x-4 border border-black dark:bg-neutral-800 bg-neutral-300 dark:border-white m-4 rounded-3xl text-xl cursor-pointer py-6 pl-6 hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600",
        `${
          isSelected ? "text-blue-500 border-blue-500 dark:border-blue-500" : ""
        }`
      )}
    >
      <div className="w-[5%] flex items-center">
        <p>{index + 1}</p>
      </div>
      <VerticalDivider />

      <div className="flex-1 flex justify-between items center">
        <div className="flex items-center space-x-4">
          <div className="flex">
            <span className="mr-4">Test:</span>
            <p>{testName}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
