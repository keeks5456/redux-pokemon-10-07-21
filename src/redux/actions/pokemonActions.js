import {
  FETCH_POKEMON_FALIURE,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from "./types";

import axios from "axios";

export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

export const fetchPokemonSuccess = (data) => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: data,
  };
};

export const fetchPokemonFailure = (error) => {
  return {
    type: FETCH_POKEMON_FALIURE,
    payload: error,
  };
};

export const fetchAllPokemon = () => {
  return (dispatch) =>{
    dispatch(fetchPokemonRequest);
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`)
    .then((res) =>{
      console.log(res)
      dispatch(fetchPokemonSuccess(res))
    })
    .catch((error) =>{
      const errorMessage = error.message
      dispatch(fetchPokemonFailure(errorMessage))
    })
  }
};
