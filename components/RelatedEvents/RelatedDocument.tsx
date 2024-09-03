import { Document } from "@/lib/dummyData/types";
import { RelatedDetailCard } from "@/components/RelatedDetailCard";
import { Button } from "@/components/ui/button";

interface Props {
  data: Document;
}

export const RelatedDocument = ({ data }: Props) => {
  return (
    <section className="w-full h-full flex bg-neutral-300 rounded-2xl dark:bg-transparent flex-col items-center">
      <h2 className="text-2xl 3xl:text-3xl text-center mt-8 mb-6">Related Document</h2>
      <div className="w-full">
        <RelatedDetailCard
          fields={[
            { fieldName: "Document Name", fieldValue: data.documentName },
            { fieldName: "Date", fieldValue: data.documentDate },
            { fieldName: "Type", fieldValue: data.documentType },
          ]}
        />
      </div>
      <Button className="text-2xl mb-8 border-black bg-neutral-400 dark:bg-neutral-800 h-[50px] w-[20vw] mt-12 rounded-3xl border-2 dark:border-white hover:text-blue-500 dark:hover:text-blue-500 hover:bg-neutral-400 hover:border-blue-500 dark:hover:border-blue-500">
        Download
      </Button>
    </section>
  );
};
