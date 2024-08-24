import { RelatedData } from "@/lib/dummyData/types";
import { RelatedDocument } from "./RelatedEvents/RelatedDocument";
import { RelatedLab } from "./RelatedEvents/RelatedLab";
import { isDocument, isLab } from "./RelatedEvents/typeGuard";

interface Props {
  eventItem: RelatedData;
}

export const RelatedEventDetail = ({ eventItem }: Props) => {
  console.log("In Detail", eventItem);

  const renderContent = () => {
    switch (true) {
      case isDocument(eventItem):
        return <RelatedDocument data={eventItem[0]} />;

      case isLab(eventItem):
        return <RelatedLab data={eventItem[0]} />;

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
