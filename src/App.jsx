import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import Pelicula from "./components/Pelicula";

function App() {
  const [peli, setPeli] = useState("");
  function guardarItem(titulo, trailer) {
    setPeli({
        titulo,
        trailer,
      });
  }
  return (
    <>
      <Formulario onSubmit={guardarItem} />
      {peli && <Pelicula {...peli} />}
    </>
  );
}

export default App;
