"use client";

import { Patient } from "@/lib/dummyData/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PatientInfoBar from "@/components/PatientInfoBar";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import Sidebar from "@/components/Sidebar";
import { demographicsData } from "@/lib/dummyData/demographics";

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
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const router = useRouter();

  const filterData = () => {
    return demographicsData
      .filter((item) => {
        const patient = item.patient;

        const matchesLastName = searchData.lastName
          ? patient.lastName.includes(searchData.lastName)
          : true;

        const matchesDob = searchData.dob
          ? patient.dateOfBirth.includes(searchData.dob)
          : true;

        const matchesChartNumber = searchData.chartNumber
          ? patient.chartNumber.toString().includes(searchData.chartNumber)
          : true;

        return matchesLastName && matchesDob && matchesChartNumber;
      })
      .map((item) => item.patient);
  };

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

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowSearchResults(false);
    router.push("/dashboard/demographics");
  };

  const filteredData = filterData();
  console.log("filtered data: ", filteredData);

  return (
    <section className="size-full min-h-screen flex">
      <div className="w-[20vw]">
        <Sidebar />
      </div>
      <div className="size-full min-h-screen">
        <div className="w-full h-[6vh] mt-[100px]">
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
