"use client";

import { useState } from "react";
import { Procedure } from "@/lib/dummyData/types";
import { ProceduresResultItem } from "./ProceduresResultItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  data: Procedure[];
  onClick: (item: Procedure) => void;
  setDetailDisplayOpen: (isOpen: boolean) => void;
  setSelectedEventItem: (item: null) => void;
}

export const ProceduresResultsList = ({
  data,
  onClick,
  setDetailDisplayOpen,
  setSelectedEventItem,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<Procedure | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (item: Procedure) => {
    setSelectedItem(item);
    onClick(item);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="border-2 dark:bg-transparent bg-slate-300 border-black dark:border-white mt-6 rounded-3xl">
      <h2 className="text-2xl 3xl:text-4xl text-center mt-6 pb-6 font-semibold">
        Procedures
      </h2>
      {currentItems.map((x, index) => (
        <ProceduresResultItem
          onClick={() => handleClick(x)}
          isSelected={selectedItem === x}
          key={index}
          index={index}
          testName={x.testName}
          date={x.testDate}
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
