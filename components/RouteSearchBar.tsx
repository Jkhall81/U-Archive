import { Input } from "./ui/input";

interface Props {
  fieldOne: string;
  fieldTwo: string;
  fieldThree: string;
  fieldOneTitle: string;
  fieldTwoTitle: string;
  fieldThreeTitle: string;
  fieldOnePlaceholder: string;
  fieldTwoPlaceholder: string;
  fieldThreePlaceholder: string;
  onFieldOneChange: (value: string) => void;
  onFieldTwoChange: (value: string) => void;
  onFieldThreeChange: (value: string) => void;
}

export const RouteSearchBar = ({
  fieldOne,
  fieldTwo,
  fieldThree,
  onFieldOneChange,
  onFieldTwoChange,
  onFieldThreeChange,
  fieldOneTitle,
  fieldTwoTitle,
  fieldThreeTitle,
  fieldOnePlaceholder,
  fieldTwoPlaceholder,
  fieldThreePlaceholder,
}: Props) => {
  return (
    <section className="flex items-center border-2 bg-zinc-300 dark:bg-transparent border-black dark:border-white w-full h-[200px] rounded-3xl">
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="3xl:text-xl flex items-center">
          <span className="mr-4 text-neutral-600 dark:text-blue-500">
            {fieldOneTitle}:
          </span>
          <Input
            value={fieldOne}
            onChange={(e) => onFieldOneChange(e.target.value)}
            placeholder={fieldOnePlaceholder}
            className="rounded-xl bg-white dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="3xl:text-xl flex items-center">
          <span className="mr-4 text-neutral-600 dark:text-blue-500">
            {fieldTwoTitle}:
          </span>
          <Input
            value={fieldTwo}
            onChange={(e) => onFieldTwoChange(e.target.value)}
            placeholder={fieldTwoPlaceholder}
            className="rounded-xl bg-white dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="3xl:text-xl flex items-center">
          <span className="mr-4 text-neutral-600 dark:text-blue-500">
            {fieldThreeTitle}:
          </span>
          <Input
            value={fieldThree}
            onChange={(e) => onFieldThreeChange(e.target.value)}
            placeholder={fieldThreePlaceholder}
            className="rounded-xl bg-white dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </section>
  );
};
