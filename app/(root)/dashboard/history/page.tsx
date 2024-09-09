"use client";

import { useState, useMemo } from "react";
import { usePatientStore } from "@/lib/store";
import { RouteSearchBar } from "@/components/RouteSearchBar";
import { HistoryItem, RelatedData } from "@/lib/dummyData/types";
import { HistoryRelatedEventDetail } from "@/components/DashboardHistory/HistoryRelatedEventDetail";
import { RouteResultsList } from "@/components/RouteComponents/RouteResultList";
import { RouteDetail } from "@/components/RouteComponents/RouteDetail";
import { RouteRelatedEvents } from "@/components/RouteComponents/routeRelatedEvents";

const HistoryPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedHistoryItem, setSelectedHistoryItem] =
    useState<HistoryItem | null>(null);

  const [selectedEventItem, setSelectedEventItem] =
    useState<RelatedData | null>(null);

  // Search Filter state
  const [item, setItem] = useState("");
  const [historyCategory, setHistoryCategory] = useState("");
  const [date, setDate] = useState("");

  // Filter medications based on search criteria
  const filteredHistory = useMemo(() => {
    return relatedData.history.filter((history) => {
      const matchesItem = history.item
        .toLowerCase()
        .includes(item.toLowerCase());
      const matchesHistoryCategory = history.historyCategory
        .toLowerCase()
        .includes(historyCategory);
      const matchesDate = history.date.toLowerCase().includes(date);
      return matchesItem && matchesHistoryCategory && matchesDate;
    });
  }, [item, historyCategory, date, relatedData.history]);

  const handleItemClick = (item: HistoryItem) => {
    setSelectedHistoryItem(item);
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
          fieldOne={item}
          fieldTwo={historyCategory}
          fieldThree={date}
          onFieldOneChange={setItem}
          onFieldTwoChange={setHistoryCategory}
          onFieldThreeChange={setDate}
          fieldOneTitle="History Item"
          fieldTwoTitle="History Category"
          fieldThreeTitle="Date"
          fieldOnePlaceholder="Enter Item Name"
          fieldTwoPlaceholder="Enter Category"
          fieldThreePlaceholder="Enter Date"
        />
      </div>
      <div className="flex w-full h-full">
        <div className="3xl:w-[510px] w-[410px] h-full">
          <RouteResultsList<HistoryItem, HistoryItem>
            sectionTitle="History"
            ignoreType="history"
            onClick={handleItemClick}
            data={filteredHistory}
            setDetailDisplayOpen={setDetailDisplayOpen}
            setSelectedEventItem={setSelectedEventItem}
            detailDisplayOpen={detailDisplayOpen}
            selectedEntityItem={selectedHistoryItem}
            relatedData={relatedData}
            encounterNumber={selectedHistoryItem?.encounterNumber}
            onEventClick={handleEventClick}
          />
          <div className="h-[200px]" />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedHistoryItem && (
              <RouteDetail
                detailTitle="History Details"
                item={selectedHistoryItem}
              />
            )}
          </div>

          <div className="tablet:flex pb-[200px]">
            <div className="ml-4 mt-6 hidden tablet:flex">
              {detailDisplayOpen && selectedHistoryItem && (
                <RouteRelatedEvents
                  ignoreType="history"
                  relatedData={relatedData}
                  encounterNumber={selectedHistoryItem?.encounterNumber}
                  onEventClick={handleEventClick}
                />
              )}
            </div>
            <div className="ml-4 tablet:w-full tablet:ml-0 tablet:mr-6">
              {selectedEventItem && (
                <HistoryRelatedEventDetail eventItem={selectedEventItem} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200px]" />
    </section>
  );
};
export default HistoryPage;
