"use client";

import { useState, useMemo } from "react";
import { RelatedData, Document } from "@/lib/dummyData/types";
import { usePatientStore } from "@/lib/store";
import { DocumentRelatedEventDetail } from "@/components/DashboardDocuments/DocumentRelatedEventDetail";
import { RouteResultsList } from "@/components/RouteComponents/RouteResultList";
import { RouteRelatedEvents } from "@/components/RouteComponents/routeRelatedEvents";
import { RouteDetail } from "@/components/RouteComponents/RouteDetail";

import { RouteSearchBar } from "@/components/RouteSearchBar";

const DocumentsPage = () => {
  // data
  const relatedData = usePatientStore((state) => state.relatedData);

  // state for detail display and item selection
  const [detailDisplayOpen, setDetailDisplayOpen] = useState(false);
  const [selectedDocumentItem, setSelectedDocumentItem] =
    useState<Document | null>(null);

  const [selectedEventItem, setSelectedEventItem] =
    useState<RelatedData | null>(null);

  // Search Filter state
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentDate, setDocumentDate] = useState("");

  // Filter medications based on search criteria
  const filteredDocuments = useMemo(() => {
    return relatedData.documents.filter((document) => {
      const matchesName = document.documentName
        .toLowerCase()
        .includes(documentName.toLowerCase());
      const matchesType = document.documentType
        .toLowerCase()
        .toString()
        .includes(documentType);
      const matchesDate = document.documentDate
        .toLowerCase()
        .includes(documentDate.toLowerCase());
      return matchesName && matchesType && matchesDate;
    });
  }, [documentName, documentType, documentDate, relatedData.documents]);

  const handleItemClick = (item: Document) => {
    setSelectedDocumentItem(item);
    setDetailDisplayOpen(true);
    setSelectedEventItem(null);
  };

  const handleEventClick = (eventItem: any) => {
    setSelectedEventItem(eventItem);
  };

  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-[300px] mt-6">
        <RouteSearchBar
          fieldOne={documentName}
          fieldTwo={documentType}
          fieldThree={documentDate}
          onFieldOneChange={setDocumentName}
          onFieldTwoChange={setDocumentType}
          onFieldThreeChange={setDocumentDate}
          fieldOneTitle="Document Name"
          fieldTwoTitle="Document Type"
          fieldThreeTitle="Date"
          fieldOnePlaceholder="Enter Document Name"
          fieldTwoPlaceholder="Enter Document Type"
          fieldThreePlaceholder="Enter"
        />
      </div>
      <div className="flex w-full h-full">
        <div className="3xl:w-[510px] w-[410px] h-full">
          <RouteResultsList<Document>
            sectionTitle="Documents"
            onClick={handleItemClick}
            data={filteredDocuments}
            setDetailDisplayOpen={setDetailDisplayOpen}
            setSelectedEventItem={setSelectedEventItem}
          />
          <div className="h-[200px]" />
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full ml-4">
            {detailDisplayOpen && selectedDocumentItem && (
              <RouteDetail
                detailTitle="Document Details"
                item={selectedDocumentItem}
              />
            )}
          </div>
          <div className="flex pb-[200px]">
            <div className="ml-4 mt-6">
              {detailDisplayOpen && selectedDocumentItem && (
                <RouteRelatedEvents
                  relatedData={relatedData}
                  encounterNumber={selectedDocumentItem?.encounterNumber}
                  onEventClick={handleEventClick}
                  ignoreType="documents"
                />
              )}
            </div>

            {selectedEventItem && (
              <DocumentRelatedEventDetail eventItem={selectedEventItem} />
            )}
          </div>
        </div>
      </div>
      <div className="h-[200px]" />
    </section>
  );
};
export default DocumentsPage;
