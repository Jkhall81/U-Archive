import { Button } from "../ui/button";
import { VerticalDivider } from "../VerticalDivider";

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
    <section className="flex border dark:bg-neutral-800 bg-neutral-300 border-black dark:border-white rounded-3xl m-4 text-2xl py-6 px-6">
      {/* Left-aligned index */}
      <div className="w-[5%] flex items-center">
        <p>{index + 1}</p>
      </div>

      <VerticalDivider />

      {/* Centered content */}
      <div className="ml-4 flex-1 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex">
            <span className="mr-2 dark:text-neutral-400">
              Encounter Number:
            </span>
            <p>{encounterNumber}</p>
          </div>
          <VerticalDivider />
          <div className="flex">
            <span className="mr-2 dark:text-neutral-400">Name:</span>
            <p>{documentName}</p>
          </div>
          <VerticalDivider />
          <div className="flex">
            <span className="mr-2 dark:text-neutral-400">Type:</span>
            <p>{documentType}</p>
          </div>
          <VerticalDivider />
          <div className="flex">
            <span className="mr-2 dark:text-neutral-400">Date:</span>
            <p>{documentDate}</p>
          </div>
        </div>

        {/* Button on the far right */}
        <div className="pl-8">
          <Button className="text-2xl w-[8vw] curosr-pointer bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-white hover:text-blue-500 dark:hover:border-blue-500 hover:border-blue-500 rounded-3xl">
            Download
          </Button>
        </div>
      </div>
    </section>
  );
};
