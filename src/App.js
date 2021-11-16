import { useState, useEffect } from "react";
import axios from "axios";

//components
import PokeDex from "./components/pokedexFolder/PokeDex";
import Pagination from "./components/pagination/Pagination";
import PokemonList from "./components/pokedexFolder/PokemonList";

import PaginationRedux from "./components/pagination/PaginationRedux";
//routes
import { Routes, Route } from "react-router-dom";
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });
    return () => cancel();
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <Routes>
        {/*redux way*/}
        <Route path="/pokedex" element={<PokeDex />}></Route>
        {/*react way*/}
        <Route path="/" element={<PokemonList pokemon={pokemon} />}></Route>
      </Routes>
      {/*  <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        gotToPrevPage={prevPageUrl ? gotToPrevPage : null}
/>   */}
      <PaginationRedux />
    </>
  );
}

export default App;
