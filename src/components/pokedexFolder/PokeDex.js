import { connect } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllFromPokedex,
  nextPage,
  previousPage,
} from "../../redux/actions/pokedexActions";

//component
import PokedexCard from "./PokedexCard";
import PaginationRedux from "../pagination/PaginationRedux";

//styling
import { Container, ButtonContainer, Title } from "./pokedexStyling";
import pokemonLogo from "../../assets/pokemonLogo.png";
const PokeDex = ({
  fetchAllFromPokedex,
  pokedexData,
  nextPokePage,
  prevPokePage,
  nextPage,
  previousPage,
}) => {
  useEffect(() => {
    fetchAllFromPokedex();
  }, []);

  return pokedexData.loading ? (
    <h2>Loading...</h2>
  ) : pokedexData.error ? (
    <p>{pokedexData.error}</p>
  ) : (
    <>
      <Title></Title>
      <Container>
        {pokedexData.pokeDex &&
          pokedexData.pokeDex.map((pokedex, index) => (
            <PokedexCard key={index} pokemonInfo={pokedex} />
          ))}
      </Container>
      <ButtonContainer>
      <PaginationRedux
        nextPokePage={nextPokePage}
        prevPokePage={prevPokePage}
        goToNextPage={() => nextPage(nextPokePage)}
        goToPrevPage={() => previousPage(prevPokePage)}
      />
    </ButtonContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pokedexData: state.pokedex,
    nextPokePage: state.pokedex.nextPage,
    prevPokePage: state.pokedex.prevPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllFromPokedex: () => dispatch(fetchAllFromPokedex()),

    nextPage: (page) => dispatch(nextPage(page)),
    previousPage: (page) => dispatch(previousPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeDex);
