"use client";

import { usePatientStore } from "@/lib/store";
import { ProblemsResultList } from "@/components/DashboardProblems/ProblemsResultList";

const ProblemsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <ProblemsResultList data={relatedData.problems} />
        <div className="h-[100px]" />
      </div>
    </section>
  );
};
export default ProblemsPage;
