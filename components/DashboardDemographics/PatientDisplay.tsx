import { Patient } from "@/lib/dummyData/types";
import { Card } from "../Card";

interface Props {
  patientData: Patient | undefined;
}

export const PatientDisplay = ({ patientData }: Props) => {
  return (
    <main className="mt-6 rounded-2xl mx-1 border-2 border-black dark:border-white pb-6">
      <h2 className="mt-6 text-center text-4xl pb-6 font-semibold">Patient</h2>
      <section className="w-full flex">
        {/* Patient Data */}
        <Card
          fields={[
            { fieldName: "First Name", fieldValue: patientData?.firstName },
            {
              fieldName: "Middle Initial",
              fieldValue: patientData?.midInitial,
            },
            { fieldName: "Last Name", fieldValue: patientData?.lastName },
            {
              fieldName: "Date of Birth",
              fieldValue: patientData?.dateOfBirth,
            },
          ]}
        />
        {/* Phone numbers and Email*/}
        <Card
          fields={[
            { fieldName: "Home Phone", fieldValue: patientData?.homePhone },
            { fieldName: "Work Phone", fieldValue: patientData?.workPhone },
            { fieldName: "Cell Phone", fieldValue: patientData?.cellPhone },
            { fieldName: "email", fieldValue: patientData?.email },
          ]}
        />
      </section>

      <section className="flex w-full">
        {/* SSN and Chart Number */}
        <Card
          fields={[
            {
              fieldName: "Chart Number",
              fieldValue: patientData?.chartNumber.toString(),
            },
            {
              fieldName: "Social Security Number",
              fieldValue: patientData?.SSN,
            },
          ]}
        />
        {/* Address */}
        <Card
          fields={[
            { fieldName: "Street Address", fieldValue: patientData?.street1 },
            {
              fieldName: "Address Continued",
              fieldValue: patientData?.street2,
            },
            { fieldName: "City", fieldValue: patientData?.city },
            { fieldName: "State", fieldValue: patientData?.state },
            { fieldName: "Zipcode", fieldValue: patientData?.zipCode },
          ]}
        />
      </section>
    </main>
  );
};
