import { DocumentResultItem } from "./DocumentResultItem";
import { Document } from "@/lib/dummyData/types";

interface Props {
  data: Document[];
}

export const DocumentResultList = ({ data }: Props) => {
  return (
    <section className="border-2 border-neutral-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 font-semibold">Documents</h2>
      {data.map((x, index) => (
        <DocumentResultItem
          key={index}
          index={index}
          documentName={x.documentName}
          documentType={x.documentType}
          documentDate={x.documentDate}
          encounterNumber={x.encounterNumber}
          documentPath={x.documentPath}
        />
      ))}
    </section>
  );
};
