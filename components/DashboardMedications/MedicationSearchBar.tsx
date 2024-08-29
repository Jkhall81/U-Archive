import { Input } from "../ui/input";

interface Props {
  medicationName: string;
  doseStrength: string;
  physicianLastName: string;
  onMedicationNameChange: (value: string) => void;
  onDoseStrengthChange: (value: string) => void;
  onPhysicianLastNameChange: (value: string) => void;
}

export const MedicationSearchBar = ({
  medicationName,
  doseStrength,
  physicianLastName,
  onMedicationNameChange,
  onDoseStrengthChange,
  onPhysicianLastNameChange,
}: Props) => {
  return (
    <section className="flex items-center border-2 border-black dark:border-white w-full h-[200px] rounded-3xl">
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Medication Name:</span>
          <Input
            value={medicationName}
            onChange={(e) => onMedicationNameChange(e.target.value)}
            placeholder="Enter Medication Name"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r dark:border-white border-black h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Dose Strength:</span>
          <Input
            value={doseStrength}
            onChange={(e) => onDoseStrengthChange(e.target.value)}
            placeholder="100"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r dark:border-white border-black h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Physician Last Name:</span>
          <Input
            value={physicianLastName}
            onChange={(e) => onPhysicianLastNameChange(e.target.value)}
            placeholder="Enter Last Name"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </section>
  );
};
