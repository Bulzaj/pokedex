import CustomSpinner from "../../custom-spinner/customSpinner";
import DamageRelationSectionRelation from "./damageRelationsSectionRelation";
import { Accordion } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../utils";

const DamageRelationsSectionAccordion = function (props) {
  const { relations } = props;

  if (!relations) return <CustomSpinner />;

  return relations.map((relation) => (
    <Accordion key={relation.type} flush>
      <Accordion.Item eventKey={`${relation.type}_take`}>
        <Accordion.Header>
          As {capitalizeFirstLetter(relation.type)} take
        </Accordion.Header>
        <Accordion.Body>
          <DamageRelationSectionRelation
            title="2x Damage from: "
            relation={relation.relations.double_damage_from}
          />
          <DamageRelationSectionRelation
            title="0.5x Damage from: "
            relation={relation.relations.half_damage_from}
          />
          <DamageRelationSectionRelation
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
          <DamageRelationSectionRelation
            title="2x Damage to"
            relation={relation.relations.double_damage_to}
          />
          <DamageRelationSectionRelation
            title="0.5x Damage to"
            relation={relation.relations.half_damage_to}
          />
          <DamageRelationSectionRelation
            title="No damage to"
            relaion={relation.relations.no_damage_to}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ));
};

export default DamageRelationsSectionAccordion;
