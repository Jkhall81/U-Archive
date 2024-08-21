import { Problem } from "@/lib/dummyData/types";
import { ProblemsResultItem } from "./ProblemsResultItem";

interface Props {
  data: Problem[];
}

export const ProblemsResultList = ({ data }: Props) => {
  return (
    <section className="border-2 border-neutral-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 font-semibold">Problems</h2>
      {data.map((x, index) => (
        <ProblemsResultItem
          key={index}
          index={index}
          diagCode={x.diagCode}
          diagDesc={x.diagDesc}
          probDate={x.probDate}
          drFirstName={x.drFirstName}
          drLastName={x.drLastName}
        />
      ))}
    </section>
  );
};
