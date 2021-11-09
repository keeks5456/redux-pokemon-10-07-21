//components
import PokeDex from "./components/PokeDex";
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
