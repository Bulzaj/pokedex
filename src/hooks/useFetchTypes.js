import { useEffect, useState } from "react";
import fetch from "../fetch";

const useFetchTypes = function (typeNames) {
  const [types, setTypes] = useState();

  useEffect(() => {
    if (types || !typeNames) return;
    fetch({ endpoint: "type", ids: typeNames }, (data) => setTypes(data));
  }, [typeNames, types]);

  return types;
};

export default useFetchTypes;
