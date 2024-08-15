import SearchBarInput from "./SearchBarInput";

const SearchBar = () => {
  return (
    <div className="size-full flex justify-between items-center px-8">
      <SearchBarInput label="Last Name" name="lastName" placeHolder="Doe" />
      <SearchBarInput label="DOB" name="dob" placeHolder="08/13/1989" />
      <SearchBarInput
        label="Chart Number"
        name="chartNumber"
        placeHolder="254"
      />
    </div>
  );
};
export default SearchBar;
