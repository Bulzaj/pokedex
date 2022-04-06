import { Row, Col, ProgressBar } from "react-bootstrap";
import Section from "../../section/section";

const StatsInfoSection = function (props) {
  return (
    <Section
      title="Statistics"
      desc="A list of base stat values for this Pokémon."
      bg="success"
      text="light"
    >
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
    </Section>
  );
};

export default StatsInfoSection;
