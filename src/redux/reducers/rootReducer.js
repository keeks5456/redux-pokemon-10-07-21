import { combineReducers } from "redux";
import pokedexReducer from "./pokedexReducer";
import pokemonInfoReducer from "./pokemonInfoReducer";

const allReducers = combineReducers({
  pokedex: pokedexReducer,
  pokemonInfo: pokemonInfoReducer
});

export default allReducers;
