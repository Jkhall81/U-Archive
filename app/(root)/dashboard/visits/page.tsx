"use client";

import { usePatientStore } from "@/lib/store";
import { VisitsResultsList } from "@/components/DashboardVisits/VisitsResultsList";

const VisitsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <VisitsResultsList visits={relatedData.visits} />
        <div className="h-[100px]" />
      </div>
    </section>
  );
};
export default VisitsPage;
