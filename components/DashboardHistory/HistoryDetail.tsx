import { Card } from "../Card";

import { HistoryItem } from "@/lib/dummyData/types";

interface Props {
  item: HistoryItem;
  onClose: () => void;
}

const HistoryDetail = ({ item, onClose }: Props) => {
  return (
    <main className="flex flex-col mt-6 rounded-2xl mx-1 border-2 bg-neutral-300 dark:bg-neutral-800 border-neutral-300 dark:border-white pb-6">
      <h2 className="text-center text-4xl pb-6 font-semibold pt-6">
        Item Details
      </h2>
      <div className="flex">
        <Card
          fields={[
            {
              fieldName: "Encounter Number",
              fieldValue: item.encounterNumber,
            },
            { fieldName: "Description", fieldValue: item.description },
            { fieldName: "Notes", fieldValue: item.notes },
            { fieldName: "Results", fieldValue: item.results },
          ]}
        />
        <Card
          fields={[
            { fieldName: "Physican Last Name", fieldValue: item.drLastName },
            { fieldName: "Physican First Name", fieldValue: item.drFirstName },
          ]}
        />
      </div>
    </main>
  );
};
export default HistoryDetail;
