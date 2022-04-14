import { useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Badge,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { capitalizeFirstLetter } from "../../../utils";
import Section from "../../section/section";
import MeasurementUnitsSwitch from "./measurementUnitsSwitch";
import ShowGender from "./showGender";

const GeneralInfoSection = function (props) {
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
    <Section title="Basic info" bg="info" text="light">
      <Row xs={1} md={2}>
        {/* --- Col left ---*/}
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
                  <ShowGender genderRate={props.info.genderRate} />
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
                <Tooltip id="evolvesFromTooltip">
                  The Pokémon species that evolves into this Pokemon species
                </Tooltip>
              }
            >
              <span>
                {capitalizeFirstLetter(
                  props.info.evolvesFrom?.name || "First form"
                )}{" "}
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

        {/* --- Col right ---*/}
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
    </Section>
  );
};

export default GeneralInfoSection;
