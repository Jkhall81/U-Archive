"use client";

import { useState } from "react";
import { Lab } from "@/lib/dummyData/types";
import { usePatientStore } from "@/lib/store";
import { LabsResultsList } from "@/components/DashboardLabs/LabsResultsList";
import { LabsDetail } from "@/components/DashboardLabs/LabsDetail";

const LabsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedLabItem, setSelectedLabItem] = useState<Lab | null>(null);

  const handleItemClick = (item: Lab) => {
    setSelectedLabItem(item);
    setDetailDisplayOpen(true);
  };
  return (
    <section className="w-full h-full flex">
      <div className="w-[20vw] h-full">
        <LabsResultsList onClick={handleItemClick} data={relatedData.labs} />
      </div>
      <div className="w-full ml-4">
        {detailDisplayOpen && selectedLabItem && (
          <LabsDetail item={selectedLabItem} />
        )}
      </div>
    </section>
  );
};
export default LabsPage;
