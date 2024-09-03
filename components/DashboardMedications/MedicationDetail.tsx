import { Medication } from "@/lib/dummyData/types";
import { Card } from "../Card";

interface Props {
  item: Medication;
}

export const MedicationDetail = ({ item }: Props) => {
  return (
    <main className="flex flex-col mt-6 rounded-2xl mr-4 border-2 bg-neutral-300 dark:bg-neutral-800 border-black dark:border-white pb-6">
      <h2 className="text-center text-2xl 3xl:text-4xl font-semibold pt-6 pb-6">
        Medication Details
      </h2>
      <div className="flex">
        <Card
          fields={[
            { fieldName: "Name", fieldValue: item.medicationName },
            { fieldName: "Duration", fieldValue: item.duration },
            { fieldName: "Dose", fieldValue: item.dose },
            { fieldName: "Dose Unit", fieldValue: item.doseUnit },
            { fieldName: "Frequency", fieldValue: item.frequency },
            { fieldName: "Comments", fieldValue: item.comments },
          ]}
        />
        <Card
          fields={[
            { fieldName: "Intake", fieldValue: item.intake },
            { fieldName: "Route", fieldValue: item.route },
            { fieldName: "Physician Last Name", fieldValue: item.drLastName },
            { fieldName: "Physician First Name", fieldValue: item.drFirstName },
            { fieldName: "Start Date", fieldValue: item.startDate },
            { fieldName: "End Date", fieldValue: item.endDate },
          ]}
        />
      </div>
    </main>
  );
};
