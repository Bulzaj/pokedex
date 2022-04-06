import Section from "../../section/section";
import DamageRelationsSectionAccordion from "./damageRelationsSectionAccordion";

const DamageRelationsSection = function (props) {
  const { relations } = props;
  return (
    <Section
      title="Damage relations"
      desc="A detail of how effective this type is toward others and vice versa."
    >
      <DamageRelationsSectionAccordion relations={relations} />
    </Section>
  );
};

export default DamageRelationsSection;
