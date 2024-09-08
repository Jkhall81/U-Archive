import { Insurance1 } from "@/lib/dummyData/types";
import { Card } from "../Card";

interface Props {
  insurance1Data: Insurance1 | undefined;
}

export const Insurance1Display = ({ insurance1Data }: Props) => {
  return (
    <main className="mt-6 rounded-2xl mx-1 border-2 border-black dark:border-white pb-6">
      <h2 className="mt-6 text-center text-2xl 3xl:text-4xl pb-6 font-semibold">
        Insurance 1
      </h2>
      <section className="w-full flex">
        {/* Insurance Name, Ded, phone number */}
        <Card
          inDemographics={true}
          fields={[
            {
              fieldName: "Insurance Provider",
              fieldValue: insurance1Data?.ins1Name,
            },
            {
              fieldName: "Deductible",
              fieldValue: insurance1Data?.ins1Ded.toString(),
            },
            {
              fieldName: "Contact Number",
              fieldValue: insurance1Data?.ins1Phone,
            },
          ]}
        />
        {/* Phone numbers and Email*/}
        <Card
          inDemographics={true}
          fields={[
            {
              fieldName: "Provider Address",
              fieldValue: insurance1Data?.ins1Street1,
            },
            {
              fieldName: "Address Continued",
              fieldValue: insurance1Data?.ins1Street2,
            },
            { fieldName: "City", fieldValue: insurance1Data?.ins1City },
            { fieldName: "State", fieldValue: insurance1Data?.ins1State },
            { fieldName: "Zipcode", fieldValue: insurance1Data?.ins1ZipCode },
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
              fieldValue: insurance1Data?.ins1Code,
            },
            {
              fieldName: "Member Number",
              fieldValue: insurance1Data?.ins1MemberNo,
            },
            {
              fieldName: "Group Name",
              fieldValue: insurance1Data?.ins1GroupName,
            },
            {
              fieldName: "Group Number",
              fieldValue: insurance1Data?.Ins1GroupNumber,
            },
          ]}
        />
        <div className="tablet:w-[50%] w-full m-4" />
      </section>
    </main>
  );
};
