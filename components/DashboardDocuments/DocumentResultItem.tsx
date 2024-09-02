import { cn } from "@/lib/utils";
import { VerticalDivider } from "../VerticalDivider";

interface Props {
  index: number;
  documentName: string;
  documentType: string;
  documentDate: string;
  encounterNumber: string;
  documentPath: string;
  onClick: () => void;
  isSelected: boolean;
}

export const DocumentResultItem = ({
  index,
  documentName,
  documentDate,
  onClick,
  isSelected,
}: Props) => {
  return (
    <section
      onClick={onClick}
      className={cn(
        "flex justify-center select-none space-x-4 border-2 border-black dark:bg-neutral-800 bg-neutral-300 dark:border-white m-4 rounded-3xl 3xl:text-xl cursor-pointer py-6 pl-6 hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600",
        `${
          isSelected
            ? "text-blue-500 border-blue-500 bg-neutral-200 dark:bg-neutral-700 dark:border-blue-500"
            : ""
        }`
      )}
    >
      <div className="3xl:w-[5%] flex items-center">
        <p>{index + 1}</p>
      </div>
      <VerticalDivider />

      {/* Centered Content */}
      <div className="flex-1 flex items-center 3xl:pr-2">
        <div className="flex-col items-center">
          <div className="flex">
            <span className="3xl:mr-4 mr-2 text-blue-500">Name:</span>
            <p>
              {documentName.length > 18
                ? documentName.slice(0, 19) + "..."
                : documentName}
            </p>
          </div>
          <div className="flex">
            <span className="3xl:mr-4 mr-2 text-blue-500">Date:</span>
            <p>{documentDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
