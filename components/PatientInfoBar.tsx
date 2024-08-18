import { DemographicsItem } from "@/lib/dummyData/types";

interface PatientInfoBarProps {
  patient: DemographicsItem;
}

const PatientInfoBar = ({ patient }: PatientInfoBarProps) => {
  return (
    <div className="w-full flex justify-evenly rounded-2xl items-center text-2xl h-[80px] bg-neutral-300 dark:text-white dark:bg-slate-800">
      <div className="flex">
        <span className="mr-4">Chart Number:</span>
        <p>{patient.patient.chartNumber}</p>
      </div>
      <p>
        {patient.patient.firstName} {patient.patient.lastName}
      </p>
      <div className="flex">
        <span className="mr-4">Date of Birth:</span>
        <p>{patient.patient.dateOfBirth}</p>
      </div>
      {/* Display other patient information here */}
    </div>
  );
};
export default PatientInfoBar;
