import { useState } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils";
import logo from "../../assets/logo.png";

const TopNavbar = function (props) {
  const [searchValue, setSearchValue] = useState("");

  let datalist;
  if (searchValue.length >= 3) {
    datalist = (
      <datalist id="pokemonNames">
        {props.pokemonNames.map((name) => (
          <option key={name} value={capitalizeFirstLetter(name)} />
        ))}
      </datalist>
    );
  }

  const handleOnChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    props.onSearchClick && props.onSearchClick(searchValue);
  };

  return (
    <>
      <Navbar sticky="top" expand="md" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="50"
              height="30"
              className="d-inline-block align-top"
            />
            Pokedex
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar" />
          <Navbar.Collapse
            id="responsive-navbar"
            className="flex-row flex-row-reverse"
          >
            <Form className="d-flex" onSubmit={handleOnClick}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                list="pokemonNames"
                onChange={handleOnChange}
              />
              {datalist}
              <Button variant="outline-success" onClick={handleOnClick}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
