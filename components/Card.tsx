import { SingleField } from "@/components/SingleField";

interface Field {
  fieldName: string;
  fieldValue: string | number | undefined;
}

interface Props {
  fields: Field[];
}

export const Card = ({ fields }: Props) => {
  return (
    <div className="flex flex-col min-h-[256px] h-full w-[50%] bg-slate-300 dark:bg-zinc-900 3xl:text-2xl py-8 items-center border border-black dark:border-white m-4 rounded-2xl">
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
