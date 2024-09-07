import { cn } from "@/lib/utils";

interface Props {
  fieldName: string | undefined;
  fieldValue: string | number | undefined;
  fieldNameStyles?: string;
  fieldValueStyles?: string;
}

export const SingleField = ({
  fieldName,
  fieldValue,
  fieldNameStyles,
  fieldValueStyles,
}: Props) => {
  return (
    <div className="flex">
      <span className={cn("mr-4", `${fieldNameStyles}`)}>{fieldName}:</span>
      <p className={cn("", `${fieldValueStyles}`)}>{fieldValue}</p>
    </div>
  );
};
