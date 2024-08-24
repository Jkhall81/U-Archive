import { Document, Lab } from "@/lib/dummyData/types";

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
