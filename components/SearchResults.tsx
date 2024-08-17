import { SearchResultItem } from "./SearchResultItem";

interface Patient {
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
}

interface SearchResultsProps {
  data: Patient[];
}

const SearchResults = ({ data }: SearchResultsProps) => {
  return (
    <div className="m-4 space-y-4">
      {data.length > 0 ? (
        data.map((patient) => (
          <SearchResultItem
            key={patient.chartNumber}
            chartNumber={patient.chartNumber}
            name={`${patient.firstName} ${patient.lastName}`}
            dob={patient.dateOfBirth}
          />
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
export default SearchResults;
