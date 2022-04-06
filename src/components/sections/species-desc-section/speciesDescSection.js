import { useState } from "react";
import { Placeholder, Card } from "react-bootstrap";
import Section from "../../section/section";
import VersionSelect from "./versionSelect";
import generateSpeciesDesc from "./generateSpeciesDesc";

const SpeciesDescSection = function (props) {
  const [version, setVersion] = useState();

  if (!props.flavorTextEntries)
    return (
      <>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={12} />
          <Placeholder xs={8} />
          <Placeholder xs={9} />
          <Placeholder xs={5} />
        </Placeholder>
        <VersionSelect isLoading />
      </>
    );

  const versionNames = props?.flavorTextEntries
    .filter((entry) => entry.language.name === "en")
    .map((entry) => entry.version.name);

  const onVersionSelect = function (version) {
    console.log(version);
    setVersion(version);
  };

  return (
    <Section title="Description">
      <p>
        {generateSpeciesDesc(
          props.flavorTextEntries,
          version || versionNames[0]
        )}
      </p>
      <VersionSelect
        versions={versionNames}
        onVersionSelect={onVersionSelect}
      />
    </Section>
  );
};

export default SpeciesDescSection;
