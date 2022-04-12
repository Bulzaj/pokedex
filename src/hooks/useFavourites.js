import { useEffect, useState } from "react";

const useFavourites = function () {
  const [favourites, setFavourites] = useState(() => getFavourites());

  useEffect(() => save(favourites), [favourites]);

  const add = function (pokemonName) {
    if (favourites.includes(pokemonName)) return;
    const favouritesArr = getFavourites();
    favouritesArr.push(pokemonName);
    setFavourites(favouritesArr);
  };

  const remove = function (pokemonName) {
    if (!favourites.includes(pokemonName)) return;
    const favouritesArr = getFavourites();
    const newArray = favouritesArr.filter(
      (favourite) => favourite !== pokemonName
    );
    setFavourites(newArray);
  };

  const clear = function () {
    if (favourites.length === 0) return;
    setFavourites([]);
  };

  return { favourites, add, remove, clear };
};

const getFavourites = function () {
  if (!localStorage.getItem("favourites")) return [];
  return JSON.parse(localStorage.getItem("favourites"));
};

const save = function (favourites) {
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export default useFavourites;
