"use client";

import { useState } from "react";
import { RelatedData } from "@/lib/dummyData/types";
import { HistoryRelatedEventLinkItem } from "./HistoryRelatedEventLinkItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  linkedData: Partial<RelatedData>;
  onClick: (item: Partial<RelatedData>) => void;
}

export const HistoryRelatedEventItemList = ({ linkedData, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleItemClick = (item: any) => {
    setSelectedItem(item); // Set the clicked item as selected
    onClick(item); // Pass the item to the parent component
  };

  const totalPages = Math.ceil(
    Object.entries(linkedData).filter(([key, _]) => key !== "history").length /
      itemsPerPage
  );
  const currentItems = Object.entries(linkedData)
    .filter(([key, _]) => key !== "history")
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="w-[15vw] py-6 border-2 dark:bg-transparent bg-slate-300 dark:border-white border-black rounded-2xl">
      {currentItems.map(([key, value], index) => {
        console.log("SELECTED ITEM", selectedItem);
        console.log("VALUE", value);
        return (
          <HistoryRelatedEventLinkItem
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
