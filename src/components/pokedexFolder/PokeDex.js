import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { fetchAllFromPokedex } from "../../redux/actions/pokedexActions";
//component
import PokedexCard from "./PokedexCard";
import Pagination from "../pagination/Pagination";


//styling
import { Container } from "./pokedexStyling";

const PokeDex = ({ fetchAllFromPokedex, pokedexData }) => {


  useEffect(() => {
    fetchAllFromPokedex();
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
          <PokedexCard key={index} pokemonInfo={pokedex}/>
        ))}
        <Pagination />
    </Container>
    
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    pokedexData: state.pokedex,
    nextPokePage: state.pokedex.nextPage,
    prevPokePage: state.pokedex.prevPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllFromPokedex: () => dispatch(fetchAllFromPokedex()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeDex);
