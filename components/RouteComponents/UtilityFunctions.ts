import {
  Lab,
  Document,
  HistoryItem,
  Medication,
  Problem,
  Procedure,
  Visit,
} from "@/lib/dummyData/types";

export const getResultsItemProps = (
  item: Lab | Document | HistoryItem | Medication | Problem | Procedure | Visit
): { fieldName: string; fieldDate: string } => {
  // Lab
  if ("testName" in item && "testDate" in item && "labName" in item) {
    return { fieldName: item.testName, fieldDate: item.testDate };

    // Document
  } else if (
    "documentName" in item &&
    "documentDate" in item &&
    "documentPath" in item
  ) {
    return { fieldName: item.documentName, fieldDate: item.documentDate };

    // History
  } else if ("historyCategory" in item && "item" in item && "date" in item) {
    return { fieldName: item.item, fieldDate: item.date };

    // Medication
  } else if ("medicationName" in item && "startDate" in item) {
    return { fieldName: item.medicationName, fieldDate: item.startDate };

    // Problem
  } else if ("diagDesc" in item && "probDate" in item) {
    return { fieldName: item.diagDesc, fieldDate: item.probDate };

    // Procedure
  } else if (
    "facilityName" in item &&
    "testName" in item &&
    "testDate" in item
  ) {
    return { fieldName: item.testName, fieldDate: item.testDate };

    // Visit
  } else if ("visitType" in item && "visitDate" in item) {
    return { fieldName: item.visitType, fieldDate: item.visitDate };
  }
  return { fieldName: "", fieldDate: "" };
};

// function for detail card props

interface CardField {
  fieldName: string;
  fieldValue: string | number | undefined;
}

export const getDetailContent = (
  item: Lab | Document | HistoryItem | Medication | Problem | Procedure | Visit
): { fields1: CardField[]; fields2: CardField[] } => {
  // Lab
  if ("labName" in item && "testName" in item) {
    return {
      fields1: [
        { fieldName: "Encounter Number", fieldValue: item.encounterNumber },
        { fieldName: "Lab Name", fieldValue: item.labName },
        { fieldName: "Test Name", fieldValue: item.testName },
        { fieldName: "Test Date", fieldValue: item.testDate },
        { fieldName: "Result Date", fieldValue: item.resultDate },
      ],
      fields2: [
        { fieldName: "Result 1", fieldValue: item.result1 },
        { fieldName: "Result 2", fieldValue: item.result2 },
        { fieldName: "Result 3", fieldValue: item.result3 },
        { fieldName: "Result 4", fieldValue: item.result4 },
        { fieldName: "Result 5", fieldValue: item.result5 },
        { fieldName: "Result 6", fieldValue: item.result6 },
        { fieldName: "Result 7", fieldValue: item.result7 },
        { fieldName: "Result 8", fieldValue: item.result8 },
      ],
    };
    // Document
  } else if ("documentName" in item && "documentPath" in item) {
    return {
      fields1: [
        { fieldName: "Name", fieldValue: item.documentName },
        { fieldName: "Type", fieldValue: item.documentType },
      ],
      fields2: [
        { fieldName: "Date", fieldValue: item.documentDate },
        { fieldName: "Path", fieldValue: item.documentPath },
      ],
    };
    // HistoryItem
  } else if ("historyCategory" in item) {
    return {
      fields1: [
        { fieldName: "Item", fieldValue: item.item },
        { fieldName: "Category", fieldValue: item.historyCategory },
        { fieldName: "Description", fieldValue: item.description },
        { fieldName: "Notes", fieldValue: item.notes },
        { fieldName: "Results", fieldValue: item.results },
      ],
      fields2: [
        { fieldName: "Physican Last Name", fieldValue: item.drLastName },
        { fieldName: "Physican First Name", fieldValue: item.drFirstName },
        { fieldName: "Date", fieldValue: item.date },
      ],
    };
    // Medication
  } else if (
    "medicationName" in item &&
    "doseUnit" in item &&
    "frequency" in item
  ) {
    return {
      fields1: [
        { fieldName: "Name", fieldValue: item.medicationName },
        { fieldName: "Duration", fieldValue: item.duration },
        { fieldName: "Dose", fieldValue: item.dose },
        { fieldName: "Dose Unit", fieldValue: item.doseUnit },
        { fieldName: "Frequency", fieldValue: item.frequency },
        { fieldName: "Comments", fieldValue: item.comments },
      ],
      fields2: [
        { fieldName: "Intake", fieldValue: item.intake },
        { fieldName: "Route", fieldValue: item.route },
        { fieldName: "Physician Last Name", fieldValue: item.drLastName },
        { fieldName: "Physician First Name", fieldValue: item.drFirstName },
        { fieldName: "Start Date", fieldValue: item.startDate },
        { fieldName: "End Date", fieldValue: item.endDate },
      ],
    };
    // Problem
  } else if ("diagCode" in item && "probDate" in item) {
    return {
      fields1: [
        { fieldName: "Diagnosis Code", fieldValue: item.diagCode },
        { fieldName: "Date", fieldValue: item.probDate },
        { fieldName: "Description", fieldValue: item.diagDesc },
      ],
      fields2: [
        { fieldName: "Physician Last Name", fieldValue: item.drLastName },
        { fieldName: "Physician First Name", fieldValue: item.drFirstName },
      ],
    };
    // Procedure
  } else if ("facilityName" in item && "testName" in item) {
    return {
      fields1: [
        { fieldName: "Encounter Number", fieldValue: item.encounterNumber },
        { fieldName: "Facility Name", fieldValue: item.facilityName },
        { fieldName: "Test Name", fieldValue: item.testName },
        { fieldName: "Test Date", fieldValue: item.testDate },
        { fieldName: "Result Date", fieldValue: item.resultDate },
      ],
      fields2: [
        { fieldName: "Result 1", fieldValue: item.result1 },
        { fieldName: "Result 2", fieldValue: item.result2 },
        { fieldName: "Result 3", fieldValue: item.result3 },
        { fieldName: "Result 4", fieldValue: item.result4 },
        { fieldName: "Result 5", fieldValue: item.result5 },
        { fieldName: "Result 6", fieldValue: item.result6 },
        { fieldName: "Result 7", fieldValue: item.result7 },
        { fieldName: "Result 8", fieldValue: item.result8 },
      ],
    };
    // Visit
  } else if ("visitType" in item && "visitDate" in item) {
    return {
      fields1: [
        { fieldName: "Visit Type", fieldValue: item.visitType },
        { fieldName: "Visit Date", fieldValue: item.visitDate },
        { fieldName: "PDF File", fieldValue: item.PDFFile },
      ],
      fields2: [
        { fieldName: "Physician Last Name", fieldValue: item.drLastName },
        { fieldName: "Physician First Name", fieldValue: item.drFirstName },
      ],
    };
  }
  return { fields1: [], fields2: [] };
};
