"use client";

import { RelatedData } from "@/lib/dummyData/types";
import { filterRelatedData } from "@/lib/filteringData";
import { LabsRelatedEventItemList } from "./LabsRelatedEventItemList";

interface Props {
  encounterNumber: string | undefined;
  relatedData: RelatedData;
  onEventClick: (item: Partial<RelatedData>) => void;
}

export const LabsRelatedEvents = ({
  encounterNumber,
  relatedData,
  onEventClick,
}: Props) => {
  const linkedData = filterRelatedData(encounterNumber, relatedData);
  return (
    <section className="border-2 border-black dark:border-white mx-1 rounded-2xl h-full">
      <div className="">
        <LabsRelatedEventItemList
          onClick={onEventClick}
          linkedData={linkedData}
        />
      </div>
    </section>
  );
};
