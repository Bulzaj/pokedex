import { Col, Row } from "react-bootstrap";
import classes from "./imageListItem.module.css";

const ImageListItemDetails = function (props) {
  const { details } = props;

  if (!details) return;

  return (
    <Row md={2} lg={4} className={`${classes.details} justify-content-around`}>
      {details.map((detail, i) => {
        return (
          <Col key={i} className={`${classes.detailsCol} d-flex justify-content-center`}>
            <p className="text-muted mb-0">
              <strong>{detail.key}</strong>
            </p>
            : <p className="mb-0">{" " + detail.value}</p>
          </Col>
        );
      })}
    </Row>
  );
};

export default ImageListItemDetails;
