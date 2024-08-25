import { Procedure } from "@/lib/dummyData/types";
import { RelatedDetailCard } from "@/components/RelatedDetailCard";

interface Props {
  data: Procedure;
}

export const RelatedProcedure = ({ data }: Props) => {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-3xl text-center mt-8 mb-6">Related Procedure</h2>
      <div className="w-full">
        <RelatedDetailCard
          fields={[
            { fieldName: "Test Name", fieldValue: data.testName },
            { fieldName: "Facility Name", fieldValue: data.facilityName },
            { fieldName: "Test Date", fieldValue: data.testDate },
            { fieldName: "Result Date", fieldValue: data.resultDate },
            { fieldName: "Result1", fieldValue: data.result1 },
            { fieldName: "Result2", fieldValue: data.result2 },
            { fieldName: "Result3", fieldValue: data.result3 },
            { fieldName: "Result4", fieldValue: data.result4 },
            { fieldName: "Result5", fieldValue: data.result5 },
            { fieldName: "Result6", fieldValue: data.result6 },
            { fieldName: "Result7", fieldValue: data.result7 },
            { fieldName: "Result8", fieldValue: data.result8 },
          ]}
        />
      </div>
    </section>
  );
};
