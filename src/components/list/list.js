import { Container, ListGroup } from "react-bootstrap";

const List = function (props) {
  const { items, itemWrapper, itemKey } = props;

  return (
    <Container>
      <ListGroup>
        <ListItems items={items} itemWrapper={itemWrapper} itemKey={itemKey} />
      </ListGroup>
    </Container>
  );
};

export default List;
