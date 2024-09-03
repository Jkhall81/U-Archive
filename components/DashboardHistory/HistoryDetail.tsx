import { Card } from "../Card";

import { HistoryItem } from "@/lib/dummyData/types";

interface Props {
  item: HistoryItem;
}

const HistoryDetail = ({ item }: Props) => {
  return (
    <main className="flex flex-col mt-6 rounded-2xl mr-4 border-2 bg-neutral-300 dark:bg-neutral-800 border-black dark:border-white pb-6">
      <h2 className="text-center text-2xl 3xl:text-4xl pb-6 font-semibold pt-6">
        History Details
      </h2>
      <div className="flex">
        <Card
          fields={[
            { fieldName: "Item", fieldValue: item.item },
            { fieldName: "Category", fieldValue: item.historyCategory },
            { fieldName: "Description", fieldValue: item.description },
            { fieldName: "Notes", fieldValue: item.notes },
            { fieldName: "Results", fieldValue: item.results },
          ]}
        />
        <Card
          fields={[
            { fieldName: "Physican Last Name", fieldValue: item.drLastName },
            { fieldName: "Physican First Name", fieldValue: item.drFirstName },
            { fieldName: "Date", fieldValue: item.date },
          ]}
        />
      </div>
    </main>
  );
};
export default HistoryDetail;
