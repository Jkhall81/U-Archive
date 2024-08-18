import { Insurance1 } from "@/lib/dummyData/types";

interface Props {
  insurance1Data: Insurance1 | undefined;
}

export const Insurance1Display = ({ insurance1Data }: Props) => {
  console.log("Insurance1 Data", insurance1Data);
  return (
    <main className="mt-6 rounded-2xl mx-1 border-2 border-neutral-300 dark:border-white pb-6">
      <h2 className="mt-6 text-center text-4xl font-semibold">
        Insurance 1 Info
      </h2>
      <section className="w-full flex">
        {/* Insurance Name, Ded, phone number */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Insurance Provider:</span>
            <p>{insurance1Data?.ins1Name}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Deductible:</span>
            <p>${insurance1Data?.ins1Ded}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Contact Number:</span>
            <p>{insurance1Data?.ins1Phone}</p>
          </div>
        </div>

        {/* Phone numbers and Email*/}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Provider Address:</span>
            <p>{insurance1Data?.ins1Street1}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Provider Address Continued:</span>
            <p>{insurance1Data?.ins1Street2}</p>
          </div>
          <div className="flex">
            <span className="mr-4">City:</span>
            <p>{insurance1Data?.ins1City}</p>
          </div>
          <div className="flex">
            <span className="mr-4">State:</span>
            <p>{insurance1Data?.ins1State}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Zipcode:</span>
            <p>{insurance1Data?.ins1ZipCode}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full">
        {/* SSN and Chart Number */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Insurance Code:</span>
            <p>{insurance1Data?.ins1Code}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Member Number:</span>
            <p>{insurance1Data?.ins1MemberNo}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Group Name:</span>
            <p>{insurance1Data?.ins1GroupName}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Group Number:</span>
            <p>{insurance1Data?.Ins1GroupNumber}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
