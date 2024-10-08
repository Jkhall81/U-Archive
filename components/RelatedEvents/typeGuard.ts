import {
  Document,
  Lab,
  Problem,
  Visit,
  Procedure,
  Medication,
  HistoryItem,
} from "@/lib/dummyData/types";

// Checks if item is an array of Document
export function isDocument(items: any): items is Document[] {
  return (
    Array.isArray(items) &&
    items.every(
      (item) =>
        typeof item.chartNumber === "number" &&
        typeof item.documentType === "string" &&
        typeof item.documentName === "string" &&
        typeof item.documentDate === "string" &&
        typeof item.documentPath === "string" &&
        typeof item.encounterNumber === "string"
    )
  );
}

export function isLab(items: any): items is Lab[] {
  return (
    Array.isArray(items) &&
    items.every(
      (item) =>
        typeof item.chartNumber === "number" &&
        typeof item.labName === "string" &&
        typeof item.testName === "string" &&
        typeof item.testDate === "string" &&
        typeof item.result3 === "string" &&
        typeof item.result8 === "string"
    )
  );
}

export function isProblem(items: any): items is Problem[] {
  return (
    Array.isArray(items) &&
    items.every(
      (item) =>
        typeof item.chartNumber === "number" &&
        typeof item.diagCode === "string" &&
        typeof item.probDate === "string" &&
        typeof item.diagDesc === "string"
    )
  );
}

export function isVisit(items: any): items is Visit[] {
  return (
    Array.isArray(items) &&
    items.every(
      (item) =>
        typeof item.chartNumber === "number" &&
        typeof item.PDFFile === "string" &&
        typeof item.visitDate === "string" &&
        typeof item.visitType === "string"
    )
  );
}

export function isProcedure(items: any): items is Procedure[] {
  return (
    Array.isArray(items) &&
    items.every(
      (item) =>
        typeof item.chartNumber === "number" &&
        typeof item.facilityName === "string" &&
        typeof item.result2 === "string" &&
        typeof item.testName === "string" &&
        typeof item.resultDate === "string" &&
        typeof item.result7 === "string"
    )
  );
}

export function isMedication(items: any): items is Medication[] {
  return (
    Array.isArray(items) &&
    items.every(
      (item) =>
        typeof item.chartNumber === "number" &&
        typeof item.medicationName === "string" &&
        typeof item.dose === "string" &&
        typeof item.route === "string" &&
        typeof item.intake === "string" &&
        typeof item.frequency === "string"
    )
  );
}

export function isHistory(items: any): items is HistoryItem[] {
  return (
    Array.isArray(items) &&
    items.every(
      (item) =>
        typeof item.chartNumber === "number" &&
        typeof item.historyCategory === "string" &&
        typeof item.item === "string" &&
        typeof item.description === "string" &&
        typeof item.results === "string" &&
        typeof item.notes === "string"
    )
  );
}
