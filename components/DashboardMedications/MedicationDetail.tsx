import { Medication } from "@/lib/dummyData/types";

interface Props {
  item: Medication;
  onClose: () => void;
}

export const MedicationDetail = ({ item, onClose }: Props) => {
  return (
    <main className="flex flex-col mt-6 rounded-2xl mx-1 border-2 bg-neutral-300 dark:bg-neutral-800 border-neutral-300 dark:border-white pb-6">
      <h2 className="text-center text-4xl font-semibold pt-6 pb-2">
        Medication Details
      </h2>
      <div className="flex">
        <section className="flex flex-col pt-6 pl-6 space-y-6 text-2xl w-[50%]">
          <div className="flex">
            <span className="mr-4">Duration:</span>
            <p>{item.duration}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Intake:</span>
            <p>{item.intake}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Route:</span>
            <p>{item.route}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Frequency:</span>
            <p>{item.frequency}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Comments:</span>
            <p>{item.comments}</p>
          </div>
        </section>
        <section className="flex flex-col pt-6 pl-6 space-y-6 text-2xl w-[50%]">
          <div className="flex">
            <span className="mr-4">Encounter Number:</span>
            <p>{item.encounterNumber}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Physician Last Name:</span>
            <p>{item.drLastName}</p>
          </div>
          <div className="flex">
            <span className="mr-4">Physician First Name:</span>
            <p>{item.drFirstName}</p>
          </div>
        </section>
      </div>
    </main>
  );
};
