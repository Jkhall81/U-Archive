interface Props {
  label: string;
  name: string;
  placeHolder: string;
}

const SearchBarInput = ({ label, name, placeHolder }: Props) => {
  return (
    <div className="flex space-x-6 text-xl">
      <label htmlFor={name}>{label}</label>
      <input
        className="pl-4 text-xl rounded-xl placeholder-black bg-slate-400 dark:bg-white"
        name={name}
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
};
export default SearchBarInput;
