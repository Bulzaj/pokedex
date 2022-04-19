import { Container, Image } from "react-bootstrap";
import classes from "./imageListItem.module.css";
import ImageListItemDetails from "./imageListItemDetails";

const ImageListItem = function (props) {
  const { imgSrc, title, details, onListItemClick } = props;

  return (
    <Container
      onClick={() => onListItemClick && onListItemClick()}
      className="d-flex justify-content-between align-items-center"
    >
      {imgSrc && (
        <span>
          <Image src={imgSrc} className={`${classes.itemImage} m-2`} />
        </span>
      )}
      <ImageListItemDetails details={details} />
      {title && <h3>{title}</h3>}
    </Container>
  );
};

export default ImageListItem;
