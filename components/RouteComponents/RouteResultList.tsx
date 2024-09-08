"use client";

import { useState } from "react";
import {
  Lab,
  Document,
  HistoryItem,
  Medication,
  Problem,
  Procedure,
  Visit,
  RelatedData,
} from "@/lib/dummyData/types";
import { getResultsItemProps } from "./UtilityFunctions";
import { RouteResultsItem } from "./RouteResultsItem";
import { PaginationComponent } from "../Pagination";
import { RouteRelatedEvents } from "./routeRelatedEvents";

interface Props<T> {
  data: T[];
  onClick: (item: T) => void;
  setDetailDisplayOpen: (isOpen: boolean) => void;
  setSelectedEventItem: (item: null) => void;
  sectionTitle: string;
  encounterNumber: string | undefined;
  relatedData: RelatedData;
  onEventClick: (item: Partial<RelatedData>) => void;
  detailDisplayOpen: boolean;
  selectedMedicationItem: Medication | null;
}

export const RouteResultsList = <
  T extends
    | Lab
    | Document
    | HistoryItem
    | Medication
    | Problem
    | Procedure
    | Visit
>({
  data,
  onClick,
  setDetailDisplayOpen,
  setSelectedEventItem,
  sectionTitle,
  selectedMedicationItem,
  detailDisplayOpen,
  relatedData,
  encounterNumber,
  onEventClick,
}: Props<T>) => {
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (item: T) => {
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
        {sectionTitle}
      </h2>
      {currentItems.map((x, index) => {
        const { fieldName, fieldDate } = getResultsItemProps(x);
        const isSelected = selectedItem === x;
        return (
          <div key={index}>
            <RouteResultsItem
              index={index}
              fieldName={fieldName}
              fieldDate={fieldDate}
              onClick={() => handleClick(x)}
              isSelected={isSelected}
            />

            {/* Conditionally render RouteRelatedEvents right after the selected item */}
            {isSelected && detailDisplayOpen && selectedMedicationItem && (
              <div className="mx-2 mt-4 tablet:hidden">
                <RouteRelatedEvents
                  ignoreType="medications"
                  relatedData={relatedData}
                  encounterNumber={encounterNumber}
                  onEventClick={onEventClick}
                />
              </div>
            )}
          </div>
        );
      })}

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
