import { Input } from "../ui/input";

interface Props {
  item: string;
  historyCategory: string;
  date: string;
  onItemChange: (value: string) => void;
  onHistoryCategoryChange: (value: string) => void;
  onDateChange: (value: string) => void;
}

export const HistorySearchBar = ({
  item,
  historyCategory,
  date,
  onItemChange,
  onHistoryCategoryChange,
  onDateChange,
}: Props) => {
  return (
    <section className="flex items-center border-2 border-black dark:border-white w-full h-[200px] rounded-3xl">
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">History Item:</span>
          <Input
            value={item}
            onChange={(e) => onItemChange(e.target.value)}
            placeholder="Enter Item Name"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">History Category:</span>
          <Input
            value={historyCategory}
            onChange={(e) => onHistoryCategoryChange(e.target.value)}
            placeholder="Enter Category"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Date:</span>
          <Input
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            placeholder="Enter Date"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </section>
  );
};
