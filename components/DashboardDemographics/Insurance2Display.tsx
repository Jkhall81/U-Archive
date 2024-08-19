import { Insurance2 } from "@/lib/dummyData/types";

interface Props {
  insurance2Data: Insurance2 | undefined;
}

export const Insurance2Display = ({ insurance2Data }: Props) => {
  return (
    <main className="mt-6 rounded-2xl mx-1 border-2 bg-neutral-300 dark:bg-neutral-800 border-neutral-300 dark:border-white pb-6">
      <h2 className="mt-6 text-center text-4xl font-semibold">Insurance 2</h2>
      <section className="w-full flex">
        {/* Insurance Name, Ded, phone number */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Insurance Provider:</span>
            <p>{insurance2Data?.ins2Name}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Deductible:</span>
            <p>${insurance2Data?.ins2Ded}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Contact Number:</span>
            <p>{insurance2Data?.ins2Phone}</p>
          </div>
        </div>

        {/* Phone numbers and Email*/}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Provider Address:</span>
            <p>{insurance2Data?.ins2Street1}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Provider Address Continued:</span>
            <p>{insurance2Data?.ins2Street2}</p>
          </div>
          <div className="flex">
            <span className="mr-4">City:</span>
            <p>{insurance2Data?.ins2City}</p>
          </div>
          <div className="flex">
            <span className="mr-4">State:</span>
            <p>{insurance2Data?.ins2State}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Zipcode:</span>
            <p>{insurance2Data?.ins2ZipCode}</p>
          </div>
        </div>
      </section>

      <section className="flex w-full">
        {/* SSN and Chart Number */}
        <div className="flex flex-col w-[50%] text-2xl space-y-4 pt-[100px] items-center">
          <div className="flex">
            <span className="mr-4">Insurance Code:</span>
            <p>{insurance2Data?.ins2Code}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Member Number:</span>
            <p>{insurance2Data?.ins2MemberNo}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Group Name:</span>
            <p>{insurance2Data?.ins2GroupName}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Group Number:</span>
            <p>{insurance2Data?.Ins2GroupNumber}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
