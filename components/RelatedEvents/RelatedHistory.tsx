import { HistoryItem } from "@/lib/dummyData/types";
import { RelatedDetailCard } from "@/components/RelatedDetailCard";

interface Props {
  data: HistoryItem;
}

export const RelatedHistory = ({ data }: Props) => {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-center mt-8 mb-6">Related History</h2>
      <div className="w-full">
        <RelatedDetailCard
          fields={[
            { fieldName: "Item", fieldValue: data.item },
            { fieldName: "Category", fieldValue: data.historyCategory },
            { fieldName: "Date", fieldValue: data.date },
            { fieldName: "Description", fieldValue: data.description },
            { fieldName: "Results", fieldValue: data.results },
            { fieldName: "Notes", fieldValue: data.notes },
            { fieldName: "Physician Last Name", fieldValue: data.drLastName },
            { fieldName: "Physician First Name", fieldValue: data.drFirstName },
          ]}
        />
      </div>
    </section>
  );
};
