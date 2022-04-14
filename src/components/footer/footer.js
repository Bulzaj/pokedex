import { Button, Container } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";

const Footer = function () {
  return (
    <Container fluid className="bg-dark text-light">
      <p className="text-center">
        Amazing hero images created by
        <Button href="https://twitter.com/starsalts" variant="link">
          @starsalts <BsTwitter />
        </Button>
      </p>
    </Container>
  );
};

export default Footer;
