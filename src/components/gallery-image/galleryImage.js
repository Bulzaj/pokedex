import { Image, Button } from "react-bootstrap";
import CustomSpinner from "../custom-spinner/customSpinner";
import classes from "./galleryImage.module.css";
import { capitalizeFirstLetter } from "../../utils";

const GalleryImage = function (props) {
  const { src, pokemonName, pokemonId } = props;

  if (!src) <CustomSpinner />;

  const handleContainerClick = function () {
    console.log("container clicked");
  };

  const handleFavouritesClick = function (e) {
    e.stopPropagation();
    console.log("favourites clicked");
  };

  return (
    <div
      onClick={handleContainerClick}
      className={`${classes.imageContainer} bg-light interactive shadow-lg`}
    >
      <div className={classes.controlWrapper}>
        <div className={classes.controlsRowEnd}>
          <Button onClick={handleFavouritesClick}>Add to favourites</Button>
        </div>
        <div className={classes.controlsRowCenter}>
          <div className={classes.titleConteiner}>
            <h3 className={classes.title}>
              {capitalizeFirstLetter(pokemonName) + " "}
              <strong className="text-muted">
                #{`${pokemonId}`.padStart(3, 0)}
              </strong>
            </h3>
          </div>
        </div>
      </div>
      <Image className={`${classes.image} p-2`} src={src} />
    </div>
  );
};

export default GalleryImage;
