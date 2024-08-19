import { cn } from "@/lib/utils";

interface Props {
  item: string;
  date: string;
  historyCategory: string;
  index: number;
  onClick: () => void;
  isSelected: boolean;
}

export const HistoryResultItem = ({
  item,
  date,
  historyCategory,
  index,
  onClick,
  isSelected,
}: Props) => {
  return (
    <section
      onClick={onClick}
      className={cn(
        "flex space-x-4 text-2xl cursor-pointer py-6 pl-6 hover:text-blue-300",
        `${isSelected ? "text-blue-500" : ""}`
      )}
    >
      <div className="flex">
        <p>{index + 1}</p>
      </div>
      <div className="flex">
        <span className="mr-4">Item:</span>
        <p>{item}</p>
      </div>
      <div className="flex">
        <span className="mr-4">Type:</span>
        <p>{historyCategory}</p>
      </div>
      <div className="flex">
        <span className="mr-4">Date:</span>
        <p>{date}</p>
      </div>
    </section>
  );
};
