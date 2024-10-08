import { SearchResultItem } from "./SearchResultItem";
import { DemographicsData, DemographicsItem } from "@/lib/dummyData/types";
import { NoResults } from "./NoResults";

interface SearchResultsProps {
  data: DemographicsData;
  onPatientSelect: (patientData: DemographicsItem) => void;
}

const SearchResults = ({ data, onPatientSelect }: SearchResultsProps) => {
  return (
    <div className="m-4 space-y-4">
      {data.length > 0 ? (
        data.map((item) => (
          <SearchResultItem
            key={item.patient.chartNumber}
            chartNumber={item.patient.chartNumber}
            name={`${item.patient.firstName} ${item.patient.lastName}`}
            dob={item.patient.dateOfBirth}
            onClick={() => onPatientSelect(item)}
          />
        ))
      ) : (
        <NoResults />
      )}
      <div className="h-[150px]" />
    </div>
  );
};
export default SearchResults;
