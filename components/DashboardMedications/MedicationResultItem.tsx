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
  index,
  onClick,
  isSelected,
}: Props) => {
  return (
    <section
      onClick={onClick}
      className={cn(
        "flex justify-center space-x-4 border border-black dark:bg-neutral-800 bg-neutral-300 dark:border-white m-4 rounded-3xl text-2xl cursor-pointer py-6 pl-6 hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600",
        `${
          isSelected ? "text-blue-500 border-blue-500 dark:border-blue-500" : ""
        }`
      )}
    >
      <div className="w-[2%] flex items-center">
        <p>{index + 1}</p>
      </div>
      <VerticalDivider />

      {/* Centered Content */}
      <div className="flex">
        <div className="flex items-center">
          <div className="flex">
            <span className="mr-4">Medication:</span>
            <p>{medicationName}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
