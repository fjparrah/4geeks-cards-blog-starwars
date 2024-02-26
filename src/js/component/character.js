import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const SwapiCardCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const charId = parseInt(id);
  const { actions } = useContext(Context);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${charId}`);
        const data = await response.json();
        const charData = {
          ...data, index: charId - 1 ,
        };
        setCharacter(charData);
        
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, [charId]);

  const handleAddToFavorites = () => {
    if (character) {
      actions.addToFavorites({character});
    }
  };

  const getCharacterImage = () => {
    if (charId > 16) {
      return `https://starwars-visualguide.com/assets/img/characters/${charId}.jpg`;
    }
    return `https://starwars-visualguide.com/assets/img/characters/${charId}.jpg`;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          {character && (
            <div className="card mb-3">
              <img
                src={getCharacterImage()}
                className="card-img-top"
                alt={`Character ${character.id}`}
              />
              <div className="card-body mb-3">
                <h5 className="my-3 card-title">Nombre: {character.name}</h5>
                <p className="card-text">Altura: {character.height}</p>
                <p className="card-text">Género: {character.gender}</p>
                <p className="card-text">ID: {charId}</p>
                <div>
                  <button
                    className="btn btn-success mt-5 ms-3"
                    onClick={handleAddToFavorites}
                  >
                    Favorito
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwapiCardCharacter;


