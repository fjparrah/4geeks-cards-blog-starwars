import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [favoritos, setFavoritos] = useState(store.personajesFavoritos);
  const [planetasFavoritos, setPlanetasFavoritos] = useState(store.planetasFavoritos);

  useEffect(() => {
    // Actualiza la lista de favoritos cuando hay cambios en store.personajesFavoritos
    setFavoritos(store.personajesFavoritos);
    setPlanetasFavoritos(store.planetasFavoritos);
  }, [store.personajesFavoritos]);
         
  const handleRemoveFromFavorites = (index) => {
    // Cambiado de character.index a index
    actions.removeFromFavorites(index);
  };

  return (
    <>

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

    <div className="text-center container">
    <h1 className="mb-5">PlanetasFavoritos</h1>
    {planetasFavoritos.length === 0 ? (
      <p>No hay planetas favoritos.</p>
    ) : (
      <ul className="list-group">
        {planetasFavoritos.map((planeta, index2) => ( // Cambiado de store.personajesFavoritos a favoritos
          <li key={index2} className="list-group-item">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h5 className="my-3 card-title">Nombre: {planeta.name}</h5>
                {/* <p className="card-text">Altura: {character.height}</p>
                <p className="card-text">Género: {character.gender}</p> */}
                <div className="d-flex">
                  <Link
                    to={`/character/${planeta.index2}`}
                    className="btn btn-success me-3"
                  >
                    Detalles
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromFavorites(planeta)}
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

  </>
  );
};
