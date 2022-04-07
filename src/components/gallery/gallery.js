import classes from "./gallery.module.css";
import GalleryItems from "./galleryItems";

const Gallery = function (props) {
  const { items, itemWrapper, itemKey, spanWidth, spanHeight } = props;

  if (!items || !itemKey) return null;

  return (
    <div className={classes.gridContainer}>
      <GalleryItems
        itemKey={itemKey}
        items={items}
        itemWrapper={itemWrapper}
        spanWidth={spanWidth}
        spanHeight={spanHeight}
      />
    </div>
  );
};

export default Gallery;
