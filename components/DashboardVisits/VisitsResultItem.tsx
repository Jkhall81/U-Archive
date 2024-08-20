import { Button } from "../ui/button";

interface Props {
  index: number;
  encounterNumber: string;
  visitDate: string;
  drFirstName: string;
  drLastName: string;
  visitType: string;
  PDFFile: string;
}

export const VisitsResultItem = ({
  index,
  encounterNumber,
  visitDate,
  drFirstName,
  drLastName,
  visitType,
  PDFFile,
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
        <span className="mr-2 dark:text-neutral-400">Visit Date:</span>
        <p>{visitDate}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Visit Type:</span>
        <p>{visitType}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Physician Name:</span>
        <p>
          {drLastName}, {drFirstName}
        </p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">PDF File:</span>
        <p>{PDFFile}</p>
      </div>

      <div className="pl-8">
        <Button className="text-2xl w-[8vw] curosr-pointer bg-white dark:bg-neutral-800 border-2 border-neutral-800 dark:border-white rounded-3xl">
          Download
        </Button>
      </div>
    </section>
  );
};
