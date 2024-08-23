"use client";

import { useState } from "react";
import HistoryResultsList from "@/components/DashboardHistory/HistoryResultsList";
import { usePatientStore } from "@/lib/store";
import { HistoryItem } from "@/lib/dummyData/types";
import HistoryDetail from "@/components/DashboardHistory/HistoryDetail";

const HistoryPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedHistoryItem, setSelectedHistoryItem] =
    useState<HistoryItem | null>(null);

  const handleItemClick = (item: HistoryItem) => {
    setSelectedHistoryItem(item);
    setDetailDisplayOpen(true);
  };

  return (
    <section className="w-full h-full flex">
      <div className="w-[20vw] h-full">
        <HistoryResultsList
          onClick={handleItemClick}
          history={relatedData.history}
        />
      </div>
      <div className="w-full ml-4">
        {detailDisplayOpen && selectedHistoryItem && (
          <HistoryDetail item={selectedHistoryItem} />
        )}
      </div>
    </section>
  );
};
export default HistoryPage;
