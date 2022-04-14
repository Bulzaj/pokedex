import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import FavouritesLink from "./favouritesLink";
import TopNavbarSearchBox from "./topNavbarSearchBox";
import PokemonListLink from "./pokemonListLink";

// TODO: add random pokemon button
const TopNavbar = function (props) {
  const { pokemonNames } = props;
  const location = useLocation();

  const customizeNavbar = function (location) {
    if (!location) return;

    if (location.pathname !== "/") {
      return { sticky: "top", bg: "dark", variant: "dark" };
    }

    return {
      bg: "transparent",
      variant: "dark",
      fixed: "top",
    };
  };

  return (
    <>
      <Navbar {...customizeNavbar(location)} expand="md">
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
              <PokemonListLink />
            </Nav>
            <TopNavbarSearchBox pokemonNames={pokemonNames} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
