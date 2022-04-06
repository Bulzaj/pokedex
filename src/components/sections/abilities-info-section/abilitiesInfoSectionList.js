import { ListGroup, Image } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../utils";
import CustomSpinner from "../../custom-spinner/customSpinner";

const AbilitiesInfoSectionList = function (props) {
  const { pokemons, actualPokemon } = props;

  if (!pokemons) return <CustomSpinner />;

  return (
    <ListGroup variant="flush">
      {pokemons
        ?.filter((pokemon) => pokemon.name !== actualPokemon[0])
        .map((pokemon) => {
          return (
            <ListGroup.Item
              href={`/pokemon/${pokemon.name}`}
              key={pokemon.name}
              className="d-flex align-items-center justify-content-around"
              action
            >
              <Image
                style={{ width: "110px", height: "110px" }}
                src={
                  pokemon.sprites.other.dream_world.front_default ||
                  pokemon.sprites.other.home.front_default ||
                  pokemon.sprites.other["official-artwork"].front_default
                }
              />
              <p className="lead">{capitalizeFirstLetter(pokemon.name)}</p>
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default AbilitiesInfoSectionList;
