import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TopNavbar from "../top-navbar/TopNavbar";
import PokemonList from "../pokemon-list/PokemonList";
import PaginationBar from "../pagination-bar/PaginationBar";
import axiosInstance from "../../axios-config";

const PER_PAGE_LIMIT = 20;
const TOTAL_RECORDS = 1118;

class FetchError extends Error {
  constructor(message = "No data fetched") {
    super(message);
    this.name = "FetchError";
  }
}

const scrollTop = function () {
  window.scrollTo(0, 0);
};

function App() {
  const [results, setResults] = useState([]);

  const onPageChange = function (selectedPage) {
    fetchData(selectedPage);
    scrollTop();
  };

  const fetchData = async function (page) {
    try {
      const res = await axiosInstance.get(
        `/pokemon?limit=${PER_PAGE_LIMIT}&offset=${PER_PAGE_LIMIT * (page - 1)}`
      );

      if (!res.data.results) throw new FetchError();
      setResults(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <div className="App">
      <TopNavbar />
      <Container className="mt-3" fluid>
        <PokemonList results={results} />
        <PaginationBar
          onPageChange={onPageChange}
          lastPage={Math.ceil(TOTAL_RECORDS / PER_PAGE_LIMIT)}
        />
      </Container>
    </div>
  );
}

export default App;
