"use client";

import { usePatientStore } from "@/lib/store";

const DemographicsPage = () => {
  const selectedPatient = usePatientStore((state) => state.selectedPatient);
  const relatedData = usePatientStore((state) => state.relatedData);
  console.log("demographics!", selectedPatient);
  console.log("demoGraphics!", relatedData);
  return <div>DemographicsPage</div>;
};
export default DemographicsPage;
