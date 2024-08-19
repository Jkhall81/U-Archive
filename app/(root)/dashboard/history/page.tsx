"use client";

import { useState } from "react";
import HistoryResultsList from "@/components/DashboardHistory/HistoryResultsList";
import { usePatientStore } from "@/lib/store";
import { HistoryItem } from "@/lib/dummyData/types";
import HistoryDetail from "@/components/DashboardHistory/HistoryDetail";

const HistoryPage = () => {
  const selectedPatient = usePatientStore((state) => state.selectedPatient);
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedHistoryItem, setSelectedHistoryItem] =
    useState<HistoryItem | null>(null);

  const handleItemClick = (item: HistoryItem) => {
    setSelectedHistoryItem(item);
    setDetailDisplayOpen(true);
  };

  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <HistoryResultsList
          onClick={handleItemClick}
          history={relatedData.history}
        />
        {detailDisplayOpen && selectedHistoryItem && (
          <HistoryDetail
            item={selectedHistoryItem}
            onClose={() => setDetailDisplayOpen(false)}
          />
        )}
        <div className="h-[100px]" />
      </div>
    </section>
  );
};
export default HistoryPage;
