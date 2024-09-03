import { Visit } from "@/lib/dummyData/types";
import { RelatedDetailCard } from "@/components/RelatedDetailCard";
import { Button } from "@/components/ui/button";

interface Props {
  data: Visit;
}

export const RelatedVisit = ({ data }: Props) => {
  return (
    <section className="w-full flex flex-col items-center dark:bg-transparent bg-neutral-300 rounded-2xl h-full">
      <h2 className="text-2xl 3xl:text-3xl text-center mt-8 mb-6">
        Related Visit
      </h2>
      <div className="w-full">
        <RelatedDetailCard
          fields={[
            { fieldName: "Visit Type", fieldValue: data.visitType },
            { fieldName: "Visit Date", fieldValue: data.visitDate },
            { fieldName: "PDF File", fieldValue: data.PDFFile },
            { fieldName: "Physician Last Name", fieldValue: data.drLastName },
            { fieldName: "Physician First Name", fieldValue: data.drFirstName },
          ]}
        />
      </div>
      <Button className="text-2xl mb-8 border-black dark:bg-neutral-800 h-[50px] w-[20vw] mt-14 rounded-3xl border-2 dark:border-white bg-neutral-400 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-neutral-400 hover:border-blue-500 dark:hover:border-blue-500">
        Download
      </Button>
    </section>
  );
};
