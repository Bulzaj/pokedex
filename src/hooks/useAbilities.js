import { useCallback, useState } from "react";
import fetch from "../fetch";

const useAbilities = function () {
  const [abilities, setAbilities] = useState();

  const applyData = function (data) {
    console.log(data);
    setAbilities(data);
  };

  const fetchAbilities = useCallback(function (abilityNames, queryStrings) {
    fetch(
      {
        endpoint: "ability",
        ids: abilityNames,
        queryStrings,
      },
      applyData
    );
  }, []);

  return { abilities, fetchAbilities };
};
export default useAbilities;
