"use client";

import { usePatientStore } from "@/lib/store";
import { PatientDisplay } from "@/components/DashboardDemographics/PatientDisplay";
import { ResponsiblePartyDisplay } from "@/components/DashboardDemographics/ResponsiblePartyDisplay";
import { Insurance1Display } from "@/components/DashboardDemographics/Insurance1Display";
import { Insurance2Display } from "@/components/DashboardDemographics/Insurance2Display";

const DemographicsPage = () => {
  const selectedPatient = usePatientStore((state) => state.selectedPatient);
  const relatedData = usePatientStore((state) => state.relatedData);
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full">
        <PatientDisplay patientData={selectedPatient?.patient} />
        <ResponsiblePartyDisplay
          responsiblePartyData={selectedPatient?.responsibleParty}
        />
        <Insurance1Display insurance1Data={selectedPatient?.insurance1} />
        <Insurance2Display insurance2Data={selectedPatient?.insurance2} />
        <div className="h-[100px]" />
      </div>
    </section>
  );
};
export default DemographicsPage;
