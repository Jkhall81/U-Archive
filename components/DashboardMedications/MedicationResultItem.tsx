import { cn } from "@/lib/utils";
import { VerticalDivider } from "../VerticalDivider";

interface Props {
  medicationName: string;
  dose: string;
  doseUnit: string;
  startDate: string;
  endDate: string;
  index: number;
  onClick: () => void;
  isSelected: boolean;
}

export const MedicationResultItem = ({
  medicationName,
  startDate,
  index,
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
      <div className="w-4 flex items-center">
        <p>{index + 1}</p>
      </div>
      <VerticalDivider />

      {/* Centered Content */}
      <div className="flex items-center flex-1 pr-2">
        <div className="flex-col items-center">
          <div className="flex">
            <span className="mr-4 text-blue-500">Medication:</span>
            <p>
              {medicationName.length > 19
                ? medicationName.slice(0, 19) + "..."
                : medicationName}
            </p>
          </div>
          <div className="flex">
            <span className="mr-4 text-blue-500">Start Date:</span>
            <p>{startDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
