import { Form } from "react-bootstrap";

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

export default VersionSelect;
