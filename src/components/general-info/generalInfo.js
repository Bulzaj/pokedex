import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  Badge,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { capitalizeFirstLetter } from "../../utils";

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
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 450 }}
                overlay={
                  <Tooltip id="genderRateTooltip">
                    The chance of this Pokémon being female, in eighths; or -1
                    for genderless. For current Pokémon gender rate is:{" "}
                    {props.info.genderRate}
                  </Tooltip>
                }
              >
                <span>
                  <Gender genderRate={props.info.genderRate} />
                  <Badge bg="info"> ? </Badge>
                </span>
              </OverlayTrigger>
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
          <ListGroup.Item
            variant="info"
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <strong>Evolves from</strong>
            </span>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 450 }}
              overlay={
                <Tooltip id="genderRateTooltip">
                  The Pokémon species that evolves into this Pokemon species
                </Tooltip>
              }
            >
              <span>
                {capitalizeFirstLetter(props.info.evolvesFrom?.name)}{" "}
                <Badge bg="info"> ? </Badge>
              </span>
            </OverlayTrigger>
          </ListGroup.Item>
          <ListGroup.Item
            variant="info"
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <strong>Growth rate</strong>
            </span>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 450 }}
              overlay={
                <Tooltip id="genderRateTooltip">
                  The rate at which this Pokémon species gains levels.
                </Tooltip>
              }
            >
              <span>
                {props.info.growthRate} <Badge bg="info"> ? </Badge>
              </span>
            </OverlayTrigger>
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
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 450 }}
                overlay={
                  <Tooltip id="baseExpTooltip">
                    The base experience gained for defeating this Pokémon.
                  </Tooltip>
                }
              >
                <span>
                  {props.info.baseExp} <Badge bg="info"> ? </Badge>
                </span>
              </OverlayTrigger>
            </ListGroup.Item>

            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Base happiness</strong>
              </span>
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 450 }}
                overlay={
                  <Tooltip id="baseHappinessTooltip">
                    The happiness when caught by a normal Pokéball; up to 255.
                    The higher the number, the happier the Pokémon.
                  </Tooltip>
                }
              >
                <span>
                  {props.info.baseHappiness} <Badge bg="info"> ? </Badge>
                </span>
              </OverlayTrigger>
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
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Capture rate</strong>
              </span>
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 450 }}
                overlay={
                  <Tooltip id="genderRateTooltip">
                    The higher the number, the easier the catch
                  </Tooltip>
                }
              >
                <span>
                  {props.info.captureRate} <Badge bg="info"> ? </Badge>
                </span>
              </OverlayTrigger>
            </ListGroup.Item>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Genera</strong>
              </span>
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 450 }}
                overlay={
                  <Tooltip id="genderRateTooltip">
                    The genus of this Pokémon species
                  </Tooltip>
                }
              >
                <span>
                  {props.info.genera
                    ?.filter((item) => item.language.name === "en")
                    .map((item) => item.genus)}{" "}
                  <Badge bg="info"> ? </Badge>
                </span>
              </OverlayTrigger>
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
