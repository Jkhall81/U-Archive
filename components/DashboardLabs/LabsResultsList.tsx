"use client";

import { useState } from "react";
import { Lab } from "@/lib/dummyData/types";
import { LabsResultsItem } from "./LabsResultsItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  data: Lab[];
  onClick: (item: Lab) => void;
  setDetailDisplayOpen: (isOpen: boolean) => void;
  setSelectedEventItem: (item: null) => void;
}

export const LabsResultsList = ({
  data,
  onClick,
  setDetailDisplayOpen,
  setSelectedEventItem,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<Lab | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (item: Lab) => {
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
      <h2 className="text-4xl text-center mt-6 pb-6 font-semibold">Labs</h2>
      {currentItems.map((x, index) => (
        <LabsResultsItem
          key={index}
          index={index}
          testName={x.testName}
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
