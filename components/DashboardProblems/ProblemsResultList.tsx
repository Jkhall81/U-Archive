"use client";

import { useState } from "react";
import { Problem } from "@/lib/dummyData/types";
import { ProblemsResultItem } from "./ProblemsResultItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  data: Problem[];
  onClick: (item: Problem) => void;
  setDetailDisplayOpen: (isOpen: boolean) => void;
  setSelectedEventItem: (item: null) => void;
}

export const ProblemsResultList = ({
  data,
  onClick,
  setDetailDisplayOpen,
  setSelectedEventItem,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<Problem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (item: Problem) => {
    setSelectedItem(item);
    onClick(item);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="border-2 border-black dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 pb-6 font-semibold">Problems</h2>
      {currentItems.map((x, index) => (
        <ProblemsResultItem
          onClick={() => handleClick(x)}
          isSelected={selectedItem === x}
          key={index}
          index={index}
          diagDesc={x.diagDesc}
          date={x.probDate}
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
