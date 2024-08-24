import { Document } from "@/lib/dummyData/types";
import { RelatedDetailCard } from "@/components/RelatedDetailCard";
import { Button } from "@/components/ui/button";

interface Props {
  data: Document;
}

export const RelatedDocument = ({ data }: Props) => {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-center mt-8 mb-6">Related Document</h2>
      <div className="w-full">
        <RelatedDetailCard
          fields={[
            { fieldName: "Document Name", fieldValue: data.documentName },
            { fieldName: "Date", fieldValue: data.documentDate },
            { fieldName: "Type", fieldValue: data.documentType },
          ]}
        />
      </div>
      <Button className="text-2xl border-black dark:bg-neutral-800 h-[50px] w-[20vw] mt-8 rounded-3xl border-2 dark:border-white">
        Download
      </Button>
    </section>
  );
};
