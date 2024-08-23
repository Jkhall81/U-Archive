"use client";

import { useState } from "react";
import { Procedure } from "@/lib/dummyData/types";
import { ProceduresResultItem } from "./ProceduresResultItem";

interface Props {
  data: Procedure[];
  onClick: (item: Procedure) => void;
}

export const ProceduresResultsList = ({ data, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Procedure | null>(null);

  const handleClick = (item: Procedure) => {
    setSelectedItem(item);
    onClick(item);
  };
  return (
    <section className="border-2 border-neutral-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 pb-6 font-semibold">
        Procedures
      </h2>
      {data.map((x, index) => (
        <ProceduresResultItem onClick={() => handleClick(x)}
        isSelected={selectedItem === x} key={index} index={index} testName={x.testName} />
      ))}
    </section>
  );
};
