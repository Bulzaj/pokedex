import { capitalizeFirstLetter } from "../../utils";

const SearchBoxDataList = function (props) {
  const { searchValue, pokemonNames } = props;

  if (!searchValue && searchValue.length < 3) return null;

  return (
    <datalist id="pokemonNames">
      {pokemonNames.map((name) => (
        <option key={name} value={capitalizeFirstLetter(name)} />
      ))}
    </datalist>
  );
};

export default SearchBoxDataList;
