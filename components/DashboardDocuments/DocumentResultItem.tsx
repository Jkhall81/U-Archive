import { Button } from "../ui/button";

interface Props {
  index: number;
  documentName: string;
  documentType: string;
  documentDate: string;
  encounterNumber: string;
  documentPath: string;
}

export const DocumentResultItem = ({
  index,
  documentName,
  documentType,
  documentDate,
  encounterNumber,
  documentPath,
}: Props) => {
  return (
    <section className="flex text-2xl space-x-4 py-6 pl-6 w-full">
      <div>
        <p>{index + 1}:</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Encounter Number:</span>
        <p>{encounterNumber}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Name:</span>
        <p>{documentName}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Type:</span>
        <p>{documentType}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Date:</span>
        <p>{documentDate}</p>
      </div>
      <div className="pl-8">
        <Button className="text-2xl w-[8vw] curosr-pointer bg-white dark:bg-neutral-800 border-2 border-neutral-800 dark:border-white rounded-3xl">
          Download
        </Button>
      </div>
    </section>
  );
};
