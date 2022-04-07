import { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomSpinner from "../custom-spinner/customSpinner";
import SearchBoxDataList from "./searchBoxDataList";

const TopNavbarSearchBox = function (props) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { pokemonNames } = props;

  if (!pokemonNames) return <CustomSpinner />;

  const handleOnChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    navigate(`/pokemon/${searchValue.toLowerCase()}`);
  };

  return (
    <Form className="d-flex" onSubmit={handleOnClick}>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        list="pokemonNames"
        onChange={handleOnChange}
      />
      <SearchBoxDataList
        pokemonNames={pokemonNames}
        searchValue={searchValue}
      />
      <Button variant="outline-success" onClick={handleOnClick}>
        Search
      </Button>
    </Form>
  );
};

export default TopNavbarSearchBox;
