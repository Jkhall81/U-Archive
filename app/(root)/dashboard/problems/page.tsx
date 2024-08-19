"use client";

import { usePatientStore } from "@/lib/store";

const ProblemsPage = () => {
  const selectedPatient = usePatientStore((state) => state.selectedPatient);
  const relatedData = usePatientStore((state) => state.relatedData);
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <div className="h-[100px]" />
      </div>
    </section>
  );
};
export default ProblemsPage;
