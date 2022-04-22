import { ListGroup } from "react-bootstrap";

const ListItem = function (props) {
  const { itemWrapper } = props;

  return (
    <ListGroup.Item as="li" action className="shadow interactive">
      {itemWrapper}
    </ListGroup.Item>
  );
};

export default ListItem;
