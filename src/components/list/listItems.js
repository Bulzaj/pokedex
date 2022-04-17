import ListItem from "./listItem";

const ListItems = function (props) {
  const { items, itemWrapper, itemKey } = props;

  return items.map((item) => (
    <ListItem key={itemKey(item)} itemWrapper={itemWrapper(item)} />
  ));
};

export default ListItem;
