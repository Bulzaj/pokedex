import classes from "./gallery.module.css";

const GalleryItems = function (props) {
  const { items, itemWrapper, itemKey, spanWidth, spanHeight } = props;

  if (!items || !itemWrapper) return null;

  return items.map((item) => (
    <GridItem
      key={itemKey(item)}
      itemWrapper={itemWrapper(item)}
      spanWidth={spanWidth(item)}
      spanHeight={spanHeight(item)}
    />
  ));
};

const GridItem = function (props) {
  const { itemWrapper, spanWidth, spanHeight } = props;

  return (
    <div
      className={`${classes[`w-${spanWidth}`]} ${classes[`h-${spanHeight}`]}`}
    >
      {itemWrapper}
    </div>
  );
};

export default GalleryItems;
