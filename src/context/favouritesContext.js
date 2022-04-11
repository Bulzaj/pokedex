import { createContext } from "react";
import useFavourites from "../hooks/useFavourites";

export const favouritesContext = createContext();

const FavouritesContextProvider = function (props) {
  const { favourites, add, remove } = useFavourites();

  return (
    <favouritesContext.Provider value={{ favourites, add, remove }}>
      {props.children}
    </favouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
