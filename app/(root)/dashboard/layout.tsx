"use client";

import { DemographicsItem } from "@/lib/dummyData/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PatientInfoBar from "@/components/PatientInfoBar";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import Sidebar from "@/components/Sidebar";
import { usePatientStore } from "@/lib/store";
import { filterDemographicsData, getRelatedData } from "@/lib/filteringData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchData, setSearchData] = useState({
    lastName: "",
    dob: "",
    chartNumber: "",
  });
  const [showSearchResults, setShowSearchResults] = useState(true);
  const router = useRouter();

  const setSelectedPatient = usePatientStore(
    (state) => state.setSelectedPatient
  );
  const setRelatedData = usePatientStore((state) => state.setRelatedData);
  const selectedPatient = usePatientStore((state) => state.selectedPatient);

  const handleSearchSubmit = (
    data: Partial<{
      lastName: string;
      dob: string;
      chartNumber: string;
    }>
  ) => {
    console.log("Search Data Submitted: ", data); // Log search data
    setSearchData(
      data as {
        lastName: string;
        dob: string;
        chartNumber: string;
      }
    );
    setSelectedPatient(null);
    setShowSearchResults(true);
    router.push("/dashboard");
  };

  const handlePatientSelect = (patientData: DemographicsItem) => {
    setSelectedPatient(patientData);
    const relatedData = getRelatedData(patientData.patient.chartNumber);
    setRelatedData(relatedData);
    setShowSearchResults(false);
    router.push("/dashboard/demographics");
  };

  const filteredData = filterDemographicsData(searchData);
  console.log("Filtered Data!", filteredData);

  return (
    <section className="size-full min-h-screen flex">
      <div className="w-[20vw]">
        <Sidebar />
      </div>
      <div className="size-full min-h-screen">
        <div className="w-full h-[8vh] mt-[100px]">
          <SearchBar onSubmit={handleSearchSubmit} />
          {!showSearchResults && selectedPatient && (
            <PatientInfoBar patient={selectedPatient} />
          )}
          {showSearchResults && (
            <SearchResults
              data={filteredData}
              onPatientSelect={handlePatientSelect}
            />
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
