"use client";

import { useState } from "react";
import { RelatedData } from "@/lib/dummyData/types";
import { VisitsRelatedEventLinkItem } from "./VisitsRelatedEventLinkItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  linkedData: Partial<RelatedData>;
  onClick: (item: Partial<RelatedData>) => void;
}

export const VisitsRelatedEventItemList = ({ linkedData, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleItemClick = (item: any) => {
    setSelectedItem(item); // Set the clicked item as selected
    onClick(item); // Pass the item to the parent component
  };

  const totalPages = Math.ceil(
    Object.entries(linkedData).filter(([key, _]) => key !== "visits").length /
      itemsPerPage
  );
  const currentItems = Object.entries(linkedData)
    .filter(([key, _]) => key !== "visits")
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="w-[15vw]">
      {currentItems.map(([key, value], index) => {
        return (
          <VisitsRelatedEventLinkItem
            key={index}
            index={index}
            type={key}
            data={value}
            onClick={() => handleItemClick(value)}
            isSelected={selectedItem === value}
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
