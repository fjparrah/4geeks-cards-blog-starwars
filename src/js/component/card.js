import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const SwapiCard = () => {
  const { store, actions } = useContext(Context);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await actions.fetchCharacters(setCharacters);
    };

    fetchData();
  }, []);

  const getCharacterImage = (id) => {
    let characterId = id;

    if (id > 16) {
      characterId = id + 1;
    }

    return `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  };

  const handleAddToFavorites = (characterId) => {
    actions.addToFavorites(characterId);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {characters.map((character, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-3">
              <img
                src={getCharacterImage(index + 1)}
                className="card-img-top"
                alt={`Character ${index + 1}`}
              />
              <div className="card-body mb-3">
                <h5 className="my-3 card-title">Nombre: {character.name}</h5>
                <p className="card-text">Altura: {character.height}</p>
                <p className="card-text">Género: {character.gender}</p>

                <div>
                  <Link
                    to={`/character/${character.id}`}
                    className="btn btn-success mt-5 me-3"
                  >
                    Detalles
                  </Link>
                  <button
                    className="btn btn-success mt-5 ms-3"
                    onClick={() => handleAddToFavorites(character.id)}
                  >
                    Favorito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapiCard;

