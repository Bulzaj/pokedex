import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import FetchError from "../errors/fetchError";

const useFetchTypesDetails = function (typeNames) {
  const [typesDetails, setTypesDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!typeNames) return;
    if (typeNames instanceof Object) {
      const types = typeNames.map((type) => type.type.name);
      fetch(types);
    } else {
      fetch(typeNames);
    }
  }, [typeNames]);

  const fetch = async function (typeNames) {
    setIsLoading(true);
    try {
      const responses = await axios.all(
        typeNames.map((name) => axiosInstance.get(`/type/${name}`))
      );
      const result = responses.map((response) => response.data);
      setTypesDetails(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new FetchError(error.message);
    }
  };
  return { typesDetails, isLoading };
};

export default useFetchTypesDetails;
