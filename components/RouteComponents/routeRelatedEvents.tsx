"use client";

import { RelatedData } from "@/lib/dummyData/types";
import { filterRelatedData } from "@/lib/filteringData";
import { RouteRelatedEventItemList } from "./RouteRelatedEventItemList";

interface Props {
  encounterNumber: string | undefined;
  relatedData: RelatedData;
  onEventClick: (item: Partial<RelatedData>) => void;
  ignoreType: string;
}

export const RouteRelatedEvents = ({
  encounterNumber,
  relatedData,
  onEventClick,
  ignoreType,
}: Props) => {
  const linkedData = filterRelatedData(encounterNumber, relatedData);
  return (
    <section className="">
      <div className="">
        <RouteRelatedEventItemList
          onClick={onEventClick}
          linkedData={linkedData}
          ignoreType={ignoreType}
        />
      </div>
    </section>
  );
};
