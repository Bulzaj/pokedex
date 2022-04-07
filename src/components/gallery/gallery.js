import classes from "./gallery.module.css";
import GalleryItems from "./galleryItems";

const Gallery = function (props) {
  const { items, itemWrapper, itemKey, isTall, isWide } = props;

  if (!items || !itemKey) return null;

  return (
    <div className={classes.gridContainer}>
      <GalleryItems
        itemKey={itemKey}
        items={items}
        itemWrapper={itemWrapper}
        isTall={isTall}
        isWide={isWide}
      />
    </div>
  );
};

export default Gallery;
