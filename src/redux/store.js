import { createStore } from "redux";
import allReducers from "./reducers/rootReducer";

const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //the create store will pass in a reducer as a param

export default store