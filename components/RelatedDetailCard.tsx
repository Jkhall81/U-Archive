import { SingleField } from "@/components/SingleField";

interface Field {
  fieldName: string;
  fieldValue: string | undefined;
}

interface Props {
  fields: Field[];
}

export const RelatedDetailCard = ({ fields }: Props) => {
  return (
    <div className="flex flex-col min-h-[256px] h-full bg-neutral-400 dark:bg-zinc-900 text-2xl py-8 items-center border border-black dark:border-white my-4 mx-8 rounded-2xl">
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
