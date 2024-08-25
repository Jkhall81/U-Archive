import { Problem } from "@/lib/dummyData/types";
import { RelatedDetailCard } from "@/components/RelatedDetailCard";

interface Props {
  data: Problem;
}

export const RelatedProblem = ({ data }: Props) => {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-center mt-8 mb-6">Related Problem</h2>
      <div className="w-full">
        <RelatedDetailCard
          fields={[
            { fieldName: "Description", fieldValue: data.diagDesc },
            { fieldName: "Diagnosis Code", fieldValue: data.diagCode },
            { fieldName: "Date", fieldValue: data.probDate },
            { fieldName: "Physician Last Name", fieldValue: data.drLastName },
            { fieldName: "Physician First Name", fieldValue: data.drFirstName },
          ]}
        />
      </div>
    </section>
  );
};
