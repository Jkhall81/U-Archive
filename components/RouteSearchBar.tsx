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
    <section className="flex items-center border-2 border-black dark:border-white w-full h-[200px] rounded-3xl">
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">{fieldOneTitle}:</span>
          <Input
            value={fieldOne}
            onChange={(e) => onFieldOneChange(e.target.value)}
            placeholder={fieldOnePlaceholder}
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">{fieldTwoTitle}:</span>
          <Input
            value={fieldTwo}
            onChange={(e) => onFieldTwoChange(e.target.value)}
            placeholder={fieldTwoPlaceholder}
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
      <div className="border-r border-black dark:border-white h-[50%] mt-[10px]" />
      <div className="flex flex-col items-center justify-center w-[33%]">
        <div className="flex items-center">
          <span className="text-xl mr-4">{fieldThreeTitle}:</span>
          <Input
            value={fieldThree}
            onChange={(e) => onFieldThreeChange(e.target.value)}
            placeholder={fieldThreePlaceholder}
            className="rounded-xl text-xl dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </section>
  );
};
