import { useState, useEffect } from "react";
import axiosInstance from "../axios-config";
import { PER_PAGE_LIMIT } from "../consts";
import FetchError from "../errors/fetch-error";

const useFetchPokemonList = function () {
  const [results, setResults] = useState([]);

  useEffect(() => fetch(1), []);

  const fetch = async function (page) {
    try {
      const res = await axiosInstance.get(
        `/pokemon?limit=${PER_PAGE_LIMIT}&offset=${PER_PAGE_LIMIT * (page - 1)}`
      );

      if (!res.data.results) throw new FetchError();
      setResults(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return { results, fetch };
};

export default useFetchPokemonList;
