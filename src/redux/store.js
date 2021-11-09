import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import allReducers from "./reducers/rootReducer";

let store = createStore(allReducers, compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  ) 

export default store