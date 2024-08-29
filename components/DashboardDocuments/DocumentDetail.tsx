import { Document } from "@/lib/dummyData/types";
import { Card } from "../Card";
import { Button } from "../ui/button";

interface Props {
  item: Document;
}

export const DocumentDetail = ({ item }: Props) => {
  return (
    <main className="flex flex-col mt-6 rounded-2xl mr-4 border-2 bg-neutral-300 dark:bg-neutral-800 border-black dark:border-white pb-6">
      <h2 className="text-center text-4xl font-semibold pt-6 pb-6">
        Document Details
      </h2>
      <div className="flex">
        <Card
          fields={[
            { fieldName: "Name", fieldValue: item.documentName },
            { fieldName: "Type", fieldValue: item.documentType },
          ]}
        />
        <Card
          fields={[
            { fieldName: "Date", fieldValue: item.documentDate },
            { fieldName: "Path", fieldValue: item.documentPath },
          ]}
        />
      </div>
      <div className="flex justify-center">
        <Button className="text-2xl w-[20vw] h-[50px] rounded-2xl my-8 dark:bg-neutral-900 border-2 border-black dark:border-white hover:dark:border-blue-500 hover:dark:text-blue-500 hover:text-blue-500 hover:bg-neutral-400 bg-neutral-400 hover:border-blue-500">
          Download
        </Button>
      </div>
    </main>
  );
};
