"use client";

import { useState } from "react";
import { Visit } from "@/lib/dummyData/types";
import { VisitsResultItem } from "./VisitsResultItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  visits: Visit[];
  onClick: (item: Visit) => void;
  setDetailDisplayOpen: (isOpen: boolean) => void;
  setSelectedEventItem: (item: null) => void;
}

export const VisitsResultsList = ({
  visits,
  onClick,
  setDetailDisplayOpen,
  setSelectedEventItem,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<Visit | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (item: Visit) => {
    setSelectedItem(item);
    onClick(item);
  };

  const totalPages = Math.ceil(visits.length / itemsPerPage);
  const currentItems = visits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="border-2 dark:bg-transparent bg-slate-300 border-black dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 pb-6 font-semibold">Visits</h2>
      {currentItems.map((x, index) => (
        <VisitsResultItem
          key={index}
          index={index}
          encounterNumber={x.encounterNumber}
          visitDate={x.visitDate}
          drFirstName={x.drFirstName}
          drLastName={x.drLastName}
          visitType={x.visitType}
          PDFFile={x.PDFFile}
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
