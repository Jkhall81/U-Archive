"use client";

import { useState, useMemo } from "react";
import { Procedure, RelatedData } from "@/lib/dummyData/types";
import { usePatientStore } from "@/lib/store";
import { RouteSearchBar } from "@/components/RouteSearchBar";
import { ProceduresRelatedEventDetail } from "@/components/DashboardProcedures/ProceduresRelatedEventDetail";
import { RouteRelatedEvents } from "@/components/RouteComponents/routeRelatedEvents";
import { RouteDetail } from "@/components/RouteComponents/RouteDetail";
import { RouteResultsList } from "@/components/RouteComponents/RouteResultList";

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
        <RouteSearchBar
          fieldOne={testName}
          fieldTwo={facilityName}
          fieldThree={testDate}
          onFieldOneChange={setTestName}
          onFieldTwoChange={setFacilityName}
          onFieldThreeChange={setTestDate}
          fieldOneTitle="Test Name"
          fieldTwoTitle="Facility Name"
          fieldThreeTitle="Test Date"
          fieldOnePlaceholder="Enter Test Name"
          fieldTwoPlaceholder="Enter Facility Name"
          fieldThreePlaceholder="Enter Test Date"
        />
      </div>
      <div className="flex w-full h-full">
        <div className="3xl:w-[510px] w-[410px] h-full">
          <RouteResultsList<Procedure, Procedure>
            sectionTitle="Procedures"
            ignoreType="procedures"
            onClick={handleItemClick}
            data={filteredProcedures}
            setDetailDisplayOpen={setDetailDisplayOpen}
            setSelectedEventItem={setSelectedEventItem}
            detailDisplayOpen={detailDisplayOpen}
            selectedEntityItem={selectedProcedureItem}
            relatedData={relatedData}
            encounterNumber={selectedProcedureItem?.encounterNumber}
            onEventClick={handleEventClick}
          />
          <div className="h-[200px]" />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedProcedureItem && (
              <RouteDetail
                detailTitle="Procedure Details"
                item={selectedProcedureItem}
              />
            )}
          </div>
          <div className="tablet:flex pb-[200px]">
            <div className="ml-4 mt-6 hidden tablet:flex">
              {detailDisplayOpen && selectedProcedureItem && (
                <RouteRelatedEvents
                  ignoreType="procedures"
                  relatedData={relatedData}
                  encounterNumber={selectedProcedureItem?.encounterNumber}
                  onEventClick={handleEventClick}
                />
              )}
            </div>
            <div className="ml-4 tablet:w-full tablet:ml-0 tablet:mr-6">
              {selectedEventItem && (
                <ProceduresRelatedEventDetail eventItem={selectedEventItem} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200px]" />
    </section>
  );
};
export default ProceduresPage;
