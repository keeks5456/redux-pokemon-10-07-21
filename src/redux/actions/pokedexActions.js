import {
  FETCH_POKEDEX_FAILURE,
  FETCH_POKEDEX_REQUEST,
  FETCH_POKEDEX_SUCCESS,
  FETCH_POKEMON_DETAIL_SUCCESS,
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
        const nextPage = res.data.next
        dispatch(fetchPokedexSuccess(pokemons));
        dispatch(toNextPage(nextPage))
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        dispatch(fetchPokedexFailure(errorMessage));
        console.log(errorMessage);
      });
    };
  };


export const nextPage = (page) => {
  return (dispatch) => {
    dispatch(fetchPokedexRequest);
    axios
      .get(page)
      .then((res) => {
        const pokemons = res.data.results
        const nextPage = res.data.next;
        const prevPage = res.data.previous;
        dispatch(fetchPokedexSuccess(pokemons));
        dispatch(toNextPage(nextPage));
        dispatch(toPreviousPage(prevPage));
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        dispatch(fetchPokedexFailure(errorMessage));
        console.log(errorMessage);
      });
  };
};

export const previousPage = (page) => {
  return (dispatch) => {
    dispatch(fetchPokedexRequest);
    axios
      .get(page)
      .then((res) => {
        const pokemons = res.data.results
        const prevPage = res.data.previous;
        const nextPage = res.data.next;
        console.log(prevPage);
        dispatch(fetchPokedexSuccess(pokemons))
        dispatch(toPreviousPage(prevPage));
        dispatch(toNextPage(nextPage));
      })
      .catch((error) => {
        const errorMessage = error.errorMessage;
        dispatch(fetchPokedexFailure(errorMessage));
        console.log(errorMessage);
      });
  };
};
