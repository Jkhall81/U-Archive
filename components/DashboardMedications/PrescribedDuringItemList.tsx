"use client";

import { useState } from "react";
import { RelatedData } from "@/lib/dummyData/types";
import { PrescribedDuringLinkItem } from "./PrescribedDuringLinkItem";

interface Props {
  linkedData: Partial<RelatedData>;
  onClick: (item: Partial<RelatedData>) => void;
}

export const PrescribedDuringItemList = ({ linkedData, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const handleItemClick = (item: any) => {
    setSelectedItem(item); // Set the clicked item as selected
    onClick(item); // Pass the item to the parent component
  };
  return (
    <section className="w-[15vw]">
      {Object.entries(linkedData)
        .filter(([key, _]) => key !== "medications")
        .map(([key, value], index) => {
          return (
            <PrescribedDuringLinkItem
              key={index}
              index={index}
              type={key}
              data={value}
              onClick={() => handleItemClick(value)}
              isSelected={selectedItem === value}
            />
          );
        })}
    </section>
  );
};
