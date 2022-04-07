import { Navbar, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import TopNavbarSearchBox from "./topNavbarSearchBox";

// TODO: add random pokemon button
// TODO: on logo click returns to main page
const TopNavbar = function (props) {
  const { pokemonNames } = props;

  return (
    <>
      <Navbar sticky="top" expand="md" bg="dark" variant="dark">
        <Container>
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
            <TopNavbarSearchBox pokemonNames={pokemonNames} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
