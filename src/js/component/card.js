import React, { useState, useEffect } from "react";

const SwapiCard = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");

        if (!response.ok) {
          throw new Error(
            `Error en la solicitud: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        const charactersData = data.results;
        setCharacters(charactersData);
      } catch (error) {
        console.error("Error al obtener personajes:", error);
      }
    };

    fetchCharacters();
  }, []);

  const getCharacterImage = (id) => {
    let characterId = id;

    if (id > 16) {
      characterId = id + 1;
    }

    return `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
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
              </div>
              <div>
                <a href="/character" className="btn btn-success mt-5">
                  Detalles
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapiCard;
