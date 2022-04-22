import { Alert, Button } from "react-bootstrap";

const NoFavAlert = function () {
  return (
    <Alert variant="info">
      <p>
        <strong>Info: </strong>It seems that you have not added any Pokemon to
        favourite. Click the below button to navigate to the Pokemon list.
      </p>
      <hr />
      <Button href="/pokemon-list" variant="primary">
        Pokemon list
      </Button>
    </Alert>
  );
};

export default NoFavAlert;
