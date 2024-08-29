import { Visit } from "@/lib/dummyData/types";
import { Card } from "../Card";
import { Button } from "../ui/button";

interface Props {
  item: Visit;
}

export const VisitsDetail = ({ item }: Props) => {
  return (
    <main className="flex flex-col mt-6 rounded-2xl mr-4 border-2 bg-neutral-300 dark:bg-neutral-800 border-black dark:border-white pb-6">
      <h2 className="text-center text-4xl font-semibold pt-6 pb-6">
        Visit Details
      </h2>
      <div className="flex">
        <Card
          fields={[
            { fieldName: "Visit Type", fieldValue: item.visitType },
            { fieldName: "Visit Date", fieldValue: item.visitDate },
            { fieldName: "PDF File", fieldValue: item.PDFFile },
          ]}
        />
        <Card
          fields={[
            { fieldName: "Physician Last Name", fieldValue: item.drLastName },
            { fieldName: "Physician First Name", fieldValue: item.drFirstName },
          ]}
        />
      </div>
      <div className="flex justify-center">
        <Button className="text-2xl w-[20vw] h-[50px] rounded-2xl my-8 dark:bg-neutral-900 border-2 dark:border-white dark:hover:border-blue-500 bg-neutral-400 border-black hover:bg-neutral-400 hover:text-blue-500 dark:hover:text-blue-500 hover:border-blue-500">
          Download
        </Button>
      </div>
    </main>
  );
};
