import { DemographicsItem } from "@/lib/dummyData/types";

interface PatientInfoBarProps {
  patient: DemographicsItem;
}

const PatientInfoBar = ({ patient }: PatientInfoBarProps) => {
  return (
    <div className="w-full mt-[16px] flex justify-evenly rounded-2xl border-2 border-blue-500 items-center 3xl:text-2xl h-[120px] bg-neutral-300 dark:text-white dark:bg-slate-800">
      <div className="flex flex-col">
        <div className="flex">
          <span className="mr-4 text-neutral-600 dark:text-blue-500">
            Chart Number:
          </span>
          <p>{patient.patient.chartNumber}</p>
        </div>
        <div className="flex mt-2">
          <span className="mr-4 text-neutral-600 dark:text-blue-500">
            Home PHone:
          </span>
          <p>{patient.patient.homePhone}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <span className="mr-4 text-neutral-600 dark:text-blue-500">
            Patient Name:
          </span>
          <p>
            {patient.patient.firstName} {patient.patient.lastName}
          </p>
        </div>
        <div className="flex mt-2">
          <span className="mr-4 text-neutral-600 dark:text-blue-500">
            Email:
          </span>
          <p>{patient.patient.email}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <span className="mr-4 text-neutral-600 dark:text-blue-500">
            Date of Birth:
          </span>
          <p>{patient.patient.dateOfBirth}</p>
        </div>
        <div className="flex mt-2">
          <span className="mr-4 text-neutral-600 dark:text-blue-500">
            Primary Insurance Provider:
          </span>
          <p>{patient.insurance1.ins1Name}</p>
        </div>
      </div>
      {/* Display other patient information here */}
    </div>
  );
};
export default PatientInfoBar;
