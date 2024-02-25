import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const [favoritos, setFavoritos] = useState(store.personajesFavoritos);
  const [planetaFavoritos, setPlanetaFavoritos] = useState(store.planetasFavoritos);

  useEffect(() => {
    
    setFavoritos(store.personajesFavoritos);
    setPlanetaFavoritos(store.planetasFavoritos);
  }, [store.personajesFavoritos, store.planetasFavoritos]);
  
         
  const handleRemoveFromFavorites = (index) => {
    
    actions.removeFromFavorites(index);
  };

  const handleRemoveFromFavoritesPlanet = (index) => {

    actions.removePlanteFromFavorites(index);
   
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
                      to={`/character/${character.index + 1}`}
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
      
    </div>

    <div className="text-center container">
    <h1 className="mb-5">PlanetasFavoritos</h1>
    {planetaFavoritos.length === 0 ? (
      <p>No hay planetas favoritos.</p>
    ) : (
      <ul className="list-group">
        {planetaFavoritos.map((planeta, index2) => ( // Cambiado de store.personajesFavoritos a favoritos
          <li key={index2} className="list-group-item">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h5 className="my-3 card-title">Nombre: {planeta.name}</h5>
                {/* <p className="card-text">Altura: {character.height}</p>
                <p className="card-text">Género: {character.gender}</p> */}
                <div className="d-flex">
                  <Link
                    to={`/planet/${planeta.id}`}
                    className="btn btn-success me-3"
                  >
                    Detalles
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromFavoritesPlanet(planeta)}
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
