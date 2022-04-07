import classes from "./gallery.module.css";

const GalleryItems = function (props) {
  const { items, itemWrapper, itemKey, isTall, isWide } = props;

  if (!items || !itemWrapper) return null;

  return items.map((item) => (
    <GridItem
      key={itemKey(item)}
      itemWrapper={itemWrapper(item)}
      isTall={isTall(item)}
      isWide={isWide(item)}
    />
  ));
};

const GridItem = function (props) {
  const { itemWrapper, isTall, isWide } = props;

  const tall = isTall && classes.gridItemTall;
  const wide = isWide && classes.gridItemWide;

  return <div className={(tall, wide)}>{itemWrapper}</div>;
};

export default GalleryItems;
