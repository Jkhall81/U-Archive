"use client";

import { useState } from "react";
import { HistoryItem } from "@/lib/dummyData/types";
import { HistoryResultItem } from "./HistoryResultItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  history: HistoryItem[];
  onClick: (item: HistoryItem) => void;
  setDetailDisplayOpen: (isOpen: boolean) => void;
  setSelectedEventItem: (item: null) => void;
}

export const HistoryResultsList = ({
  history,
  onClick,
  setDetailDisplayOpen,
  setSelectedEventItem,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (item: HistoryItem) => {
    setSelectedItem(item);
    onClick(item);
  };

  const totalPages = Math.ceil(history.length / itemsPerPage);
  const currentItems = history.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="border-2 border-black dark:bg-transparent bg-slate-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 font-semibold">History</h2>
      {currentItems.map((x, index) => (
        <HistoryResultItem
          key={index}
          index={index}
          item={x.item}
          date={x.date}
          onClick={() => handleClick(x)}
          isSelected={selectedItem === x}
        />
      ))}
      <div className="flex justify-center my-6">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          setDetailDisplayOpen={setDetailDisplayOpen}
          setSelectedEventItem={setSelectedEventItem}
        />
      </div>
    </section>
  );
};
