"use client";

import { useState, useMemo } from "react";
import { RelatedData, Problem } from "@/lib/dummyData/types";
import { usePatientStore } from "@/lib/store";
import { ProblemsResultList } from "@/components/DashboardProblems/ProblemsResultList";
import { RouteSearchBar } from "@/components/RouteSearchBar";
import { ProblemDetail } from "@/components/DashboardProblems/ProblemDetail";
import { ProblemsRelatedEvents } from "@/components/DashboardProblems/ProblemsRelatedEvents";
import { ProblemsRelatedEventDetail } from "@/components/DashboardProblems/ProblemsRelatedEventDetail";

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
          <ProblemsResultList
            onClick={handleItemClick}
            data={filteredProblems}
            setDetailDisplayOpen={setDetailDisplayOpen}
            setSelectedEventItem={setSelectedEventItem}
          />
          <div className="h-[200px]" />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedProblemItem && (
              <ProblemDetail item={selectedProblemItem} />
            )}
          </div>
          <div className="flex pb-[200px]">
            <div className="ml-4 mt-6">
              {detailDisplayOpen && selectedProblemItem && (
                <ProblemsRelatedEvents
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
