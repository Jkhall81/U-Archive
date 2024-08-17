import { SearchResultItem } from "./SearchResultItem";
import { Patient } from "@/lib/dummyData/types";

interface SearchResultsProps {
  data: Patient[];
  onPatientSelect: (patient: Patient) => void;
}

const SearchResults = ({ data, onPatientSelect }: SearchResultsProps) => {
  return (
    <div className="m-4 space-y-4">
      {data.length > 0 ? (
        data.map((patient) => (
          <SearchResultItem
            key={patient.chartNumber}
            chartNumber={patient.chartNumber}
            name={`${patient.firstName} ${patient.lastName}`}
            dob={patient.dateOfBirth}
            onClick={() => onPatientSelect(patient)}
          />
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
export default SearchResults;
