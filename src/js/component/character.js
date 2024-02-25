import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const SwapiCardCharacter = () => {
  
  const index = useParams();
  const [character, setCharacter] = useState(null);
  const char = parseInt(index.id);
  const { actions } = useContext(Context);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${char}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchCharacter();
  }, []);
  
  const handleAddToFavorites = (charId) => {
    console.log(charId)
    actions.addToFavorites(charId);
  };


  const getCharacterImage = (x) => {
    let characterId = x;

    if (x > 16) {
      characterId = x ;
    }

    return `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          {character && (
            <div className="card mb-3">
              <img
                src={getCharacterImage(char)}
                className="card-img-top"
                alt={`Character ${character.id}`}
              />
              <div className="card-body mb-3">
                <h5 className="my-3 card-title">Nombre: {character.name}</h5>
                <p className="card-text">Altura: {character.height}</p>
                <p className="card-text">Género: {character.gender}</p>
                <p className="card-text">ID: {index.id}</p>
                <div>
                <button
                    className="btn btn-success mt-5 ms-3"
                    onClick={() => handleAddToFavorites({character})}
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
