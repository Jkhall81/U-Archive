import { Patient } from "@/lib/dummyData/types";

interface PatientInfoBarProps {
  patient: Patient;
}

const PatientInfoBar = ({ patient }: PatientInfoBarProps) => {
  return (
    <div className="w-full flex justify-evenly rounded-2xl items-center text-xl h-[80px] bg-slate-300 dark:text-white dark:bg-slate-800">
      <div className="flex">
        <span className="mr-4">Chart Number:</span>
        <p>{patient.chartNumber}</p>
      </div>
      <p>
        {patient.firstName} {patient.lastName}
      </p>
      <div className="flex">
        <span className="mr-4">Date of Birth:</span>
        <p>{patient.dateOfBirth}</p>
      </div>
      {/* Display other patient information here */}
    </div>
  );
};
export default PatientInfoBar;
