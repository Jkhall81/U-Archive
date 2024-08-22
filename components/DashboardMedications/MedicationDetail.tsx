import { Medication } from "@/lib/dummyData/types";
import { Card } from "../Card";

interface Props {
  item: Medication;
  onClose: () => void;
}

export const MedicationDetail = ({ item, onClose }: Props) => {
  return (
    <main className="flex flex-col mt-6 rounded-2xl mx-1 border-2 bg-neutral-300 dark:bg-neutral-800 border-neutral-300 dark:border-white pb-6">
      <h2 className="text-center text-4xl font-semibold pt-6 pb-6">
        Medication Details
      </h2>
      <div className="flex">
        <Card
          fields={[
            { fieldName: "Duration", fieldValue: item.duration },
            { fieldName: "Intake", fieldValue: item.intake },
            { fieldName: "Route", fieldValue: item.route },
            { fieldName: "Frequency", fieldValue: item.frequency },
            { fieldName: "Comments", fieldValue: item.comments },
          ]}
        />
        <Card
          fields={[
            { fieldName: "Encounter Number", fieldValue: item.encounterNumber },
            { fieldName: "Physician Last Name", fieldValue: item.drLastName },
            { fieldName: "Physician First Name", fieldValue: item.drFirstName },
          ]}
        />
      </div>
    </main>
  );
};
