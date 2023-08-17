import React, { useState } from 'react';
import Card from './components/Card'

const App = () => {
  const [nombre, setNombre] = useState("");
  const [equipo, setEquipo] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(validateNombre(nombre) && validateEquipo(equipo))) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const validateNombre = (nombre) => {
    return nombre.trim().length < 3 || /^\s/.test(nombre);
  };

  const validateEquipo = (equipo) => {
    return equipo.trim().length < 6;
  };

  const cardInfo = {
    nombre,
    equipo
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre :</label>
        <input
          type="text"
          placeholder="Ingrese su Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="equipo">Equipo :</label>
        <input
          type="text"
          placeholder="Ingrese su Equipo favorito"
          value={equipo}
          onChange={(e) => setEquipo(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      //{submitted && <Card cardInfo={cardInfo} />}
    </div>
  );
};

export default App;
