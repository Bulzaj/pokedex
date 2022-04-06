import { Container, Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../utils";

const DamageRelationsSectionRelation = function (props) {
  const { relation, title } = props;

  if (!relation || relation.length === 0) return null;

  return (
    <>
      <strong className="text-dark text-muted">{title}</strong>
      <Container className="d-flex flex-wrap justify-content-around">
        {relation.map((type) => (
          <Button key={type.name} variant={type.name} className="w-25 m-1">
            {capitalizeFirstLetter(type.name)}
          </Button>
        ))}
      </Container>
    </>
  );
};

export default DamageRelationsSectionRelation;
