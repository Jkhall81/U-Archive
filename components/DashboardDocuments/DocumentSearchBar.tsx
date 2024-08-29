import { Input } from "../ui/input";

interface Props {
  documentName: string;
  documentType: string;
  documentDate: string;
  onDocumentNameChange: (value: string) => void;
  onDocumentTypeChange: (value: string) => void;
  onDocumentDateChange: (value: string) => void;
}

export const DocumentSearchBar = ({
  documentName,
  documentType,
  documentDate,
  onDocumentNameChange,
  onDocumentTypeChange,
  onDocumentDateChange,
}: Props) => {
  return (
    <section className="flex items-center border-2 border-black dark:border-white w-full h-[200px] rounded-3xl">
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Document Name:</span>
          <Input
            value={documentName}
            onChange={(e) => onDocumentNameChange(e.target.value)}
            placeholder="Enter Document Name"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r dark:border-white border-black h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Document Type:</span>
          <Input
            value={documentType}
            onChange={(e) => onDocumentTypeChange(e.target.value)}
            placeholder="Enter Document Type"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r dark:border-white border-black h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">Date:</span>
          <Input
            value={documentDate}
            onChange={(e) => onDocumentDateChange(e.target.value)}
            placeholder="Enter Date"
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </section>
  );
};
