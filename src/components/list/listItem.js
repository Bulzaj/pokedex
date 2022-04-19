import { ListGroup } from "react-bootstrap";

const ListItem = function (props) {
  const { itemWrapper } = props;

  return <ListGroup.Item action>{itemWrapper}</ListGroup.Item>;
};

export default ListItem;
