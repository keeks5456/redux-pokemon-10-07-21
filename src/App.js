//components
import PokeDex from "./components/pokedexFolder/PokeDex";
//routes
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <Routes>
      <Route  path="/pokedex" element={<PokeDex />}></Route>
    </Routes>
  );
}

export default App;
