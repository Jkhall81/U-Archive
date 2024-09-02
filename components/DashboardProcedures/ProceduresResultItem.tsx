import { VerticalDivider } from "../VerticalDivider";
import { cn } from "@/lib/utils";

interface Props {
  index: number;
  testName: string;
  date: string;
  onClick: () => void;
  isSelected: boolean;
}

export const ProceduresResultItem = ({
  index,
  testName,
  date,
  onClick,
  isSelected,
}: Props) => {
  return (
    <section
      onClick={onClick}
      className={cn(
        "flex justify-center select-none space-x-4 border-2 border-black dark:bg-neutral-800 bg-neutral-300 dark:border-white m-4 rounded-3xl 3xl:text-xl cursor-pointer py-6 pl-6 hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600",
        `${
          isSelected
            ? "text-blue-500 border-blue-500 bg-neutral-200 dark:bg-neutral-700 dark:border-blue-500"
            : ""
        }`
      )}
    >
      <div className="3xl:w-[5%] flex items-center">
        <p>{index + 1}</p>
      </div>
      <VerticalDivider />

      <div className="flex-1 flex items-center 3xl:pr-2">
        <div className="flex-col items-center">
          <div className="flex">
            <span className="3xl:mr-4 mr-2 text-blue-500">Procedure:</span>
            <p>
              {testName.length > 12 ? testName.slice(0, 13) + "..." : testName}
            </p>
          </div>
          <div className="flex">
            <span className="3xl:mr-4 mr-2 text-blue-500">Date:</span>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
