import { useCallback, useState } from "react";
import fetch from "../fetch";

const useTypes = function () {
  const [types, setTypes] = useState();

  const applyData = function (data) {
    setTypes(data);
  };

  const fetchTypes = useCallback(function (typeNames, queryStrings) {
    fetch(
      {
        endpoint: "type",
        ids: typeNames,
        queryStrings,
      },
      applyData
    );
  }, []);

  return { types, fetchTypes };
};

export default useTypes;
