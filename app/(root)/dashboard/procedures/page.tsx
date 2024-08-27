"use client";

import { useState, useMemo } from "react";
import { Procedure, RelatedData } from "@/lib/dummyData/types";
import { ProceduresDetail } from "@/components/DashboardProcedures/ProceduresDetail";
import { usePatientStore } from "@/lib/store";
import { ProceduresResultsList } from "@/components/DashboardProcedures/ProceduresResultsList";
import { ProceduresSearchBar } from "@/components/DashboardProcedures/ProceduresSearchBar";
import { ProceduresRelatedEvents } from "@/components/DashboardProcedures/ProceduresRelatedEvents";
import { ProceduresRelatedEventDetail } from "@/components/DashboardProcedures/ProceduresRelatedEventDetail";

const ProceduresPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedProcedureItem, setSelectedProcedureItem] =
    useState<Procedure | null>(null);

  const [selectedEventItem, setSelectedEventItem] =
    useState<RelatedData | null>(null);

  // Search Filter state
  const [testName, setTestName] = useState("");
  const [facilityName, setFacilityName] = useState("");
  const [testDate, setTestDate] = useState("");

  // Filter medications based on search criteria
  const filteredProcedures = useMemo(() => {
    return relatedData.procedures.filter((procedure) => {
      const matchesTestName = procedure.testName
        .toLowerCase()
        .includes(testName);
      const matchesFacilityName = procedure.facilityName
        .toLowerCase()
        .includes(facilityName);
      const matchesTestDate = procedure.testDate
        .toLowerCase()
        .includes(testDate);
      return matchesTestName && matchesFacilityName && matchesTestDate;
    });
  }, [testName, facilityName, testDate, relatedData.procedures]);

  const handleItemClick = (item: Procedure) => {
    setSelectedProcedureItem(item);
    setDetailDisplayOpen(true);
    setSelectedEventItem(null);
  };

  const handleEventClick = (eventItem: any) => {
    setSelectedEventItem(eventItem);
  };

  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-[300px] mt-6">
        <ProceduresSearchBar
          testName={testName}
          facilityName={facilityName}
          testDate={testDate}
          onTestNameChange={setTestName}
          onFacilityNameChange={setFacilityName}
          onTestDateChange={setTestDate}
        />
      </div>
      <div className="flex w-full h-full">
        <div className="w-[20vw] h-full">
          <ProceduresResultsList
            onClick={handleItemClick}
            data={filteredProcedures}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedProcedureItem && (
              <ProceduresDetail item={selectedProcedureItem} />
            )}
          </div>
          <div className="flex pb-[200px]">
            <div className="ml-4 mt-6">
              {detailDisplayOpen && selectedProcedureItem && (
                <ProceduresRelatedEvents
                  relatedData={relatedData}
                  encounterNumber={selectedProcedureItem?.encounterNumber}
                  onEventClick={handleEventClick}
                />
              )}
            </div>

            {selectedEventItem && (
              <ProceduresRelatedEventDetail eventItem={selectedEventItem} />
            )}
          </div>
        </div>
      </div>
      <div className="h-[200px]" />
    </section>
  );
};
export default ProceduresPage;
