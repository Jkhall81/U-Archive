"use client";

import { usePatientStore } from "@/lib/store";
import { ProceduresResultsList } from "@/components/DashboardProcedures/ProceduresResultsList";

const ProceduresPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <ProceduresResultsList data={relatedData.procedures} />
        <div className="h-[100px]" />
      </div>
    </section>
  );
};
export default ProceduresPage;
