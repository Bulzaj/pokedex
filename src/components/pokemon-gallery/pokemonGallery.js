import Gallery from "../gallery/gallery";
import GalleryImage from "../gallery-image/galleryImage";
import CustomSpinner from "../custom-spinner/customSpinner";

const PokemonGallery = function (props) {
  const { pokemonCollection } = props;

  const itemWrapper = (item) => {
    const imageSrc = item.sprites.other.dream_world.front_default;
    return (
      <GalleryImage
        src={imageSrc}
        pokemonName={item.name}
        pokemonId={item.id}
      />
    );
  };

  const itemKey = (item) => item.name;

  console.log(pokemonCollection);

  if (!pokemonCollection) return <CustomSpinner />;

  return (
    <Gallery
      items={pokemonCollection}
      itemKey={itemKey}
      itemWrapper={itemWrapper}
    />
  );
};

export default PokemonGallery;
