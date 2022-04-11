import { useContext } from "react";
import { Badge, Nav } from "react-bootstrap";
import { favouritesContext } from "../../context/favouritesContext";

const FavouritesLink = function () {
  const { favourites } = useContext(favouritesContext);

  const favouritesCount = favourites.length ? favourites.length : null;

  return (
    <Nav.Link href="/favourites">
      Favourites <Badge pill>{favouritesCount}</Badge>
    </Nav.Link>
  );
};

export default FavouritesLink;
