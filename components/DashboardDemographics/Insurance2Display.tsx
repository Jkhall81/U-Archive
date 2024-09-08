import { Insurance2 } from "@/lib/dummyData/types";
import { Card } from "../Card";

interface Props {
  insurance2Data: Insurance2 | undefined;
}

export const Insurance2Display = ({ insurance2Data }: Props) => {
  return (
    <main className="mt-6 rounded-2xl mx-1 border-2 bg-neutral-200 dark:bg-neutral-800 border-black dark:border-white pb-6">
      <h2 className="mt-6 text-center pb-6 text-2xl 3xl:text-4xl font-semibold">
        Insurance 2
      </h2>
      <section className="w-full flex">
        {/* Insurance Name, Ded, phone number */}
        <Card
          inDemographics={true}
          fields={[
            {
              fieldName: "Insurance Provider",
              fieldValue: insurance2Data?.ins2Name,
            },
            {
              fieldName: "Deductible",
              fieldValue: insurance2Data?.ins2Ded.toString(),
            },
            {
              fieldName: "Contact Number",
              fieldValue: insurance2Data?.ins2Phone,
            },
          ]}
        />
        {/* Phone numbers and Email*/}
        <Card
          inDemographics={true}
          fields={[
            {
              fieldName: "Provider Address",
              fieldValue: insurance2Data?.ins2Street1,
            },
            {
              fieldName: "Address Continued",
              fieldValue: insurance2Data?.ins2Street2,
            },
            { fieldName: "City", fieldValue: insurance2Data?.ins2City },
            { fieldName: "State", fieldValue: insurance2Data?.ins2State },
            { fieldName: "Zipcode", fieldValue: insurance2Data?.ins2ZipCode },
          ]}
        />
      </section>

      <section className="flex w-full">
        {/* SSN and Chart Number */}
        <Card
          inDemographics={true}
          fields={[
            {
              fieldName: "Insurance Code",
              fieldValue: insurance2Data?.ins2Code,
            },
            {
              fieldName: "Member Number",
              fieldValue: insurance2Data?.ins2MemberNo,
            },
            {
              fieldName: "Group Name",
              fieldValue: insurance2Data?.ins2GroupName,
            },
            {
              fieldName: "Group Number",
              fieldValue: insurance2Data?.Ins2GroupNumber,
            },
          ]}
        />
        <div className="tablet:w-[50%] w-full m-4" />
      </section>
    </main>
  );
};
