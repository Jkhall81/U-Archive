import { Patient } from "@/lib/dummyData/types";

interface Props {
  patientData: Patient | undefined;
}

export const PatientDisplay = ({ patientData }: Props) => {
  return (
    <main className="mt-6 rounded-2xl mx-1 border-2 border-neutral-300 dark:border-white pb-6">
      <h2 className="mt-6 text-center text-4xl font-semibold">Patient Info</h2>
      <section className="w-full flex">
        {/* Name and Date of Birth */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">First Name:</span>
            <p>{patientData?.firstName}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Middle Initial:</span>
            <p>{patientData?.midInitial}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Last Name:</span>
            <p>{patientData?.lastName}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Date of Birth:</span>
            <p>{patientData?.dateOfBirth}</p>
          </div>
        </div>

        {/* Phone numbers and Email*/}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Home Phone:</span>
            <p>{patientData?.homePhone}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Cell Phone:</span>
            <p>{patientData?.cellPhone}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Work Phone:</span>
            <p>{patientData?.workPhone}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Email:</span>
            <p>{patientData?.email}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full">
        {/* SSN and Chart Number */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Chart Number:</span>
            <p>{patientData?.chartNumber}</p>
          </div>
          <div className="flex">
            <span className="mr-4">SSN:</span>
            <p>{patientData?.SSN}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Street Address1:</span>
            <p>{patientData?.street1}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Street Address Continued:</span>
            <p>{patientData?.street2}</p>
          </div>
          <div className="flex">
            <span className="mr-4">City:</span>
            <p>{patientData?.city}</p>
          </div>
          <div className="flex">
            <span className="mr-4">State:</span>
            <p>{patientData?.state}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Zipcode:</span>
            <p>{patientData?.zipCode}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
