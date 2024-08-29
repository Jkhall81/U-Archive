import { Input } from "../ui/input";

interface Props {
  testName: string;
  labName: string;
  testDate: string;
  onTestNameChange: (value: string) => void;
  onLabNameChange: (value: string) => void;
  onTestDateChange: (value: string) => void;
}

export const LabsSearchBar = ({
  testName,
  labName,
  testDate,
  onTestNameChange,
  onLabNameChange,
  onTestDateChange,
}: Props) => {
  return (
    <section className="flex items-center border-2 border-black dark:border-white w-full h-[200px] rounded-3xl">
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Test Name:</span>
          <Input
            value={testName}
            onChange={(e) => onTestNameChange(e.target.value)}
            placeholder="Enter Test Name"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Lab Name:</span>
          <Input
            value={labName}
            onChange={(e) => onLabNameChange(e.target.value)}
            placeholder="Enter Lab Name"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Test Date:</span>
          <Input
            value={testDate}
            onChange={(e) => onTestDateChange(e.target.value)}
            placeholder="Enter Test Date"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </section>
  );
};
