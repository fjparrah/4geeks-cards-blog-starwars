import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SwapiCardPlanet = () => {
  const index = useParams();
  const [planets, setPlanets] = useState(null);
  const planet = parseInt(index.id);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${planet}`);
        const data = await response.json();
        setPlanets(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    fetchPlanet();
  }, []);

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
          {planet && (
            <div className="card mb-3">
              <img
                src={getCharacterImage(char)}
                className="card-img-top"
                alt={`Character ${planet.id}`}
              />
              <div className="card-body mb-3">
                <h5 className="my-3 card-title">Nombre: {planet.name}</h5>
                {/* <p className="card-text">Altura: {planet.height}</p>
                <p className="card-text">Género: {planet.gender}</p> */}
                <p className="card-text">ID: {planet.id}</p>
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

export default SwapiCardPlanet;
