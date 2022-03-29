import { Container, Button, Accordion } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils";

const DamageRelations = function (props) {
  return (
    <Container fluid className="bg-light text-dark rounded p-2">
      <h3 className="display-3">Damage relations</h3>
      <p>
        A detail of how effective this type is toward others and vice versa.
      </p>
      {props.relations &&
        props?.relations.map((relation) => (
          <Accordion key={relation.type} flush>
            <Accordion.Item eventKey={`${relation.type}_take`}>
              <Accordion.Header>
                As {capitalizeFirstLetter(relation.type)} take
              </Accordion.Header>
              <Accordion.Body>
                <DamageRelation
                  title="2x Damage from: "
                  relation={relation.relations.double_damage_from}
                />
                <DamageRelation
                  title="0.5x Damage from: "
                  relation={relation.relations.half_damage_from}
                />
                <DamageRelation
                  title="No damage from: "
                  relation={relation.relations.no_damage_from}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={`${relation.type}_deal`}>
              <Accordion.Header>
                As {capitalizeFirstLetter(relation.type)} deal
              </Accordion.Header>
              <Accordion.Body>
                <DamageRelation
                  title="2x Damage to"
                  relation={relation.relations.double_damage_to}
                />
                <DamageRelation
                  title="0.5x Damage to"
                  relation={relation.relations.half_damage_to}
                />
                <DamageRelation
                  title="No damage to"
                  relaion={relation.relations.no_damage_to}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
    </Container>
  );
};

const DamageRelation = function (props) {
  if (!props.relation) return <></>;

  return (
    props.relation?.length !== 0 && (
      <div>
        <strong className="text-dark text-muted">{props.title}</strong>
        <Container className="d-flex flex-wrap justify-content-around">
          {props.relation.map((type) => (
            <Button key={type.name} variant={type.name} className="w-25 m-1">
              {capitalizeFirstLetter(type.name)}
            </Button>
          ))}
        </Container>
      </div>
    )
  );
};

export default DamageRelations;
