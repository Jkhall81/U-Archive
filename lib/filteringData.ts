import { demographicsData } from "./dummyData/demographics";
import { documentsData } from "./dummyData/documents";
import { historyData } from "./dummyData/history";
import { labsData } from "./dummyData/labs";
import { medicationsData } from "./dummyData/medications";
import { problemsData } from "./dummyData/problems";
import { proceduresData } from "./dummyData/procedures";
import { visitsData } from "./dummyData/visits";
import { DemographicsData } from "./dummyData/types";
import { RelatedData } from "./dummyData/types";

export const filterDemographicsData = (searchData: {
  lastName: string;
  dob: string;
  chartNumber: string;
}): DemographicsData => {
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
    .map((item) => item);
};

// Get related data across all datasets based on chart number
export const getRelatedData = (chartNumber: number) => {
  return {
    documents: documentsData.filter((doc) => doc.chartNumber === chartNumber),
    history: historyData.filter((hist) => hist.chartNumber === chartNumber),
    labs: labsData.filter((lab) => lab.chartNumber === chartNumber),
    medications: medicationsData.filter(
      (med) => med.chartNumber === chartNumber
    ),
    problems: problemsData.filter((prob) => prob.chartNumber === chartNumber),
    procedures: proceduresData.filter(
      (proc) => proc.chartNumber === chartNumber
    ),
    visits: visitsData.filter((visit) => visit.chartNumber === chartNumber),
  };
};

// filter related data for linking based on encounterNumber
export function filterRelatedData(
  encounterNumber: string | undefined,
  relatedData: RelatedData
): RelatedData {
  // Define a generic filter function with type constraints
  const filterByEncounterNumber = <T extends { encounterNumber?: string }>(
    array: T[]
  ): T[] => array.filter((item) => item.encounterNumber === encounterNumber);

  return {
    // Apply the filter function to each property, ensuring types are preserved
    documents: filterByEncounterNumber(relatedData.documents),
    history: filterByEncounterNumber(relatedData.history),
    labs: filterByEncounterNumber(relatedData.labs),
    medications: filterByEncounterNumber(relatedData.medications),
    problems: filterByEncounterNumber(relatedData.problems),
    procedures: filterByEncounterNumber(relatedData.procedures),
    visits: filterByEncounterNumber(relatedData.visits),
  };
}
