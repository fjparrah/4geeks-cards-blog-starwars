import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <ul className="list-group">
        {store.personajesFavoritos.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {/* Agrega el contenido del personaje aquí */}
              <div>
                <span>Personaje: {item.char}</span>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => actions.removeFromFavorites(index)}
              >
                Eliminar
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">
          Volver a la página principal
        </button>
      </Link>
    </div>
  );
};
