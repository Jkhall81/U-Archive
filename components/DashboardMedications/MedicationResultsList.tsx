"use client";

import { useState } from "react";
import { Medication } from "@/lib/dummyData/types";
import { MedicationResultItem } from "./MedicationResultItem";
import { PaginationComponent } from "../Pagination";

interface Props {
  medications: Medication[];
  onClick: (item: Medication) => void;
  setDetailDisplayOpen: (isOpen: boolean) => void;
  setSelectedEventItem: (item: null) => void;
}

export const MedicationResultsList = ({
  medications,
  onClick,
  setDetailDisplayOpen,
  setSelectedEventItem,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<Medication | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (item: Medication) => {
    setSelectedItem(item);
    onClick(item);
  };

  const totalPages = Math.ceil(medications.length / itemsPerPage);
  const currentItems = medications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="border-2 border-black bg-slate-300 dark:bg-transparent dark:border-white mt-6 rounded-3xl">
      <h2 className="text-2xl 3xl:text-4xl text-center mt-6 font-semibold pb-6">
        Medications
      </h2>
      {currentItems.map((x, index) => (
        <MedicationResultItem
          index={index}
          key={index}
          startDate={x.startDate}
          medicationName={x.medicationName}
          endDate={x.endDate}
          dose={x.dose}
          doseUnit={x.doseUnit}
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
