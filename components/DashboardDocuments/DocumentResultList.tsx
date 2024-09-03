"use client";

import { useState } from "react";
import { DocumentResultItem } from "./DocumentResultItem";
import { Document } from "@/lib/dummyData/types";
import { PaginationComponent } from "../Pagination";

interface Props {
  data: Document[];
  onClick: (item: Document) => void;
  setDetailDisplayOpen: (isOpen: boolean) => void;
  setSelectedEventItem: (item: null) => void;
}

export const DocumentResultList = ({
  data,
  onClick,
  setDetailDisplayOpen,
  setSelectedEventItem,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<Document | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (item: Document) => {
    setSelectedItem(item);
    onClick(item);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="border-2 border-black dark:bg-transparent bg-slate-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-2xl 3xl:text-4xl text-center mt-6 font-semibold">
        Documents
      </h2>
      {currentItems.map((x, index) => (
        <DocumentResultItem
          key={index}
          index={index}
          documentName={x.documentName}
          documentType={x.documentType}
          documentDate={x.documentDate}
          encounterNumber={x.encounterNumber}
          documentPath={x.documentPath}
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
