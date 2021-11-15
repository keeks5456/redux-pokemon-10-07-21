import {
  FETCH_POKEDEX_FAILURE,
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
  //testing
  TO_NEXT_PAGE,
  TO_PREV_PAGE,
} from "./pokedexTypes";

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
//testing
export const toNextPage = (page) => {
  return {
    type: TO_NEXT_PAGE,
    payload: page,
  };
};

export const toPreviousPage = (page) => {
  return {
    type: TO_PREV_PAGE,
    payload: page,
  };
};



export const fetchAllFromPokedex = () => {
  return (dispatch) => {
    dispatch(fetchPokedexRequest);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => {
        const pokemons = res.data.results;
        const theNextPage = res.data.next;
        const thePrevPage = res.data.previous
        // console.log(pokemons);
        dispatch(fetchPokedexSuccess(pokemons));
        dispatch(toNextPage(theNextPage));
        dispatch(toPreviousPage(thePrevPage));
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;

        dispatch(fetchPokedexFailure(errorMessage));
        console.log(errorMessage);
      });
  };
};
