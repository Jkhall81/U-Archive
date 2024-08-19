import { create } from "zustand";
import {
  DemographicsItem,
  HistoryItem,
  Document,
  Lab,
  Medication,
  Problem,
  Procedure,
  Visit,
} from "@/lib/dummyData/types";

interface PatientState {
  selectedPatient: DemographicsItem | null;

  relatedData: {
    documents: Document[];
    history: HistoryItem[];
    labs: Lab[];
    medications: Medication[];
    problems: Problem[];
    procedures: Procedure[];
    visits: Visit[];
  };
  setSelectedPatient: (patient: DemographicsItem | null) => void;
  setRelatedData: (data: {
    documents: Document[];
    history: HistoryItem[];
    labs: Lab[];
    medications: Medication[];
    problems: Problem[];
    procedures: Procedure[];
    visits: Visit[];
  }) => void;
}

export const usePatientStore = create<PatientState>((set) => ({
  selectedPatient: null,
  relatedData: {
    documents: [],
    history: [],
    labs: [],
    medications: [],
    problems: [],
    procedures: [],
    visits: [],
  },
  setSelectedPatient: (patient) => set({ selectedPatient: patient }),
  setRelatedData: (data) => set({ relatedData: data }),
}));
