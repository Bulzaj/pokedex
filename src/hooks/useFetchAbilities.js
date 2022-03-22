import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../axiosConfig";
import FetchError from "../errors/fetchError";

const useFetchAbilities = function (abilityList) {
  const [abilities, setAbilities] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(abilityList);
  }, [abilityList]);

  const fetch = async function (abilityList) {
    if (!abilityList) return;
    setIsLoading(true);
    try {
      const response = await axios.all(
        abilityList.map((ability) =>
          axiosInstance.get(`ability/${ability.ability.name}`)
        )
      );
      setAbilities(response.map((response) => response.data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new FetchError(error.message);
    }
  };

  return [abilities, isLoading];
};
export default useFetchAbilities;
