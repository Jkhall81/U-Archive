import { Procedure } from "@/lib/dummyData/types";
import { ProceduresResultItem } from "./ProceduresResultItem";

interface Props {
  data: Procedure[];
}

export const ProceduresResultsList = ({ data }: Props) => {
  return (
    <section className="border-2 border-neutral-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 pb-6 font-semibold">Procedures</h2>
      {data.map((x, index) => (
        <ProceduresResultItem
          key={index}
          index={index}
          encounterNumber={x.encounterNumber}
          facilityName={x.facilityName}
          testName={x.testName}
          testDate={x.testDate}
          resultDate={x.resultDate}
          result1={x.result1}
          result2={x.result2}
          result3={x.result3}
          result4={x.result4}
          result5={x.result5}
          result6={x.result6}
          result7={x.result7}
          result8={x.result8}
        />
      ))}
    </section>
  );
};
