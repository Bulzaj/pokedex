import GridItem from "./gridItem";

const GalleryItems = function (props) {
  const { items, itemWrapper, itemKey, spanWidth, spanHeight } = props;

  return items.map((item) => (
    <GridItem
      key={itemKey(item)}
      itemWrapper={itemWrapper(item)}
      spanWidth={spanWidth && spanWidth(item)}
      spanHeight={spanHeight && spanHeight(item)}
    />
  ));
};

export default GalleryItems;
