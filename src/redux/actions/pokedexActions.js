import {
  FETCH_POKEDEX_FAILURE,
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
} from "./productTypes";

const axios = require("axios");

//loading data
export const fetchPokedexRequest = () => {
  return {
    type: FETCH_POKEDEX_REQUEST,
  };
};

export const fetchPokedexSuccess = (data) => {
  return {
    type: FETCH_POKEDEX_SUCCESS,
    payload: data,
  };
};

export const fetchPokedexFailure = (error) => {
  return {
    type: FETCH_POKEDEX_FAILURE,
    payload: error,
  };
};

export const fetchAllFromPokedex = () => {
  return (dispatch) => {
    dispatch(fetchPokedexRequest);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => {
        const pokemons = res.data.results;
        console.log(pokemons);
        dispatch(fetchPokedexSuccess(pokemons));
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;

        dispatch(fetchPokedexFailure(errorMessage));
        console.log(errorMessage);
      });
  };
};

