//components
import PokeDex from "./components/PokeDex";

//routes
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route  path="/" element={<PokeDex />}></Route>
    </Routes>
  );
}

export default App;
