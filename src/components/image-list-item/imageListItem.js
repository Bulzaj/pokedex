import { Container, Image } from "react-bootstrap";
import classes from "./imageListItem.module.css";

const ImageListItem = function (props) {
  const { imgSrc, title } = props;

  return (
    <Container className="d-flex justify-content-between align-items-center">
      {imgSrc && (
        <Image src={imgSrc} className={classes.itemImage} thumbnail rounded />
      )}
      {title && <h3>{title}</h3>}
    </Container>
  );
};

export default ImageListItem;
