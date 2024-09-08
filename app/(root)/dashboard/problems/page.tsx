"use client";

import { useState, useMemo } from "react";
import { RelatedData, Problem } from "@/lib/dummyData/types";
import { usePatientStore } from "@/lib/store";
import { RouteSearchBar } from "@/components/RouteSearchBar";
import { ProblemsRelatedEventDetail } from "@/components/DashboardProblems/ProblemsRelatedEventDetail";
import { RouteResultsList } from "@/components/RouteComponents/RouteResultList";
import { RouteDetail } from "@/components/RouteComponents/RouteDetail";
import { RouteRelatedEvents } from "@/components/RouteComponents/routeRelatedEvents";

const ProblemsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);

  // state for detail display and item selection
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedProblemItem, setSelectedProblemItem] =
    useState<Problem | null>(null);

  const [selectedEventItem, setSelectedEventItem] =
    useState<RelatedData | null>(null);

  // Search Filter state
  const [diagCode, setDiagCode] = useState("");
  const [diagDesc, setDiagDesc] = useState("");
  const [probDate, setProbDate] = useState("");

  // Filter medications based on search criteria
  const filteredProblems = useMemo(() => {
    return relatedData.problems.filter((problem) => {
      const matchesDiagCode = problem.diagCode.toLowerCase().includes(diagCode);
      const matchesDiagDesc = problem.diagDesc.toLowerCase().includes(diagDesc);
      const matchesProbDate = problem.probDate.toLowerCase().includes(probDate);
      return matchesDiagCode && matchesDiagDesc && matchesProbDate;
    });
  }, [diagCode, diagDesc, probDate, relatedData.problems]);

  const handleItemClick = (item: Problem) => {
    setSelectedProblemItem(item);
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
          fieldOne={diagCode}
          fieldTwo={diagDesc}
          fieldThree={probDate}
          onFieldOneChange={setDiagCode}
          onFieldTwoChange={setDiagDesc}
          onFieldThreeChange={setProbDate}
          fieldOneTitle="Diagnosis Code"
          fieldTwoTitle="Description"
          fieldThreeTitle="Problem Date"
          fieldOnePlaceholder="Enter Diagnosis Code"
          fieldTwoPlaceholder="Enter Description"
          fieldThreePlaceholder="Enter Problem Date"
        />
      </div>
      <div className="flex w-full h-full">
        <div className="3xl:w-[510px] w-[410px] h-full">
          <RouteResultsList<Problem, Problem>
            sectionTitle="Problems"
            ignoreType="problems"
            onClick={handleItemClick}
            data={filteredProblems}
            setDetailDisplayOpen={setDetailDisplayOpen}
            setSelectedEventItem={setSelectedEventItem}
            detailDisplayOpen={detailDisplayOpen}
            selectedEntityItem={selectedProblemItem}
            relatedData={relatedData}
            encounterNumber={selectedProblemItem?.encounterNumber}
            onEventClick={handleEventClick}
          />
          <div className="h-[200px]" />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedProblemItem && (
              <RouteDetail
                detailTitle="Problem Details"
                item={selectedProblemItem}
              />
            )}
          </div>
          <div className="tablet:flex hidden pb-[200px]">
            <div className="ml-4 mt-6">
              {detailDisplayOpen && selectedProblemItem && (
                <RouteRelatedEvents
                  ignoreType="problems"
                  relatedData={relatedData}
                  encounterNumber={selectedProblemItem?.encounterNumber}
                  onEventClick={handleEventClick}
                />
              )}
            </div>

            {selectedEventItem && (
              <ProblemsRelatedEventDetail eventItem={selectedEventItem} />
            )}
          </div>
        </div>
      </div>
      <div className="h-[200px]" />
    </section>
  );
};
export default ProblemsPage;
