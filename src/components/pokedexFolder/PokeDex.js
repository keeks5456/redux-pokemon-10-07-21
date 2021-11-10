import { connect } from "react-redux";
import { useSelector, useEffect } from "react";
import { fetchAllFromPokedex } from "../../redux/actions/pokedexActions";
import PokedexCard from "./PokedexCard";
//styling
import { Container } from "./pokedexStyling";

const PokeDex = ({ fetchAllFromPokedex, pokedexData }) => {
const [currentPage, setCurrentPage] = useSelector("https://pokeapi.co/api/v2/pokemon")


  useEffect(() => {
    fetchAllFromPokedex();
  }, [fetchAllFromPokedex]);

  console.log(pokedexData.pokeDex);
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
    </Container>
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
