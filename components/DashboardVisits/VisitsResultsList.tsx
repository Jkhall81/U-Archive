"use client";

import { useState } from "react";
import { Visit } from "@/lib/dummyData/types";
import { VisitsResultItem } from "./VisitsResultItem";

interface Props {
  visits: Visit[];
  onClick: (item: Visit) => void;
}

export const VisitsResultsList = ({ visits, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Visit | null>(null);

  const handleClick = (item: Visit) => {
    setSelectedItem(item);
    onClick(item);
  };
  return (
    <section className="border-2 border-black dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 pb-6 font-semibold">Visits</h2>
      {visits.map((x, index) => (
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
    </section>
  );
};
