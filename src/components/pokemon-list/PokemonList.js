import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../axios-config";
import { Row, Col, Spinner } from "react-bootstrap";
import PokemonCard from "../pokemon-card/PokemonCard";

const PokemonList = function (props) {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!props.results) return;

    setIsLoading(true);

    const endpoints = props.results.map((result) => `/pokemon/${result.name}`);

    async function fetchData() {
      if (!endpoints) return;

      try {
        const responses = await axios.all(
          endpoints.map((endpoint) => axiosInstance.get(endpoint))
        );
        const data = responses.map((response) => response.data);
        setPokemons(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [props.results]);

  if (!props.results) {
    console.log("No results");
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (pokemons) {
    return (
      <Row className="d-flex justify-content-center g-3">
        {pokemons.map((pokemon) => (
          <Col md lg="auto" key={pokemon.name}>
            <PokemonCard pokemon={pokemon} isLoading={isLoading} />
          </Col>
        ))}
      </Row>
    );
  }

  return <></>;
};

export default PokemonList;
