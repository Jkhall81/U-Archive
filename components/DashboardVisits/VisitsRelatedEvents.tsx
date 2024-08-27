"use client";

import { RelatedData } from "@/lib/dummyData/types";
import { filterRelatedData } from "@/lib/filteringData";
import { VisitsRelatedEventItemList } from "./VisitsRelatedEventItemList";

interface Props {
  encounterNumber: string | undefined;
  relatedData: RelatedData;
  onEventClick: (item: Partial<RelatedData>) => void;
}

export const VisitsRelatedEvents = ({
  encounterNumber,
  relatedData,
  onEventClick,
}: Props) => {
  const linkedData = filterRelatedData(encounterNumber, relatedData);
  return (
    <section className="border-2 dark:border-white mx-1 rounded-2xl h-full">
      <div className="">
        <VisitsRelatedEventItemList
          onClick={onEventClick}
          linkedData={linkedData}
        />
      </div>
    </section>
  );
};
