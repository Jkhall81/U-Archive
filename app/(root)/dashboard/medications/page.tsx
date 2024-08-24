"use client";

import { useState } from "react";
import { RelatedData } from "@/lib/dummyData/types";
import { MedicationResultsList } from "@/components/DashboardMedications/MedicationResultsList";
import { usePatientStore } from "@/lib/store";
import { Medication } from "@/lib/dummyData/types";
import { MedicationDetail } from "@/components/DashboardMedications/MedicationDetail";
import { MedicationSearchBar } from "@/components/DashboardMedications/MedicationSearchBar";
import { MedicationPrescribedDuring } from "@/components/DashboardMedications/MedicationPrescribedDuring";
import { RelatedEventDetail } from "@/components/DashboardMedications/RelatedEventDetail";
const MedicationsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedMedicationItem, setSelectedMedicationItem] =
    useState<Medication | null>(null);

  const [selectedEventItem, setSelectedEventItem] =
    useState<RelatedData | null>(null);

  const handleItemClick = (item: Medication) => {
    setSelectedMedicationItem(item);
    setDetailDisplayOpen(true);
    setSelectedEventItem(null);
  };

  const handleEventClick = (eventItem: any) => {
    setSelectedEventItem(eventItem);
  };
  console.log("Event Item", selectedEventItem);
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-[300px] mt-6">
        <MedicationSearchBar />
      </div>
      <div className="flex w-full h-full">
        <div className="w-[20vw] h-full">
          <MedicationResultsList
            onClick={handleItemClick}
            medications={relatedData.medications}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedMedicationItem && (
              <MedicationDetail item={selectedMedicationItem} />
            )}
          </div>
          <div className="flex">
            <div className="ml-4 mt-6">
              {detailDisplayOpen && selectedMedicationItem && (
                <MedicationPrescribedDuring
                  relatedData={relatedData}
                  encounterNumber={selectedMedicationItem?.encounterNumber}
                  onEventClick={handleEventClick}
                />
              )}
            </div>

            {selectedEventItem && (
              <RelatedEventDetail eventItem={selectedEventItem} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MedicationsPage;
