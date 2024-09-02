import { VerticalDivider } from "../VerticalDivider";
import { cn } from "@/lib/utils";

interface Props {
  testName: string;
  index: number;
  testDate: string;
  onClick: () => void;
  isSelected: boolean;
}

export const LabsResultsItem = ({
  index,
  testName,
  testDate,
  onClick,
  isSelected,
}: Props) => {
  return (
    <section
      onClick={onClick}
      className={cn(
        "flex justify-center space-x-4 select-none border border-black dark:bg-neutral-800 bg-neutral-300 dark:border-white m-4 rounded-3xl text-xl cursor-pointer py-6 pl-6 hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600",
        `${
          isSelected ? "text-blue-500 border-blue-500 dark:border-blue-500" : ""
        }`
      )}
    >
      <div className="w-[5%] flex items-center">
        <p>{index + 1}</p>
      </div>
      <VerticalDivider />

      <div className="flex-1 flex items-center">
        <div className="flex-col items-center">
          <div className="flex">
            <span className="mr-4 text-blue-500">Test:</span>
            <p>
              {testName.length > 18 ? testName.slice(0, 19) + "..." : testName}
            </p>
          </div>
          <div className="flex">
            <span className="mr-4 text-blue-500">Date:</span>
            <p>{testDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
