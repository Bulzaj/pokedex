export const capitalizeFirstLetter = function (string) {
  if (!string) return;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const scrollTop = function () {
  window.scrollTo(0, 0);
};

export const generateGradient = function (types) {
  if (!types) throw Error("No pokemon types provided");

  const colors = types.map((type) => `--color-${type.type.name}`);

  if (colors.length === 1) return `var(${colors[0]})`;

  return `linear-gradient(to right, ${colors.map(
    (color) => ` var(${color})`
  )})`;
};

export const evolutionDetailParser = function (detailEntry) {
  switch (detailEntry[0]) {
    case "party_type":
      return (
        detailEntry[1] &&
        `The player must have a Pokémon of ${detailEntry[1].name.toUpperCase()} type in their party during the evolution trigger event`
      );
    case "party_species":
      return (
        detailEntry[1] &&
        `${detailEntry[1].name.toUpperCase()} species must be in the players party`
      );
    case "relative_physical_stats":
      if (detailEntry[1] > 0)
        return "Attack status must be greater than defense to evolve";
      if (detailEntry[1] === 0)
        return "Attack status must be equal defense to evolve";
      if (detailEntry[1] < 0)
        return "Defense must be greater than attack to evolve";
      return null;
    case "turn_upside_down":
      return detailEntry[1] && "Must be upside down to evolve";
    case "time_of_day":
      if (detailEntry[1] === "night") return "Evolves only at the night";
      if (detailEntry[1] === "day") return "Evolves only at the day";
      return "Time of the day does not affect evolution";
    case "needs_overworld_rain":
      return (
        detailEntry[1] && "Must be raining in the overworld to cause evolution"
      );
    case "min_happiness":
      return detailEntry[1]
        ? `Min happiness level: ${detailEntry[1]}`
        : "No min happinness level is required";
    case "min_beauty":
      return detailEntry[1]
        ? `Min beauty level: ${detailEntry[1]}`
        : "No min beauty level is required";
    case "min_affection":
      return detailEntry[1]
        ? `Min affection level: ${detailEntry[1]}`
        : "No min affection level is required";
    case "held_item":
      return detailEntry[1]
        ? `Must hold / wear ${detailEntry[1].name.toUpperCase()} item`
        : null;
    case "known_move":
      return (
        detailEntry[1] && `Must know ${detailEntry[1].name.toUpperCase()} move`
      );
    case "known_move_type":
      return (
        detailEntry[1] &&
        `Must know ${detailEntry[1].name.toUpperCase()} move type`
      );
    case "location":
      return detailEntry[1]
        ? `Evolution must be triggered in location ${detailEntry[1].name.toUpperCase()}`
        : "Can evolve in any location";
    case "item":
      return (
        detailEntry[1] && `Require ${detailEntry[1].name.toUpperCase()} item`
      );
    case "min_level":
      return detailEntry[1]
        ? `Min level: ${detailEntry[1]}`
        : "No min level is required";
    case "gender":
      if (!detailEntry[1]) return "Gender does not affect evolution";
      if (detailEntry[1] === 1) return "Only females can evolve";
      if (detailEntry[1] === 2) return "Only males can evolve";
    case "trigger":
      return `Evolution trigger: ${detailEntry[1].name.toUpperCase()}`;
    default:
      return null;
  }
};
