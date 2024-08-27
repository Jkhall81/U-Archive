import { RelatedData } from "@/lib/dummyData/types";
import { RelatedMedication } from "../RelatedEvents/RelatedMedication";
import { RelatedLab } from "../RelatedEvents/RelatedLab";
import { RelatedProblem } from "../RelatedEvents/RelatedProblem";
import { RelatedVisit } from "../RelatedEvents/RelatedVisit";
import { RelatedHistory } from "../RelatedEvents/RelatedHistory";
import {
  isMedication,
  isLab,
  isProblem,
  isVisit,
  isHistory,
} from "../RelatedEvents/typeGuard";

interface Props {
  eventItem: RelatedData;
}

export const ProceduresRelatedEventDetail = ({ eventItem }: Props) => {
  const renderContent = () => {
    switch (true) {
      case isMedication(eventItem):
        return <RelatedMedication data={eventItem[0]} />;

      case isHistory(eventItem):
        return <RelatedHistory data={eventItem[0]} />;

      case isLab(eventItem):
        return <RelatedLab data={eventItem[0]} />;

      case isProblem(eventItem):
        return <RelatedProblem data={eventItem[0]} />;

      case isVisit(eventItem):
        return <RelatedVisit data={eventItem[0]} />;

      // Add more cases here as needed

      default:
        return <p>No matching data to display.</p>;
    }
  };

  return (
    <section className="border-2 dark:border-white rounded-2xl w-full mt-6 ml-6">
      {renderContent()}
    </section>
  );
};
