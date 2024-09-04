"use client";

import { useState } from "react";
import { RelatedData } from "@/lib/dummyData/types";
import { PrescribedDuringLinkItem } from "./PrescribedDuringLinkItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  linkedData: Partial<RelatedData>;
  onClick: (item: Partial<RelatedData>) => void;
}

export const PrescribedDuringItemList = ({ linkedData, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleItemClick = (item: any) => {
    setSelectedItem(item); // Set the clicked item as selected
    onClick(item); // Pass the item to the parent component
  };

  const totalPages = Math.ceil(
    Object.entries(linkedData).filter(([key, _]) => key !== "medications")
      .length / itemsPerPage
  );
  const currentItems = Object.entries(linkedData)
    .filter(([key, _]) => key !== "medications")
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="3xl:w-[400px] bg-slate-300 dark:bg-transparent dark:border-white py-6 border-2 border-black rounded-2xl">
      {currentItems.map(([key, value], index) => {
        return (
          <PrescribedDuringLinkItem
            key={index}
            index={index}
            type={key}
            data={value}
            onClick={() => handleItemClick(value)}
            isSelected={JSON.stringify(selectedItem) === JSON.stringify(value)}
          />
        );
      })}
      <div className="flex justify-center my-6">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};
