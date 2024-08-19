"use client";

import { useState } from "react";
import { MedicationResultsList } from "@/components/DashboardMedications/MedicationResultsList";
import { usePatientStore } from "@/lib/store";
import { Medication } from "@/lib/dummyData/types";
import { MedicationDetail } from "@/components/DashboardMedications/MedicationDetail";
const MedicationsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedMedicationItem, setSelectedMedicationItem] =
    useState<Medication | null>(null);

  const handleItemClick = (item: Medication) => {
    setSelectedMedicationItem(item);
    setDetailDisplayOpen(true);
  };
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <MedicationResultsList
          onClick={handleItemClick}
          medications={relatedData.medications}
        />
        {detailDisplayOpen && selectedMedicationItem && (
          <MedicationDetail
            item={selectedMedicationItem}
            onClose={() => setDetailDisplayOpen(false)}
          />
        )}
        <div className="h-[100px]" />
      </div>
    </section>
  );
};
export default MedicationsPage;
