"use client";

import { useState } from "react";
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
  };

  const filteredData = filterData();
  console.log("filtered data: ", filteredData);

  return (
    <section className="size-full min-h-screen flex">
      <div className="w-[20vw]">
        <Sidebar />
      </div>
      <div className="border-2 border-blue-500 size-full min-h-screen">
        <div className="border-2 border-orange-500 w-full h-[6vh] mt-[100px]">
          <SearchBar onSubmit={handleSearchSubmit} />
          <PatientInfoBar />
          <SearchResults data={filteredData} />
          {children}
        </div>
      </div>
    </section>
  );
}
