'use client';

import {useState} from 'react';
import { Problem } from "@/lib/dummyData/types";
import { ProblemsResultItem } from "./ProblemsResultItem";

interface Props {
  data: Problem[];
  onClick: (item: Problem) => void;
}

export const ProblemsResultList = ({ data, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Problem | null>(null);

  const handleClick = (item: Problem) => {
    setSelectedItem(item);
    onClick(item);
  };
  return (
    <section className="border-2 border-neutral-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 pb-6 font-semibold">
        Problems
      </h2>
      {data.map((x, index) => (
        <ProblemsResultItem onClick={() => handleClick(x)}
        isSelected={selectedItem === x} key={index} index={index} diagDesc={x.diagDesc} />
      ))}
    </section>
  );
};
