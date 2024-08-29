"use client";

import { useState } from "react";
import { DocumentResultItem } from "./DocumentResultItem";
import { Document } from "@/lib/dummyData/types";

interface Props {
  data: Document[];
  onClick: (item: Document) => void;
}

export const DocumentResultList = ({ data, onClick }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Document | null>(null);

  const handleClick = (item: Document) => {
    setSelectedItem(item);
    onClick(item);
  };
  return (
    <section className="border-2 border-black dark:border-white mt-6 rounded-3xl">
      <h2 className="text-4xl text-center mt-6 font-semibold">Documents</h2>
      {data.map((x, index) => (
        <DocumentResultItem
          key={index}
          index={index}
          documentName={x.documentName}
          documentType={x.documentType}
          documentDate={x.documentDate}
          encounterNumber={x.encounterNumber}
          documentPath={x.documentPath}
          onClick={() => handleClick(x)}
          isSelected={selectedItem === x}
        />
      ))}
    </section>
  );
};
