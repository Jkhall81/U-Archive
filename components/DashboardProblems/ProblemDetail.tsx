import { Card } from "../Card";

import { Problem } from "@/lib/dummyData/types";

interface Props {
  item: Problem;
}

export const ProblemDetail = ({ item }: Props) => {
  return (
    <main className="flex flex-col mt-6 rounded-2xl mr-4 border-2 bg-neutral-300 dark:bg-neutral-800 border-neutral-300 dark:border-white pb-6">
      <h2 className="text-center text-4xl pb-6 font-semibold pt-6">
        Problem Details
      </h2>
      <div className="flex">
        <Card
          fields={[
            { fieldName: "Diagnosis Code", fieldValue: item.diagCode },
            { fieldName: "Date", fieldValue: item.probDate },
            { fieldName: "Description", fieldValue: item.diagDesc },
          ]}
        />
        <Card
          fields={[
            { fieldName: "Physician Last Name", fieldValue: item.drLastName },
            { fieldName: "Physician First Name", fieldValue: item.drFirstName },
          ]}
        />
      </div>
    </main>
  );
};
