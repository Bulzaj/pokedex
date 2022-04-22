import { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import usePokemons from "../../hooks/usePokemons";
import CollectionPicker from "./collectionPicker";
import COLLECTION_TYPES from "./collectionTypes";
import renderCollection from "./renderCollection";

const Collection = function (props) {
  const { pokemonList } = props;
  const { pokemons: pokemonCollection, fetchPokemons } = usePokemons();
  const [collectionType, setCollectionType] = useState(COLLECTION_TYPES[0]);

  useEffect(() => {
    fetchPokemons(pokemonList);
  }, [fetchPokemons, pokemonList]);

  const handleSelect = function (eventKey) {
    const type = eventKey.split("-")[1];
    setCollectionType(type);
  };

  return (
    <Container>
      <Nav variant="pills" onSelect={handleSelect}>
        <CollectionPicker selectedType={collectionType} />
      </Nav>
      {renderCollection(collectionType, pokemonCollection)}
    </Container>
  );
};

export default Collection;
