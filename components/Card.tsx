import { SingleField } from "@/components/SingleField";
import { cn } from "@/lib/utils";

interface Field {
  fieldName: string;
  fieldValue: string | number | undefined;
}

interface Props {
  fields: Field[];
  inDemographics?: boolean;
}

export const Card = ({ fields, inDemographics }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col pl-4 tablet:pl-0 min-h-[256px] h-full tablet:w-[50%] bg-slate-300 dark:bg-zinc-900 3xl:text-2xl py-8 tablet:items-center border border-black dark:border-white m-4 rounded-2xl",
        inDemographics ? "w-full" : ""
      )}
    >
      <div className="space-y-2">
        {fields.map((field, index) => (
          <SingleField
            key={index}
            fieldNameStyles="text-blue-500"
            fieldName={field.fieldName}
            fieldValue={field.fieldValue}
          />
        ))}
      </div>
    </div>
  );
};
