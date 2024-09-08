import { Card } from "../Card";
import {
  Lab,
  Document,
  HistoryItem,
  Medication,
  Problem,
  Procedure,
  Visit,
} from "@/lib/dummyData/types";
import { getDetailContent } from "./UtilityFunctions";

interface Props {
  item: Lab | Document | HistoryItem | Medication | Problem | Procedure | Visit;
  detailTitle: string;
}

export const RouteDetail = ({ item, detailTitle }: Props) => {
  const { fields1, fields2 } = getDetailContent(item);
  return (
    <main className="flex flex-col mt-6 rounded-2xl mr-4 border-2 bg-neutral-300 dark:bg-neutral-800 border-black dark:border-white pb-6">
      <h2 className="text-center text-2xl 3xl:text-4xl font-semibold pt-6 pb-6">
        {detailTitle}
      </h2>
      <div className="tablet:flex">
        <Card fields={fields1} />
        <Card fields={fields2} />
      </div>
    </main>
  );
};
