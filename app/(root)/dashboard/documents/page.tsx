"use client";

import { DocumentResultList } from "@/components/DashboardDocuments/DocumentResultList";
import { usePatientStore } from "@/lib/store";

const DocumentsPage = () => {
  const relatedData = usePatientStore((state) => state.relatedData);
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <DocumentResultList data={relatedData.documents} />
        <div className="h-[100px]" />
      </div>
    </section>
  );
};
export default DocumentsPage;
