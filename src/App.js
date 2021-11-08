//components
import PokeDex from "./components/PokeDex";

//routes
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route exact path="/pokedex" component={PokeDex}></Route>
    </Routes>
  );
}

export default App;
