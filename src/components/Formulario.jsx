/* eslint-disable react/prop-types */
import { useState } from "react";

function Formulario(props) {
  const [titulo, setTitulo] = useState("");
  const [trailer, setTrailer] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (titulo.trim().length < 3 || trailer.length < 6) {
      setError("Por favor chequea que la información sea correcta")
      return
    }
    setError("")
    props.onSubmit(titulo.trim(), trailer);
    setTitulo("");
    setTrailer("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="formulario">
      <h2>Ingresa tu peli favorita</h2>
        <label htmlFor="titulo">Ingresa su título</label>
        <input
          className="input"
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <label htmlFor="trailer">Ingresa su trailer, buscalo en youtube</label>
        <input
          className="input"
          id="trailer"
          type="text"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />
        <button type="submit">Guardar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
}
export default Formulario;