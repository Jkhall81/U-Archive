import { Medication } from "@/lib/dummyData/types";
import { RelatedDetailCard } from "@/components/RelatedDetailCard";

interface Props {
  data: Medication;
}

export const RelatedMedication = ({ data }: Props) => {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-center mt-8 mb-6">Related Medication</h2>
      <div className="w-full">
        <RelatedDetailCard
          fields={[
            { fieldName: "Medication Name", fieldValue: data.medicationName },
            { fieldName: "Start Date", fieldValue: data.startDate },
            { fieldName: "End Date", fieldValue: data.endDate },
            { fieldName: "Physician Last Name", fieldValue: data.drLastName },
            { fieldName: "Physician First Name", fieldValue: data.drFirstName },
            { fieldName: "Duration", fieldValue: data.duration },
            { fieldName: "Dose", fieldValue: data.dose },
            { fieldName: "Dose Unit", fieldValue: data.doseUnit },
            { fieldName: "Intake", fieldValue: data.intake },
            { fieldName: "Frequency", fieldValue: data.frequency },
            { fieldName: "Route", fieldValue: data.route },
            { fieldName: "Comments", fieldValue: data.comments },
          ]}
        />
      </div>
    </section>
  );
};
