import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    // Puedes realizar operaciones adicionales en la carga del componente si es necesario
  }, []);

  const getCharacterImage = (index) => {
    // Ajustar el cálculo del ID para obtener la imagen correcta
    let characterId = index + 1;

    if (characterId > 16) {
      characterId = characterId + 1;
    }

    return `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  };

  return (
    <div className="text-center container">
      <div className="row justify-content-center">
        <h1 className="mb-5">Personajes Favoritos</h1>
        {store.personajesFavoritos.map((character, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-3">
              <img
                src={getCharacterImage(character.index)}
                className="card-img-top"
                alt={`Character ${character.index}`}
              />
              <div className="card-body mb-3">
                <h5 className="my-3 card-title">Nombre: {character.name}</h5>
                <p className="card-text">ID: {character.index}</p>
                <p className="card-text">Altura: {character.height}</p>
                <p className="card-text">Género: {character.gender}</p>
                <div>
                  <Link
                    to={`/character/${character.index}`}
                    className="btn btn-success mt-5 me-3"
                  >
                    Detalles
                  </Link>
                  <button
                    className="btn btn-danger mt-5"
                    onClick={() => actions.removeFromFavorites(character.char)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Link to="/">
        <button className="btn btn-primary">
          Volver a la página principal
        </button>
      </Link>
    </div>
  );
};
