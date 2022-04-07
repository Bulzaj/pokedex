const getImageDimmensions = function (imgSrc) {
  if (!imgSrc) return;

  const img = new Image();
  img.src = imgSrc;

  return {
    w: img.width,
    h: img.height,
  };
};

export default getImageDimmensions;
