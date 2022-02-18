export const capitalizeFirstLetter = function (string) {
  if (!string) return;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const scrollTop = function () {
  window.scrollTo(0, 0);
};

export const generateFooterColor = function (types) {
  if (!types) throw Error("No pokemon types provided");

  const colors = types.map((type) => `--color-${type.type.name}`);

  if (colors.length === 1) return `var(${colors[0]})`;

  return `linear-gradient(to right, ${colors.map(
    (color) => ` var(${color})`
  )})`;
};
