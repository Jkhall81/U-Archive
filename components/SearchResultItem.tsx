interface SearchResultItemProps {
  name: string;
  dob: string;
  chartNumber: number;
}

export const SearchResultItem = ({
  name,
  dob,
  chartNumber,
}: SearchResultItemProps) => {
  return (
    <section
      onClick={() => {
        console.log("Click!!");
      }}
      className="flex p-6 space-x-4 border-2 text-2xl dark:border-white border-black rounded-xl dark:hover:border-blue-500 dark:hover:text-blue-500 hover:border-blue-500 hover:text-blue-500"
    >
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Chart Number: </span>
        <p>{chartNumber}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Name: </span>
        <p>{name}</p>
      </div>
      <div className="flex">
        <span className="mr-2 dark:text-neutral-400">Date of Birth: </span>
        <p>{dob}</p>
      </div>
    </section>
  );
};
