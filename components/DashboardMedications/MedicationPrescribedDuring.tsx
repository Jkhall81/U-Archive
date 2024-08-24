import { RelatedData } from "@/lib/dummyData/types";
import { filterRelatedData } from "@/lib/filteringData";

interface Props {
  encounterNumber: string | undefined;
  relatedData: RelatedData;
}

export const MedicationPrescribedDuring = ({
  encounterNumber,
  relatedData,
}: Props) => {
  console.log("relatedData", relatedData);
  const linkedData = filterRelatedData(encounterNumber, relatedData);
  console.log("encounterNumber", encounterNumber);
  console.log("linkedData", linkedData);
  return (
    <section className="border-2 dark:border-white mx-1 rounded-2xl h-[200px]">
      MedicationPrescribedDuring
    </section>
  );
};
