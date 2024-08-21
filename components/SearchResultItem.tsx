import { VerticalDivider } from "./VerticalDivider";

interface SearchResultItemProps {
  name: string;
  dob: string;
  chartNumber: number;
  onClick: () => void;
}

export const SearchResultItem = ({
  name,
  dob,
  chartNumber,
  onClick,
}: SearchResultItemProps) => {
  return (
    <section
      onClick={onClick}
      className="flex justify-center p-6 bg-neutral-300 dark:bg-neutral-900 space-x-4 border-2 hover:font-bold text-2xl dark:border-white border-black rounded-xl dark:hover:border-blue-500 dark:hover:text-blue-500 hover:border-blue-500 hover:text-blue-500 cursor-pointer"
    >
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Chart Number: </span>
        <p>{chartNumber}</p>
      </div>
      <VerticalDivider />
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Name: </span>
        <p>{name}</p>
      </div>
      <VerticalDivider />
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Date of Birth: </span>
        <p>{dob}</p>
      </div>
    </section>
  );
};
