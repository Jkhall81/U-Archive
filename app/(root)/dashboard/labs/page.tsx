"use client";

import { usePatientStore } from "@/lib/store";
import { LabsResultsList } from "@/components/DashboardLabs/LabsResultsList";

const LabsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <LabsResultsList data={relatedData.labs} />
        <div className="h-[100px]" />
      </div>
    </section>
  );
};
export default LabsPage;
