"use client";

import { useState, useMemo } from "react";
import { RelatedData, Medication } from "@/lib/dummyData/types";
import { RouteSearchBar } from "@/components/RouteSearchBar";
import { usePatientStore } from "@/lib/store";
import { RelatedEventDetail } from "@/components/DashboardMedications/RelatedEventDetail";
import { RouteResultsList } from "@/components/RouteComponents/RouteResultList";
import { RouteDetail } from "@/components/RouteComponents/RouteDetail";
import { RouteRelatedEvents } from "@/components/RouteComponents/routeRelatedEvents";

const MedicationsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedMedicationItem, setSelectedMedicationItem] =
    useState<Medication | null>(null);

  const [selectedEventItem, setSelectedEventItem] =
    useState<RelatedData | null>(null);

  // Search Filter state
  const [medicationName, setMedicationName] = useState("");
  const [doseStrength, setDoseStrength] = useState("");
  const [physicianLastName, setPhysicianLastName] = useState("");

  // Filter medications based on search criteria
  const filteredMedications = useMemo(() => {
    return relatedData.medications.filter((medication) => {
      const matchesName = medication.medicationName
        .toLowerCase()
        .includes(medicationName.toLowerCase());
      const matchesDose = medication.dose.toString().includes(doseStrength);
      const matchesPhysician = medication.drLastName
        .toLowerCase()
        .includes(physicianLastName.toLowerCase());
      return matchesName && matchesDose && matchesPhysician;
    });
  }, [
    medicationName,
    doseStrength,
    physicianLastName,
    relatedData.medications,
  ]);

  const handleItemClick = (item: Medication) => {
    setSelectedMedicationItem(item);
    setDetailDisplayOpen(true);
    setSelectedEventItem(null);
  };

  const handleEventClick = (eventItem: any) => {
    setSelectedEventItem(eventItem);
  };
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-[300px] mt-6">
        <RouteSearchBar
          fieldOne={medicationName}
          fieldTwo={doseStrength}
          fieldThree={physicianLastName}
          onFieldOneChange={setMedicationName}
          onFieldTwoChange={setDoseStrength}
          onFieldThreeChange={setPhysicianLastName}
          fieldOneTitle="Medication Name"
          fieldTwoTitle="Dose Strength"
          fieldThreeTitle="Physician Last Name"
          fieldOnePlaceholder="Enter Medication Name"
          fieldTwoPlaceholder="Dose Strength"
          fieldThreePlaceholder="Physician Last Name"
        />
      </div>
      <div className="flex w-full h-full">
        <div className="3xl:w-[510px] w-[410px] h-full">
          <RouteResultsList<Medication>
            sectionTitle="Medication"
            onClick={handleItemClick}
            data={filteredMedications}
            setDetailDisplayOpen={setDetailDisplayOpen}
            setSelectedEventItem={setSelectedEventItem}
            detailDisplayOpen={detailDisplayOpen}
            selectedMedicationItem={selectedMedicationItem}
            relatedData={relatedData}
            encounterNumber={selectedMedicationItem?.encounterNumber}
            onEventClick={handleEventClick}
          />
          <div className="h-[200px]" />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedMedicationItem && (
              <RouteDetail
                detailTitle="Medication Details"
                item={selectedMedicationItem}
              />
            )}
          </div>
          <div className="tablet:flex hidden pb-[200px]">
            <div className="ml-4 mt-6">
              {detailDisplayOpen && selectedMedicationItem && (
                <RouteRelatedEvents
                  ignoreType="medications"
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
