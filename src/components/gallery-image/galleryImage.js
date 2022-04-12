import { Image } from "react-bootstrap";
import CustomSpinner from "../custom-spinner/customSpinner";
import classes from "./galleryImage.module.css";
import { capitalizeFirstLetter } from "../../utils";
import { useNavigate } from "react-router-dom";
import FavButton from "../fav-Button/favButton";

const GalleryImage = function (props) {
  const { src, pokemonName, pokemonId } = props;
  const navigate = useNavigate();

  if (!src) <CustomSpinner />;

  const handleContainerClick = function () {
    navigate(`/pokemon/${pokemonName}`);
  };

  return (
    <div
      onClick={handleContainerClick}
      className={`${classes.imageContainer} bg-light interactive shadow-lg`}
    >
      <div className={classes.controlWrapper}>
        <div className={classes.controlsRowEnd}>
          <FavButton pokemonName={pokemonName} />
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
