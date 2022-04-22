import { Container } from "react-bootstrap";
import { favouritesContext } from "../../context/favouritesContext";
import { useContext } from "react";
import LocalStorageAlert from "../../components/local-storage-alert/localStorageAlert";
import ClearButton from "../../components/clear-button/clearButton";
import NoFavAlert from "../../components/no-fav-alert/noFavAlert";
import Collection from "../../components/collection/collection";

const Favourites = function () {
  const { favourites } = useContext(favouritesContext);

  const getCollection = function (favourites) {
    if (!favourites || favourites.length === 0) return <NoFavAlert />;

    return (
      <>
        <h3 className="display-3">Favourites</h3>
        <Collection pokemonList={favourites} />
        <ClearButton />
      </>
    );
  };

  return (
    <Container>
      <LocalStorageAlert />
      {getCollection(favourites)}
    </Container>
  );
};

export default Favourites;
