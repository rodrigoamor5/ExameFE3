import React from 'react'
//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({cardInfo}) {
  return (
    <div className="card">
      <h2>Card </h2>
      <p>Nombre: {cardInfo.nombre}</p>
      <p>Equipo favorito: {cardInfo.equipo}</p>
    </div>
  );
}

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario