const generateSpeciesDesc = function (
  flavorTextEntries,
  version,
  language = "en"
) {
  if (!flavorTextEntries) return;

  const result = flavorTextEntries.filter(
    (entry) =>
      entry.version.name === version && entry.language.name === language
  );
  return result[0]?.flavor_text;
};

export default generateSpeciesDesc;
