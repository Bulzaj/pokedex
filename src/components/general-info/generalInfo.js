import { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Form } from "react-bootstrap";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

// TODO: Add explenations to certain stats
const GeneralInfo = function (props) {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleOnUnitsSwitch = function (isImperial) {
    setHeight(props.info.height * 10 + " cm");
    setWeight(props.info.weight * 0.1 + " kg");
    if (isImperial) {
      const heightInch = (props.info.height * 3.937).toFixed(2) + "";
      setHeight(heightInch.replace(".", "' ") + '"');
      setWeight((props.info.weight / 4.536).toFixed(2) + " lb");
    }
  };

  return (
    <Container fluid className="bg-info rounded p-2">
      <h3 className="display-3 text-light">Basic info</h3>
      <Row xs={1} md={2}>
        <Col>
          <ListGroup>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Height</strong>
              </span>
              <span>{height}</span>
            </ListGroup.Item>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Weight</strong>
              </span>
              <span>{weight}</span>
            </ListGroup.Item>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Gender</strong>
              </span>
              <span>
                <Gender genderRate={props.info.genderRate} />
              </span>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item
            variant="info"
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <strong>Is baby?</strong>
            </span>
            <span>{props.info.isBaby ? "Yes" : "No"}</span>
          </ListGroup.Item>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Base exp</strong>
              </span>
              <span>{props.info.baseExp}</span>
            </ListGroup.Item>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Base happiness</strong>
              </span>
              <span>{props.info.baseHappiness}</span>
            </ListGroup.Item>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Is legendary?</strong>
              </span>
              <span>{props.info.isLegendary ? "Yes" : "No"}</span>
            </ListGroup.Item>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Is mythical?</strong>
              </span>
              <span>{props.info.isMythical ? "Yes" : "No"}</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <MeasurementUnitsSwitch onUnitsSwitch={handleOnUnitsSwitch} />
    </Container>
  );
};

const MeasurementUnitsSwitch = function (props) {
  const [isImperial, setIsImperial] = useState(false);

  useEffect(() => {
    props.onUnitsSwitch && props.onUnitsSwitch(isImperial);
  }, [isImperial]);

  return (
    <Form>
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

const Gender = function (props) {
  if (props.genderRate < 0) return "UNKNOWN";
  if (props.genderRate === 0) return <BsGenderMale />;
  if (props.genderRate === 8) return <BsGenderFemale />;
  return (
    <>
      <BsGenderMale /> <BsGenderFemale />
    </>
  );
};

export default GeneralInfo;
