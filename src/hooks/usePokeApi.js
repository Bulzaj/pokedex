import axios from "axios";
import { useState } from "react";
import axiosInstance from "../axiosConfig";
import FetchError from "../errors/fetchError";

const usePokeApi = function () {
  const [isLoading, setIsLoading] = useState(false);

  const fetchResource = async function (requestConfig, applyData) {
    try {
      setIsLoading(true);
      const response = await axios.all(
        requestConfig.ids.map((id) => {
          axiosInstance.get(`/${requestConfig.endpoint}/${id}`);
        })
      );
      console.log(response);
    } catch (error) {
      throw new FetchError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchResource, isLoading };
};

export default usePokeApi;
