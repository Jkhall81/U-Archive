import { Visit } from "@/lib/dummyData/types";
import { VisitsResultItem } from "./VisitsResultItem";

interface Props {
  visits: Visit[];
}

export const VisitsResultsList = ({ visits }: Props) => {
  return (
    <section className="border-2 border-neutral-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 pb-6 font-semibold">Visits</h2>
      {visits.map((x, index) => (
        <VisitsResultItem
          key={index}
          index={index}
          encounterNumber={x.encounterNumber}
          visitDate={x.visitDate}
          drFirstName={x.drFirstName}
          drLastName={x.drLastName}
          visitType={x.visitType}
          PDFFile={x.PDFFile}
        />
      ))}
    </section>
  );
};
