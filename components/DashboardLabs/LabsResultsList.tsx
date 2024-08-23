"use client";

import { useState } from "react";
import { Lab } from "@/lib/dummyData/types";
import { LabsResultsItem } from "./LabsResultsItem";

interface Props {
  data: Lab[];
  onClick: (item: Lab) => void;
}

export const LabsResultsList = ({ data, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Lab | null>(null);

  const handleClick = (item: Lab) => {
    setSelectedItem(item);
    onClick(item);
  };
  return (
    <section className="border-2 border-neutral-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 pb-6 font-semibold">Labs</h2>
      {data.map((x, index) => (
        <LabsResultsItem
          key={index}
          index={index}
          testName={x.testName}
          onClick={() => handleClick(x)}
          isSelected={selectedItem === x}
        />
      ))}
    </section>
  );
};
