import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const MeasurementUnitsSwitch = function (props) {
  const [isImperial, setIsImperial] = useState(false);

  useEffect(() => {
    props.onUnitsSwitch && props.onUnitsSwitch(isImperial);
  }, [isImperial]);

  return (
    <Form className="p-2">
      <Form.Group>
        <Form.Check
          className="text-light"
          onChange={() => setIsImperial((prevState) => !prevState)}
          checked={isImperial}
          type="switch"
          id="toMetricSwitch"
          label="Switch to imperial system"
        />
      </Form.Group>
    </Form>
  );
};

export default MeasurementUnitsSwitch;
