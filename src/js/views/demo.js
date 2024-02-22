import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [favoritos, setFavoritos] = useState(store.personajesFavoritos);

  useEffect(() => {
    // Actualiza la lista de favoritos cuando hay cambios en store.personajesFavoritos
    setFavoritos(store.personajesFavoritos);
  }, [store.personajesFavoritos]);
         
  const handleRemoveFromFavorites = (index) => {
    // Cambiado de character.index a index
    actions.removeFromFavorites(index);
  };

  return (
    <div className="text-center container">
      <h1 className="mb-5">Personajes Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>No hay personajes favoritos.</p>
      ) : (
        <ul className="list-group">
          {favoritos.map((character, index) => ( // Cambiado de store.personajesFavoritos a favoritos
            <li key={index} className="list-group-item">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h5 className="my-3 card-title">Nombre: {character.name}</h5>
                  <p className="card-text">Altura: {character.height}</p>
                  <p className="card-text">Género: {character.gender}</p>
                  <div className="d-flex">
                    <Link
                      to={`/character/${character.index}`}
                      className="btn btn-success me-3"
                    >
                      Detalles
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromFavorites(character)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <br />
      <Link to="/">
        <button className="btn btn-primary">
          Volver a la página principal
        </button>
      </Link>
    </div>
  );
};
