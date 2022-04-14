import classes from "./gallery.module.css";

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

export default GridItem;
