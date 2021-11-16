import { connect } from "react-redux";
import { useState, useEffect } from "react";
import {
  fetchAllFromPokedex,
  // fetchPokemonDetails,
  // nextPage,
  // previousPage,
} from "../../redux/actions/pokedexActions";

//component
import PokedexCard from "./PokedexCard";
import Pagination from "../pagination/Pagination";
//testing
// import PaginationRedux from "../pagination/PaginationRedux";

//styling
import { Container } from "./pokedexStyling";

const PokeDex = ({
  fetchAllFromPokedex,
  // fetchPokemonDetails,
  pokedexData,
  nextPokePage,
  prevPokePage,
}) => {
  useEffect(() => {
    fetchAllFromPokedex();
    // fetchPokemonDetails();
  }, [fetchAllFromPokedex]);

  

  // console.log(pokedexData.pokeDex);
  return pokedexData.loading ? (
    <h2>Loading...</h2>
  ) : pokedexData.error ? (
    <p>{pokedexData.error}</p>
  ) : (
    <Container>
      {pokedexData.pokeDex &&
        pokedexData.pokeDex.map((pokedex, index) => (
          <PokedexCard key={index} pokemonInfo={pokedex} />
        ))}
      <Pagination />
      {/* <PaginationRedux nextPokePage={nextPokePage} prevPokePage={prevPokePage}/> */}
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    pokedexData: state.pokedex,
    nextPokePage: state.pokedex.nextPage,
    prevPokePage: state.pokedex.prevPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllFromPokedex: () => dispatch(fetchAllFromPokedex()),
    // fetchPokemonDetails: () => dispatch(fetchPokemonDetails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeDex);
