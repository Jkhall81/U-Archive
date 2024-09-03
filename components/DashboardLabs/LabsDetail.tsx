import { Card } from "../Card";
import { Lab } from "@/lib/dummyData/types";

interface Props {
  item: Lab;
}

export const LabsDetail = ({ item }: Props) => {
  return (
    <main className="flex flex-col mt-6 rounded-2xl mr-4 border-2 bg-neutral-300 dark:bg-neutral-800 border-black dark:border-white pb-6">
      <h2 className="text-center text-2xl 3xl:text-4xl font-semibold pt-6 pb-6">
        Lab Details
      </h2>
      <div className="flex">
        <Card
          fields={[
            { fieldName: "Encounter Number", fieldValue: item.encounterNumber },
            { fieldName: "Lab Name", fieldValue: item.labName },
            { fieldName: "Test Name", fieldValue: item.testName },
            { fieldName: "Test Date", fieldValue: item.testDate },
            { fieldName: "Result Date", fieldValue: item.resultDate },
          ]}
        />
        <Card
          fields={[
            { fieldName: "Result 1", fieldValue: item.result1 },
            { fieldName: "Result 2", fieldValue: item.result2 },
            { fieldName: "Result 3", fieldValue: item.result3 },
            { fieldName: "Result 4", fieldValue: item.result4 },
            { fieldName: "Result 5", fieldValue: item.result5 },
            { fieldName: "Result 6", fieldValue: item.result6 },
            { fieldName: "Result 7", fieldValue: item.result7 },
            { fieldName: "Result 8", fieldValue: item.result8 },
          ]}
        />
      </div>
    </main>
  );
};
