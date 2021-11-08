import { combineReducers } from "redux";
import pokedexReducer from "./pokedexReducer";

const allReducers = combineReducers({
  pokedex: pokedexReducer,
});

export default allReducers;
