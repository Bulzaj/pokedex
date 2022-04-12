import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const LocalStorageAlert = function () {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <Alert variant="warning">
      <p>
        <strong>Warning:</strong> In the current version, the application uses
        local storage of your browser to store data about Pokemon.
        <br />
        That means your selections will be available only on that concrete
        browser.
        <br />
        <u>The inconvenience will be improved in the future!</u>
      </p>
      <Button variant="success" onClick={() => setShow(false)}>
        Close
      </Button>
    </Alert>
  );
};

export default LocalStorageAlert;
