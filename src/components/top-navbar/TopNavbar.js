import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import FavouritesLink from "./favouritesLink";
import TopNavbarSearchBox from "./topNavbarSearchBox";

// TODO: add random pokemon button
const TopNavbar = function (props) {
  const { pokemonNames } = props;

  return (
    <>
      <Navbar
        className="mb-3"
        sticky="top"
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Nav>
            <Nav.Link href="/">
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
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar" />
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="me-auto my-2 my-lg-0">
              <FavouritesLink />
            </Nav>
            <TopNavbarSearchBox pokemonNames={pokemonNames} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
