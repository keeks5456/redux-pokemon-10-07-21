import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchAllFromPokedex } from "../../redux/actions/pokedexActions";
import PokedexCard from "./PokedexCard";

const PokeDex = ({ fetchAllFromPokedex, pokedexData }) => {
  useEffect(() => {
    fetchAllFromPokedex();
  }, [fetchAllFromPokedex]);

  console.log(pokedexData.pokeDex);
  return pokedexData.loading ? (
    <h2>Loading...</h2>
  ) : pokedexData.error ? (
    <p>{pokedexData.error}</p>
  ) : (
    <div>
      {pokedexData.pokeDex &&
        pokedexData.pokeDex.map((pokedex, index) => (
          <PokedexCard key={index} pokemonInfo={pokedex}/>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokedexData: state.pokedex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllFromPokedex: () => dispatch(fetchAllFromPokedex()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeDex);
