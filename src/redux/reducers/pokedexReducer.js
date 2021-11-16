
const initialState = {
  loading: false,
  pokeDex: [],
  pokeTeam: [],
  error: "",
  nextPage: "",
  prevPage: ""
};

const pokedexReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POKEDEX_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_POKEDEX_SUCCESS":
      return {
        ...state,
        loading: false,
        pokeDex: action.payload,
      };
    case "FETCH_POKEDEX_FALIURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "TO_NEXT_PAGE":
      return {
        ...state,
        loading: false,
        nextPage: action.payload
      };
    case "TO_PREV_PAGE":
      return {
        ...state,
        loading: false,
        prevPage: action.payload
      }
    default:
      return state;
  }
};

export default pokedexReducer;
