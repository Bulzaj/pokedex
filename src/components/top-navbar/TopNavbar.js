import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";

const TopNavbar = function () {
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
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
