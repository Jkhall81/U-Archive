"use client";

import { DemographicsItem } from "@/lib/dummyData/types";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const setSelectedPatient = usePatientStore(
    (state) => state.setSelectedPatient
  );
  const setRelatedData = usePatientStore((state) => state.setRelatedData);
  const selectedPatient = usePatientStore((state) => state.selectedPatient);

  useEffect(() => {
    // Redirect if there is no selectedPatient and the current path is a subpath of /dashboard
    if (
      !selectedPatient &&
      pathname.startsWith("/dashboard/") &&
      pathname !== "/dashboard"
    ) {
      router.push("/dashboard");
    }
  }, [selectedPatient, pathname, router]);

  const handleSearchSubmit = (
    data: Partial<{
      lastName: string;
      dob: string;
      chartNumber: string;
    }>
  ) => {
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

  return (
    <section className="size-full min-h-screen flex pr-4">
      <div className="w-[20vw] mt-[201px] mx-6">
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
