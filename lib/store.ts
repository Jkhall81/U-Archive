import { create } from "zustand";
import { DemographicsItem } from "@/lib/dummyData/types";

interface PatientState {
  selectedPatient: DemographicsItem | null;

  relatedData: {
    documents: any[];
    history: any[];
    labs: any[];
    medications: any[];
    problems: any[];
    procedures: any[];
    visits: any[];
  };
  setSelectedPatient: (patient: DemographicsItem | null) => void;
  setRelatedData: (data: {
    documents: any[];
    history: any[];
    labs: any[];
    medications: any[];
    problems: any[];
    procedures: any[];
    visits: any[];
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
