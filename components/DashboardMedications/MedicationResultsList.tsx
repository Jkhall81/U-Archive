"use client";

import { useState } from "react";
import { Medication } from "@/lib/dummyData/types";
import { MedicationResultItem } from "./MedicationResultItem";

interface Props {
  medications: Medication[];
  onClick: (item: Medication) => void;
}

export const MedicationResultsList = ({ medications, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Medication | null>(null);

  const handleClick = (item: Medication) => {
    setSelectedItem(item);
    onClick(item);
  };
  return (
    <section className="border-2 border-neutral-300 dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 font-semibold pb-6">
        Medications
      </h2>
      {medications.map((x, index) => (
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
    </section>
  );
};
