import { NavDropdown } from "react-bootstrap";
import getCollectionTypeItem from "./getCollectionTypeItem";
import COLLECTION_TYPES from "./collectionTypes";

const CollectionPicker = function (props) {
  const { selectedType } = props;
  return (
    <NavDropdown
      title={getCollectionTypeItem(selectedType)}
      id="collection-picker"
    >
      {COLLECTION_TYPES.filter((type) => type !== selectedType).map((type) => (
        <NavDropdown.Item key={type} eventKey={`display-${type}`}>
          {getCollectionTypeItem(type)}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default CollectionPicker;
