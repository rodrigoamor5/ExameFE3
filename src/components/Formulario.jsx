import React, { useState } from 'react'

const Formulario = () => {

    const[nombre, setNombre] = useState("")//Tipo texto, estado inicial es 0
    const[equipo, setEquipo] = useState("")//Tipo numero, estado inicial es 0
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);


//PREVENT DEFAULT
    const handleSubmit = e => {
        e.preventDefault()

        if(!(validateNombre && validateEquipo)){
          setError("Por favor chequea que la información sea correcta")
          return
        }
        setError('')
        setSubmitted(true)
      }

    const validateNombre = (nombre) => {
      return nombre.trim().length < 3 || /^\s/.test(nombre);
    }

    const validateEquipo = (equipo) => {
      return nombre.trim().length < 6;
    }
    const cardInfo = {
      nombre: nombre,
      equipo: equipo
    };

  return (
    <>
      <form action=""
      onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre :</label>
        <input 
            type="text"
            placeholder='Ingrese su Nombre'
            value = {nombre}
            onChange = {e => setNombre(e.target.value)} 
        />

        <label htmlFor="equipo">Equipo :</label>
        <input 
            type="text"
            placeholder='Ingrese su Equipo favorito'
            value = {equipo}
            onChange={e => setEquipo(e.target.value)}
        />
        <button type = "submit"> Enviar </button>
      </form>
      {error && <p className="error">{error}</p>}
      {submitted && <Card info={cardInfo} />}
    </>
  )
}

export default Formulario
