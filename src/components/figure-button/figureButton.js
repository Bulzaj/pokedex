import { Image } from "react-bootstrap";
import classes from "./figureButton.module.css";

const FigureButton = function (props) {
  const {
    imageSrc,
    imageRadius,
    bg,
    caption,
    onImgClick,
    onCaptionClick,
    icon,
  } = props;

  return (
    <div className="interactive d-flex flex-column align-items-center ">
      <div className={`${classes.buttonContainer}`}>
        <Image
          onClick={onImgClick && onImgClick}
          src={imageSrc}
          style={{ width: `${imageRadius}px`, height: `${imageRadius}px` }}
          className={`bg-${bg} ${classes.buttonImage}`}
          roundedCircle
        />
        <div className={classes.buttonIcon} onClick={onImgClick && onImgClick}>
          {icon}
        </div>
      </div>
      {caption && (
        <h3
          className={`hover-info p-2 ${classes.buttonCaption}`}
          onClick={onCaptionClick && onCaptionClick}
        >
          {caption}
        </h3>
      )}
    </div>
  );
};

FigureButton.defaultProps = {
  imageSrc: "",
  imageRadius: 180,
  bg: "light",
};

export default FigureButton;
