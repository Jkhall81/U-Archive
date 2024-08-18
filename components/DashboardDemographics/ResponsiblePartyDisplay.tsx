import { ResponsibleParty } from "@/lib/dummyData/types";

interface Props {
  responsiblePartyData: ResponsibleParty | undefined;
}

export const ResponsiblePartyDisplay = ({ responsiblePartyData }: Props) => {
  return (
    <main className="mt-6 rounded-2xl mx-1 border-2 bg-neutral-300 dark:bg-neutral-800 border-neutral-300 dark:border-white pb-6">
      <h2 className="mt-6 text-center text-4xl font-semibold">
        Responsible Party Info
      </h2>
      <section className="w-full flex">
        {/* Name and Date of Birth */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">First Name:</span>
            <p>{responsiblePartyData?.respFirstName}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Middle Initial:</span>
            <p>{responsiblePartyData?.respMI}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Last Name:</span>
            <p>{responsiblePartyData?.respLastName}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Date of Birth:</span>
            <p>{responsiblePartyData?.respDateOfBirth}</p>
          </div>
        </div>

        {/* Phone numbers and Email*/}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Home Phone:</span>
            <p>{responsiblePartyData?.respHomePhone}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Cell Phone:</span>
            <p>{responsiblePartyData?.respCellPhone}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Work Phone:</span>
            <p>{responsiblePartyData?.respWorkPhone}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Email:</span>
            <p>{responsiblePartyData?.respEmail}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full">
        {/* SSN and Chart Number */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Chart Number:</span>
            <p>{responsiblePartyData?.chartNumber}</p>
          </div>
          <div className="flex">
            <span className="mr-4">SSN:</span>
            <p>{responsiblePartyData?.respSSN}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Street Address1:</span>
            <p>{responsiblePartyData?.respStreet1}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Street Address Continued:</span>
            <p>{responsiblePartyData?.respStreet2}</p>
          </div>
          <div className="flex">
            <span className="mr-4">City:</span>
            <p>{responsiblePartyData?.respCity}</p>
          </div>
          <div className="flex">
            <span className="mr-4">State:</span>
            <p>{responsiblePartyData?.respState}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Zipcode:</span>
            <p>{responsiblePartyData?.respZipCode}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
