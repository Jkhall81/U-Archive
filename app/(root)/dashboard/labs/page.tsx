"use client";

import { useState, useMemo } from "react";
import { Lab, RelatedData } from "@/lib/dummyData/types";
import { usePatientStore } from "@/lib/store";
import { RouteSearchBar } from "@/components/RouteSearchBar";
import { LabsRelatedEventDetail } from "@/components/DashboardLabs/LabsRelatedEventDetail";
import { RouteResultsList } from "@/components/RouteComponents/RouteResultList";
import { RouteDetail } from "@/components/RouteComponents/RouteDetail";
import { RouteRelatedEvents } from "@/components/RouteComponents/routeRelatedEvents";

const LabsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedLabItem, setSelectedLabItem] = useState<Lab | null>(null);

  const [selectedEventItem, setSelectedEventItem] =
    useState<RelatedData | null>(null);

  // Search Filter state
  const [testName, setTestName] = useState("");
  const [labName, setLabName] = useState("");
  const [testDate, setTestDate] = useState("");

  // Filter medications based on search criteria
  const filteredLabs = useMemo(() => {
    return relatedData.labs.filter((lab) => {
      const matchesTestName = lab.testName
        .toLowerCase()
        .includes(testName.toLowerCase());
      const matchesLabName = lab.labName.includes(labName);
      const matchesTestDate = lab.testDate.toLowerCase().includes(testDate);
      return matchesTestName && matchesLabName && matchesTestDate;
    });
  }, [testName, labName, testDate, relatedData.labs]);

  const handleItemClick = (item: Lab) => {
    setSelectedLabItem(item);
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
          fieldTwo={labName}
          fieldThree={testDate}
          onFieldOneChange={setTestName}
          onFieldTwoChange={setLabName}
          onFieldThreeChange={setTestDate}
          fieldOneTitle="Test Name"
          fieldTwoTitle="Lab Name"
          fieldThreeTitle="Test Date"
          fieldOnePlaceholder="Enter Test Name"
          fieldTwoPlaceholder="Enter Lab Name"
          fieldThreePlaceholder="Enter Test Date"
        />
      </div>
      <div className="flex w-full h-full">
        <div className="3xl:w-[510px] w-[410px] h-full">
          <RouteResultsList<Lab, Lab>
            sectionTitle="Labs"
            ignoreType="labs"
            onClick={handleItemClick}
            data={filteredLabs}
            setDetailDisplayOpen={setDetailDisplayOpen}
            setSelectedEventItem={setSelectedEventItem}
            detailDisplayOpen={detailDisplayOpen}
            selectedEntityItem={selectedLabItem}
            relatedData={relatedData}
            encounterNumber={selectedLabItem?.encounterNumber}
            onEventClick={handleEventClick}
          />
          <div className="h-[200px]" />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedLabItem && (
              <RouteDetail detailTitle="Lab Details" item={selectedLabItem} />
            )}
          </div>
          <div className="tablet:flex hidden pb-[200px]">
            <div className="ml-4 mt-6">
              {detailDisplayOpen && selectedLabItem && (
                <RouteRelatedEvents
                  ignoreType="labs"
                  relatedData={relatedData}
                  encounterNumber={selectedLabItem?.encounterNumber}
                  onEventClick={handleEventClick}
                />
              )}
            </div>

            {selectedEventItem && (
              <LabsRelatedEventDetail eventItem={selectedEventItem} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default LabsPage;
