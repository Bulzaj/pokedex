import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const GeneralInfo = function (props) {
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
              <span>{props.info.height * 10} cm</span>
            </ListGroup.Item>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <strong>Weight</strong>
              </span>
              <span>{props.info.weight * 0.1} kg</span>
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
    </Container>
  );
};

const Gender = function (props) {
  // console.log(props.genderRate);
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
