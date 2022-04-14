const RegularList = function (props) {
  return <ul>{props.children}</ul>;
};

const Item = function (props) {
  if (!props.children) return null;
  return <li>{props.children}</li>;
};

RegularList.Item = Item;

export default RegularList;
