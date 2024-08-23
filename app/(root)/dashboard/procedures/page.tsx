"use client";

import { useState } from "react";
import { Procedure } from "@/lib/dummyData/types";
import { ProceduresDetail } from "@/components/DashboardProcedures/ProceduresDetail";
import { usePatientStore } from "@/lib/store";
import { ProceduresResultsList } from "@/components/DashboardProcedures/ProceduresResultsList";

const ProceduresPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedProcedureItem, setSelectedProcedureItem] =
    useState<Procedure | null>(null);

  const handleItemClick = (item: Procedure) => {
    setSelectedProcedureItem(item);
    setDetailDisplayOpen(true);
  };

  return (
    <section className="w-full h-full flex">
      <div className="w-[20vw] h-full">
        <ProceduresResultsList
          onClick={handleItemClick}
          data={relatedData.procedures}
        />
      </div>
      <div className="w-full ml-4">
        {detailDisplayOpen && selectedProcedureItem && (
          <ProceduresDetail item={selectedProcedureItem} />
        )}
      </div>
    </section>
  );
};
export default ProceduresPage;
