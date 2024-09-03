import { Lab } from "@/lib/dummyData/types";
import { RelatedDetailCard } from "@/components/RelatedDetailCard";

interface Props {
  data: Lab;
}

export const RelatedLab = ({ data }: Props) => {
  return (
    <section className="w-full flex flex-col items-center dark:bg-transparent bg-neutral-300 rounded-2xl h-full pb-14">
      <h2 className="text-2xl 3xl:text-3xl text-center mt-8 mb-6">
        Related Lab
      </h2>
      <div className="w-full">
        <RelatedDetailCard
          fields={[
            { fieldName: "Lab Name", fieldValue: data.labName },
            { fieldName: "Test Name", fieldValue: data.testName },
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
