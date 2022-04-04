import { useEffect, useState } from "react";
import fetch from "../fetch";

const useFetchAbilities = function (abilityNames) {
  const [abilities, setAbilities] = useState();

  useEffect(() => {
    if (abilities || !abilityNames) return;
    fetch({ endpoint: "ability", ids: abilityNames }, (data) =>
      setAbilities(data)
    );
  }, [abilityNames, abilities]);

  return abilities;
};
export default useFetchAbilities;
