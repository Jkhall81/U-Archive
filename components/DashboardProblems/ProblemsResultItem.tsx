import { Button } from "../ui/button";

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
    <section className="flex text-2xl space-x-4 py-6 pl-6 w-full">
      <div>
        <p>{index + 1}:</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Diagnosis Code:</span>
        <p>{diagCode}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Description:</span>
        <p>{diagDesc}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Problem Date:</span>
        <p>{probDate}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Physician Name:</span>
        <p>
          {drLastName}, {drFirstName}
        </p>
      </div>
      <div className="pl-8">
        <Button className="text-2xl w-[8vw] curosr-pointer bg-white dark:bg-neutral-800 border-2 border-neutral-800 dark:border-white rounded-3xl">
          Download
        </Button>
      </div>
    </section>
  );
};
