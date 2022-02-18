import { useState, useEffect } from "react";
import axiosInstance from "../axios-config";
import { PER_PAGE_LIMIT } from "../consts";

class FetchError extends Error {
  constructor(message = "No data fetched") {
    super(message);
    this.name = "FetchError";
  }
}

const usePokemon = function () {
  const [results, setResults] = useState([]);

  useEffect(() => fetch(), []);

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

export default usePokemon;
