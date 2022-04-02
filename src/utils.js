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

export const detailParser = function (detailsEntries) {
  switch (detailsEntries[0]) {
    case "party_type":
      return (
        detailsEntries[1] &&
        `The player must have a Pokémon of ${detailsEntries[1].name.toUpperCase()} type in their party during the evolution trigger event`
      );
    case "party_species":
      return (
        detailsEntries[1] &&
        `${detailsEntries[1].name.toUpperCase()} species must be in the players party`
      );
    case "relative_physical_stats":
      if (detailsEntries[1] > 0)
        return "Attack status must be greater than defense to evolve";
      if (detailsEntries[1] === 0)
        return "Attack status must be equal defense to evolve";
      if (detailsEntries[1] < 0)
        return "Defense must be greater than attack to evolve";
      return null;
    case "turn_upside_down":
      return detailsEntries[1] && "Must be upside down to evolve";
    case "time_of_day":
      if (detailsEntries[1] === "night") return "Evolves only at the night";
      if (detailsEntries[1] === "day") return "Evolves only at the day";
      return "Time of the day does not affect evolution";
    case "needs_overworld_rain":
      return (
        detailsEntries[1] &&
        "Must be raining in the overworld to cause evolution"
      );
    case "min_happiness":
      return detailsEntries[1]
        ? `Min happiness level: ${detailsEntries[1]}`
        : "No min happinness level is required";
    case "min_beauty":
      return detailsEntries[1]
        ? `Min beauty level: ${detailsEntries[1]}`
        : "No min beauty level is required";
    case "min_affection":
      return detailsEntries[1]
        ? `Min affection level: ${detailsEntries[1]}`
        : "No min affection level is required";
    case "held_item":
      return detailsEntries[1]
        ? `Must hold / wear ${detailsEntries[1].name.toUpperCase()} item`
        : null;
    case "known_move":
      return (
        detailsEntries[1] &&
        `Must know ${detailsEntries[1].name.toUpperCase()} move`
      );
    case "known_move_type":
      return (
        detailsEntries[1] &&
        `Must know ${detailsEntries[1].name.toUpperCase()} move type`
      );
    case "location":
      return detailsEntries[1]
        ? `Evolution must be triggered in location ${detailsEntries[1].name.toUpperCase()}`
        : "Can evolve in any location";
    case "item":
      return (
        detailsEntries[1] &&
        `Require ${detailsEntries[1].name.toUpperCase()} item`
      );
    case "min_level":
      return detailsEntries[1]
        ? `Min level: ${detailsEntries[1]}`
        : "No min level is required";
    case "gender":
      if (!detailsEntries[1]) return "Gender does not affect evolution";
      if (detailsEntries[1] === 1) return "Only females can evolve";
      if (detailsEntries[1] === 2) return "Only males can evolve";
    case "trigger":
      return `Evolution trigger: ${detailsEntries[1].name.toUpperCase()}`;
  }
};
