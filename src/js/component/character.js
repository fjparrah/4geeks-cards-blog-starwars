import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SwapiCardCharacter = () => {
  const index = useParams();
  const [character, setCharacter] = useState(null);
  const char = parseInt(index.id);

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

  const getCharacterImage = (x) => {
    let characterId = x;

    if (x > 16) {
      characterId = x + 1;
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
                  <a href="/character" className="btn btn-success mt-5">
                    Favorito
                  </a>
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
