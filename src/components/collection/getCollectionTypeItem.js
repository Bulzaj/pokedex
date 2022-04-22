import { BsFillGrid3X3GapFill, BsListUl, BsCardHeading } from "react-icons/bs";
import classes from "./collection.module.css";
import COLLECTION_TYPES from "./collectionTypes";

const getCollectionTypeItem = function (collectionType) {
  if (collectionType === COLLECTION_TYPES[0]) {
    return (
      <>
        Gallery{" "}
        <span className={classes.iconWrapper}>
          <BsFillGrid3X3GapFill />
        </span>
      </>
    );
  }
  if (collectionType === COLLECTION_TYPES[1]) {
    return (
      <>
        List{" "}
        <span className={classes.iconWrapper}>
          <BsListUl />
        </span>
      </>
    );
  }

  return (
    <>
      Cards{" "}
      <span className={classes.iconWrapper}>
        <BsCardHeading />
      </span>
    </>
  );
};

export default getCollectionTypeItem;
