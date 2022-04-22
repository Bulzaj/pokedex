import { Container, ListGroup } from "react-bootstrap";

import ListItems from "./listItems";

const List = function (props) {
  const { items, itemWrapper, itemKey } = props;

  return (
    <Container fluid>
      <ListGroup as="ul" variant="flush">
        <ListItems items={items} itemWrapper={itemWrapper} itemKey={itemKey} />
      </ListGroup>
    </Container>
  );
};

export default List;
