import { VerticalDivider } from "../VerticalDivider";
import { Card } from "../Card";

interface Props {
  index: number;
  encounterNumber: string;
  facilityName: string;
  testName: string;
  testDate: string;
  result1: string;
  result2: string;
  result3: string;
  result4: string;
  result5: string;
  result6: string;
  result7: string;
  result8: string;
  resultDate: string;
}

export const ProceduresResultItem = ({
  index,
  encounterNumber,
  facilityName,
  testName,
  testDate,
  resultDate,
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
  result7,
  result8,
}: Props) => {
  return (
    <main className="flex flex-col">
      <section className="flex py-6 pl-6 text-2xl space-x-4 border border-black bg-neutral-300 dark:bg-neutral-800 dark:border-white m-4 rounded-3xl">
        <p>{index + 1}:</p>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Encounter Number:</span>
          <p>{encounterNumber}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Facility Name:</span>
          <p>{facilityName}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Test Name:</span>
          <p>{testName}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Test Date:</span>
          <p>{testDate}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Result Date:</span>
          <p>{resultDate}</p>
        </div>
      </section>
      <section className="flex flex-col w-full">
        <h3 className="text-3xl pb-6 text-center">Results</h3>
        <div className="flex">
          <Card
            fields={[
              { fieldName: "Result 1", fieldValue: result1 },
              { fieldName: "Result 2", fieldValue: result2 },
              { fieldName: "Result 3", fieldValue: result3 },
              { fieldName: "Result 4", fieldValue: result4 },
            ]}
          />
          <Card
            fields={[
              { fieldName: "Result 5", fieldValue: result5 },
              { fieldName: "Result 6", fieldValue: result6 },
              { fieldName: "Result 7", fieldValue: result7 },
              { fieldName: "Result 8", fieldValue: result8 },
            ]}
          />
        </div>
      </section>
    </main>
  );
};
