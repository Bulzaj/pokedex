import { Container } from "react-bootstrap";
import { favouritesContext } from "../../context/favouritesContext";
import { useContext } from "react";
import PokemonGallery from "../../components/pokemon-gallery/pokemonGallery";
import LocalStorageAlert from "../../components/local-storage-alert/localStorageAlert";
import ClearButton from "../../components/clear-button/clearButton";
import NoFavAlert from "../../no-fav-alert/noFavAlert";

const Favourites = function () {
  const { favourites } = useContext(favouritesContext);

  return (
    <Container>
      <LocalStorageAlert />
      {favourites.length === 0 && <NoFavAlert />}
      <h3 className="display-3">Favourites</h3>
      {favourites && <PokemonGallery pokemonList={favourites} />}
      <ClearButton />
    </Container>
  );
};

export default Favourites;
