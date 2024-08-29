import { Input } from "../ui/input";

interface Props {
  diagCode: string;
  diagDesc: string;
  probDate: string;
  onDiagCodeChange: (value: string) => void;
  onDiagDescChange: (value: string) => void;
  onProbDateChange: (value: string) => void;
}

export const ProblemsSearchBar = ({
  diagCode,
  diagDesc,
  probDate,
  onDiagCodeChange,
  onDiagDescChange,
  onProbDateChange,
}: Props) => {
  return (
    <section className="flex items-center border-2 border-black dark:border-white w-full h-[200px] rounded-3xl">
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Diagnosis Code:</span>
          <Input
            value={diagCode}
            onChange={(e) => onDiagCodeChange(e.target.value)}
            placeholder="Enter Diagnosis Code"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Description:</span>
          <Input
            value={diagDesc}
            onChange={(e) => onDiagDescChange(e.target.value)}
            placeholder="Enter Description"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Problem Date:</span>
          <Input
            value={probDate}
            onChange={(e) => onProbDateChange(e.target.value)}
            placeholder="Enter Problem Date"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </section>
  );
};
