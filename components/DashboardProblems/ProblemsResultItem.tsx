import { Button } from "../ui/button";
import { VerticalDivider } from "../VerticalDivider";

interface Props {
  index: number;
  diagCode: string;
  diagDesc: string;
  probDate: string;
  drFirstName: string;
  drLastName: string;
}

export const ProblemsResultItem = ({
  index,
  diagCode,
  diagDesc,
  probDate,
  drFirstName,
  drLastName,
}: Props) => {
  return (
    <section className="flex items-center justify-between bg-neutral-300 dark:bg-neutral-800 text-2xl space-x-4 py-6 pl-6 border dark:border-white border-black rounded-3xl m-4">
      <div className="flex items-center space-x-4">
        <div>
          <p>{index + 1}:</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-2 dark:text-neutral-400">Diagnosis Code:</span>
          <p>{diagCode}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-2 dark:text-neutral-400">Description:</span>
          <p>{diagDesc}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-2 dark:text-neutral-400">Problem Date:</span>
          <p>{probDate}</p>
        </div>
        <VerticalDivider />
        <div className="flex">
          <span className="mr-2 dark:text-neutral-400">Physician Name:</span>
          <p>
            {drLastName}, {drFirstName}
          </p>
        </div>
        <VerticalDivider />
      </div>

      <div className="pr-6">
        <Button className="text-2xl w-[8vw] curosr-pointer bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-white hover:text-blue-500 dark:hover:border-blue-500 hover:border-blue-500 rounded-3xl">
          Download
        </Button>
      </div>
    </section>
  );
};
