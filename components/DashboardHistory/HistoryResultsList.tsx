"use client";

import { useState } from "react";
import { HistoryItem } from "@/lib/dummyData/types";
import { HistoryResultItem } from "./HistoryResultItem";

interface Props {
  history: HistoryItem[];
  onClick: (item: HistoryItem) => void;
}

export const HistoryResultsList = ({ history, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);

  const handleClick = (item: HistoryItem) => {
    setSelectedItem(item);
    onClick(item);
  };
  return (
    <section className="border-2 border-black dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 font-semibold">History</h2>
      {history.map((x, index) => (
        <HistoryResultItem
          key={index}
          index={index}
          item={x.item}
          onClick={() => handleClick(x)}
          isSelected={selectedItem === x}
        />
      ))}
    </section>
  );
};
