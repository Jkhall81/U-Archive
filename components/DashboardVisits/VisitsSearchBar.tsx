import { Input } from "../ui/input";

interface Props {
  visitType: string;
  visitDate: string;
  drLastName: string;
  onVisitTypeChange: (value: string) => void;
  onVisitDateChange: (value: string) => void;
  onDrLastNameChange: (value: string) => void;
}

export const VisitsSearchBar = ({
  visitType,
  visitDate,
  drLastName,
  onVisitTypeChange,
  onVisitDateChange,
  onDrLastNameChange,
}: Props) => {
  return (
    <section className="flex items-center border-2 dark:border-white w-full h-[200px] rounded-3xl">
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Visit Type:</span>
          <Input
            value={visitType}
            onChange={(e) => onVisitTypeChange(e.target.value)}
            placeholder="Enter Visit Type"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Visit Date:</span>
          <Input
            value={visitDate}
            onChange={(e) => onVisitDateChange(e.target.value)}
            placeholder="Enter Document Type"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Physician Last Name:</span>
          <Input
            value={drLastName}
            onChange={(e) => onDrLastNameChange(e.target.value)}
            placeholder="Enter Physician Last Name"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </section>
  );
};
