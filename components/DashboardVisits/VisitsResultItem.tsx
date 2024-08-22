import { Button } from "../ui/button";
import { VerticalDivider } from "../VerticalDivider";

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
    <section className="flex text-2xl border dark:border-white bg-neutral-300 dark:bg-neutral-800 m-4 rounded-3xl space-x-4 py-6 pl-6 items-center justify-between">
      <div className="flex items-center space-x-4">
        <div>
          <p>{index + 1}:</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-2 dark:text-neutral-400">Encounter Number:</span>
          <p>{encounterNumber}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-2 dark:text-neutral-400">Visit Date:</span>
          <p>{visitDate}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-2 dark:text-neutral-400">Visit Type:</span>
          <p>{visitType}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-2 dark:text-neutral-400">Physician Name:</span>
          <p>
            {drLastName}, {drFirstName}
          </p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-2 dark:text-neutral-400">PDF File:</span>
          <p>{PDFFile}</p>
        </div>
      </div>

      <div className="pr-6">
        <Button className="text-2xl w-[8vw] curosr-pointer bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-white hover:text-blue-500 dark:hover:border-blue-500 hover:border-blue-500 rounded-3xl">
          Download
        </Button>
      </div>
    </section>
  );
};
