const initialState = {
  loading: false,
  pokeDex: [],
  pokeTeam: [],
  error: "",
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POKEMON_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_POKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        pokeDex: action.payload,
      };
    case "FETCH_POKEMON_FALIURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
