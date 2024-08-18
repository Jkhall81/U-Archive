export type Patient = {
  chartNumber: number;
  firstName: string;
  midInitial: string;
  lastName: string;
  dateOfBirth: string;
  SSN: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
  homePhone: string;
  workPhone: string;
  cellPhone: string;
  email: string;
};

export interface ResponsibleParty {
  chartNumber: number;
  respFirstName: string;
  respLastName: string;
  respMI: string;
  respDateOfBirth: string;
  respSSN: string;
  respHomePhone: string;
  respWorkPhone: string;
  respCellPhone: string;
  respStreet1: string;
  respStreet2?: string; // Optional
  respCity: string;
  respState: string;
  respZipCode: string;
  respEmail: string;
}

export interface Insurance1 {
  chartNumber: number;
  ins1Code: string;
  ins1Name: string;
  ins1Street1: string;
  ins1Street2?: string; // Optional
  ins1City: string;
  ins1State: string;
  ins1ZipCode: string;
  ins1Phone: string;
  ins1MemberNo: string;
  ins1GroupName: string;
  Ins1GroupNumber: string;
  ins1Ded: number;
}

export interface Insurance2 {
  chartNumber: number;
  ins2Code: string;
  ins2Name: string;
  ins2Street1: string;
  ins2Street2?: string; // Optional
  ins2City: string;
  ins2State: string;
  ins2ZipCode: string;
  ins2Phone: string;
  ins2MemberNo: string;
  ins2GroupName: string;
  Ins2GroupNumber: string;
  ins2Ded: number;
}

export interface Document {
  chartNumber: number;
  documentType: string;
  documentName: string;
  documentDate: string;
  documentPath: string;
  encounterNumber: string;
}

export interface HistoryItem {
  chartNumber: number;
  historyCategory: string;
  date: string;
  item: string;
  description: string;
  drFirstName: string;
  drLastName: string;
  results: string;
  notes: string;
  encounterNumber: string;
}

export interface Lab {
  chartNumber: number;
  encounterNumber: string;
  labName: string;
  testName: string;
  testDate: string;
  result1: string;
  result2: string;
  result3: string;
  result4: string;
  result5: string;
  result6: string;
  result7: string;
  result8: string;
  resultDate: string;
}

export interface Medication {
  chartNumber: number;
  medicationName: string;
  startDate: string;
  endDate: string;
  drFirstName: string;
  drLastName: string;
  duration: string;
  dose: string;
  doseUnit: string;
  intake: string;
  frequency: string;
  route: string;
  comments: string;
  encounterNumber: string;
}

export interface Problem {
  chartNumber: number;
  diagCode: string;
  diagDesc: string;
  probDate: string;
  drFirstName: string;
  drLastName: string;
}

export interface Procedure {
  chartNumber: number;
  encounterNumber: string;
  facilityName: string;
  testName: string;
  testDate: string;
  result1: string;
  result2: string;
  result3: string;
  result4: string;
  result5: string;
  result6: string;
  result7: string;
  result8: string;
  resultDate: string;
}

export interface Visit {
  chartNumber: number;
  encounterNumber: string;
  visitDate: string;
  drFirstName: string;
  drLastName: string;
  visitType: string;
  PDFFile: string;
  base64Blob: string;
}

export interface DemographicsItem {
  patient: Patient;
  responsibleParty: ResponsibleParty;
  insurance1: Insurance1;
  insurance2: Insurance2;
}

export type DemographicsData = DemographicsItem[];
