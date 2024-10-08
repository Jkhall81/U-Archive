"use client";

import { useState, useMemo } from "react";
import { RelatedData, Visit } from "@/lib/dummyData/types";
import { usePatientStore } from "@/lib/store";
import { RouteSearchBar } from "@/components/RouteSearchBar";
import { VisitsRelatedEventDetail } from "@/components/DashboardVisits/VisitsRelatedEventDetail";
import { RouteResultsList } from "@/components/RouteComponents/RouteResultList";
import { RouteDetail } from "@/components/RouteComponents/RouteDetail";
import { RouteRelatedEvents } from "@/components/RouteComponents/routeRelatedEvents";

const VisitsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);

  // state for detail display and item selection
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedVisitItem, setSelectedVisitItem] = useState<Visit | null>(
    null
  );

  const [selectedEventItem, setSelectedEventItem] =
    useState<RelatedData | null>(null);

  // Search Filter state
  const [visitType, setVisitType] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [drLastName, setDrLastName] = useState("");

  // Filter medications based on search criteria
  const filteredVisits = useMemo(() => {
    return relatedData.visits.filter((visit) => {
      const matchesVisitType = visit.visitType
        .toLowerCase()
        .includes(visitType);
      const matchesVisitDate = visit.visitDate
        .toLowerCase()
        .includes(visitDate);
      const matchesDrLastName = visit.drLastName
        .toLowerCase()
        .includes(drLastName);
      return matchesVisitType && matchesVisitDate && matchesDrLastName;
    });
  }, [visitType, visitDate, drLastName, relatedData.visits]);

  const handleItemClick = (item: Visit) => {
    setSelectedVisitItem(item);
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
          fieldOne={visitType}
          fieldTwo={visitDate}
          fieldThree={drLastName}
          onFieldOneChange={setVisitType}
          onFieldTwoChange={setVisitDate}
          onFieldThreeChange={setDrLastName}
          fieldOneTitle="Visit Type"
          fieldTwoTitle="Visit Date"
          fieldThreeTitle="Physician Last Name"
          fieldOnePlaceholder="Enter Visit Type"
          fieldTwoPlaceholder="Enter Visit Date"
          fieldThreePlaceholder="Physician Last Name"
        />
      </div>
      <div className="flex w-full h-full">
        <div className="3xl:w-[510px] w-[410px] h-full">
          <RouteResultsList<Visit, Visit>
            sectionTitle="Visits"
            ignoreType="visits"
            onClick={handleItemClick}
            data={filteredVisits}
            setDetailDisplayOpen={setDetailDisplayOpen}
            setSelectedEventItem={setSelectedEventItem}
            detailDisplayOpen={detailDisplayOpen}
            selectedEntityItem={selectedVisitItem}
            relatedData={relatedData}
            encounterNumber={selectedVisitItem?.encounterNumber}
            onEventClick={handleEventClick}
          />
          <div className="h-[200px]" />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedVisitItem && (
              <RouteDetail
                detailTitle="Visit Details"
                item={selectedVisitItem}
              />
            )}
          </div>
          <div className="tablet:flex pb-[200px]">
            <div className="ml-4 mt-6 hidden tablet:flex">
              {detailDisplayOpen && selectedVisitItem && (
                <RouteRelatedEvents
                  ignoreType="visits"
                  relatedData={relatedData}
                  encounterNumber={selectedVisitItem?.encounterNumber}
                  onEventClick={handleEventClick}
                />
              )}
            </div>
            <div className="ml-4 tablet:w-full tablet:ml-0 tablet:mr-6">
              {selectedEventItem && (
                <VisitsRelatedEventDetail eventItem={selectedEventItem} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200px]" />
    </section>
  );
};
export default VisitsPage;
