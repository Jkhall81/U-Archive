import { Input } from "../ui/input";
import { VerticalDivider } from "../VerticalDivider";

export const MedicationSearchBar = () => {
  return (
    <section className="flex items-center border-2 dark:border-white w-full h-[200px] rounded-3xl">
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Medication Name:</span>
          <Input
            placeholder="Enter Medication Name"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Dose Strength:</span>
          <Input
            placeholder="100"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Physician Last Name:</span>
          <Input
            placeholder="Enter Last Name"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </section>
  );
};
