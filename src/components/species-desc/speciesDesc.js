import { useState } from "react";
import { Container, Form, Placeholder, Card } from "react-bootstrap";

const SpeciesDesc = function (props) {
  const versions = extractVersions(props.flavorTextEntries);
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

  const onVersionSelect = function (version) {
    setVersion(version);
  };

  return (
    <Container fluid className="bg-light rounded p-2">
      <h3 className="display-3">Description</h3>
      <p>
        {generateSpeciesDesc(props.flavorTextEntries, version || versions[0])}
      </p>
      <VersionSelect versions={versions} onVersionSelect={onVersionSelect} />
    </Container>
  );
};

const VersionSelect = function (props) {
  const handleOnChange = function (e) {
    e.preventDefault();
    props.onVersionSelect(e.target.value);
  };

  return (
    <Form.Group>
      <Form.Label>Versions: </Form.Label>
      {props.isLoading ? (
        <Form.Select disabled />
      ) : (
        <Form.Select size="sm" onChange={handleOnChange}>
          {props.versions.map((version) => (
            <option key={version}>{version}</option>
          ))}
        </Form.Select>
      )}
    </Form.Group>
  );
};

const extractVersions = function (flavorTextEntries, language = "en") {
  if (!flavorTextEntries) return;

  const result = flavorTextEntries
    .filter((entry) => entry.language.name === language)
    .map((entry) => entry.version.name);

  return result;
};

const generateSpeciesDesc = function (
  flavorTextEntries,
  version,
  language = "en"
) {
  if (!flavorTextEntries) return;

  const result = flavorTextEntries.filter(
    (entry) =>
      entry.version.name === version && entry.language.name === language
  );
  return result[0]?.flavor_text;
};

export default SpeciesDesc;
