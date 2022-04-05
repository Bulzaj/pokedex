import { Container, Spinner } from "react-bootstrap";

const EvolutionChainSpinner = function () {
  return (
    <Container fluid className="d-flex justify-content-center p-3">
      <Spinner animation="border" role="status" />
    </Container>
  );
};

export default EvolutionChainSpinner;
