import { cn } from "@/lib/utils";

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
  dose,
  doseUnit,
  startDate,
  endDate,
  index,
  onClick,
  isSelected,
}: Props) => {
  return (
    <section
      onClick={onClick}
      className={cn(
        "flex space-x-4 text-2xl cursor-pointer py-6 pl-6 hover:text-blue-300",
        `${isSelected ? "text-blue-500" : ""}`
      )}
    >
      <div className="flex">
        <p>{index + 1}</p>
      </div>
      <div className="flex">
        <span className="mr-4">Medication Name:</span>
        <p>{medicationName}</p>
      </div>
      <div className="flex">
        <span className="mr-4">Dose:</span>
        <p>{`${dose} ${doseUnit}`}</p>
      </div>
      <div className="flex">
        <span className="mr-4">Start Date:</span>
        <p>{startDate}</p>
      </div>
      <div className="flex">
        <span className="mr-4">End Date:</span>
        <p>{endDate}</p>
      </div>
    </section>
  );
};
