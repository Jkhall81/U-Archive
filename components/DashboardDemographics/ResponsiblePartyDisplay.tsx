import { ResponsibleParty } from "@/lib/dummyData/types";
import { Card } from "../Card";

interface Props {
  responsiblePartyData: ResponsibleParty | undefined;
}

export const ResponsiblePartyDisplay = ({ responsiblePartyData }: Props) => {
  return (
    <main className="mt-6 rounded-2xl mx-1 border-2 bg-neutral-200 dark:bg-neutral-800 border-black dark:border-white pb-6">
      <h2 className="mt-6 text-center pb-6 text-4xl font-semibold">
        Responsible Party
      </h2>
      <section className="w-full flex">
        {/* Name and Date of Birth */}
        <Card
          fields={[
            {
              fieldName: "First Name",
              fieldValue: responsiblePartyData?.respFirstName,
            },
            {
              fieldName: "Middle Initial",
              fieldValue: responsiblePartyData?.respMI,
            },
            {
              fieldName: "Last Name",
              fieldValue: responsiblePartyData?.respLastName,
            },
            {
              fieldName: "Date of Birth",
              fieldValue: responsiblePartyData?.respDateOfBirth,
            },
          ]}
        />
        {/* Phone numbers and Email*/}
        <Card
          fields={[
            {
              fieldName: "Home Phone",
              fieldValue: responsiblePartyData?.respHomePhone,
            },
            {
              fieldName: "Cell Phone",
              fieldValue: responsiblePartyData?.respCellPhone,
            },
            {
              fieldName: "Work Phone",
              fieldValue: responsiblePartyData?.respWorkPhone,
            },
            { fieldName: "Email", fieldValue: responsiblePartyData?.respEmail },
          ]}
        />
      </section>

      <section className="flex w-full">
        {/* SSN and Chart Number */}
        <Card
          fields={[
            {
              fieldName: "Chart Number",
              fieldValue: responsiblePartyData?.chartNumber.toString(),
            },
            {
              fieldName: "Social Security Number",
              fieldValue: responsiblePartyData?.respSSN,
            },
          ]}
        />
        {/* Address */}
        <Card
          fields={[
            {
              fieldName: "Street Address",
              fieldValue: responsiblePartyData?.respStreet1,
            },
            {
              fieldName: "Address Continued",
              fieldValue: responsiblePartyData?.respStreet2,
            },
            { fieldName: "City", fieldValue: responsiblePartyData?.respCity },
            { fieldName: "State", fieldValue: responsiblePartyData?.respState },
            {
              fieldName: "Zipcode",
              fieldValue: responsiblePartyData?.respZipCode,
            },
          ]}
        />
      </section>
    </main>
  );
};
