import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const StatsInfo = function (props) {
  return (
    <Container fluid className="bg-success text-light rounded p-2">
      <h3 className="display-3">Statistics</h3>
      {props?.stats.map((stat) => (
        <Row key={stat.stat.name}>
          <Col sm={4}>
            <p>{stat.stat.name}</p>
          </Col>
          <Col sm={8}>
            <ProgressBar
              variant="primary"
              label={stat.base_stat}
              striped
              now={stat.base_stat / 1.2}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default StatsInfo;
