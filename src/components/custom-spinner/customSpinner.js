import { Container, Spinner } from "react-bootstrap";

const CustomSpinner = function (props) {
  return (
    <Container
      className={`d-flex justify-content-center p-2 ${props.vh100 && "vh-100"}`}
    >
      <Spinner animation="border" role="status" />
    </Container>
  );
};

export default CustomSpinner;
