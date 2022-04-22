import { Container, Image } from "react-bootstrap";
import FavButton from "../fav-Button/favButton";
import classes from "./imageListItem.module.css";
import ImageListItemDetails from "./imageListItemDetails";

const ImageListItem = function (props) {
  const { imgSrc, title, details, onListItemClick, btnBottom } = props;

  return (
    <>
      <Container
        className="d-flex justify-content-between align-items-center"
        onClick={() => onListItemClick && onListItemClick()}
      >
        {imgSrc && (
          <span>
            <Image src={imgSrc} className={`${classes.itemImage} m-2`} />
          </span>
        )}
        <ImageListItemDetails details={details} />
        {title && <h3>{title}</h3>}
      </Container>
      <Container className="d-flex justify-content-center">
        {btnBottom && btnBottom}
      </Container>
    </>
  );
};

export default ImageListItem;
