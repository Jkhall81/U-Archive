"use client";

import { useState } from "react";
import { RelatedData } from "@/lib/dummyData/types";
import { RouteRelatedEventLinkItem } from "./RouteRelatedEventLinkItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  linkedData: Partial<RelatedData>;
  onClick: (item: Partial<RelatedData>) => void;
  ignoreType: string;
}

export const RouteRelatedEventItemList = ({
  linkedData,
  onClick,
  ignoreType,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleItemClick = (item: any) => {
    setSelectedItem(item); // Set the clicked item as selected
    onClick(item); // Pass the item to the parent component
  };

  const totalPages = Math.ceil(
    Object.entries(linkedData).filter(([key, _]) => key !== ignoreType).length /
      itemsPerPage
  );
  const currentItems = Object.entries(linkedData)
    .filter(([key, _]) => key !== ignoreType)
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="3xl:w-[400px] py-6 border-2 border-black dark:border-white rounded-2xl dark:bg-neutral-500 tablet:dark:bg-transparent tablet:bg-slate-300 bg-neutral-100">
      {currentItems.map(([key, value], index) => {
        return (
          <RouteRelatedEventLinkItem
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
