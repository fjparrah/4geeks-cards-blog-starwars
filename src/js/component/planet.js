import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

const SwapiCardPlanet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const planetId = parseInt(id);
  const { actions } = useContext(Context);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${planetId}`);
        const data = await response.json();
        
        
        const planetData = {
          ...data, id: planetId,
        };

        setPlanet(planetData);
      } catch (error) {
        console.error("Error fetching planet:", error);
      }
    };

    fetchPlanet();
  }, [planetId]);

  const getPlanetImage = (x) => {
    let planetId = x;
    return `https://starwars-visualguide.com/assets/img/planets/${planetId + 1}.jpg`;
  };

  const handleAddToFavorites = () => {
    actions.addToFavoritesPlanet(planet);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          {planet && (
            <div className="card mb-3">
              <img
                src={getPlanetImage(planetId)}
                className="card-img-top"
                alt={`Planet ${planetId}`}
              />
              <div className="card-body mb-3">
                <h5 className="my-3 card-title">Nombre: {planet.name}</h5>
                <p className="card-text">Poblacion: {planet.population}</p>
                <p className="card-text">ID: {planetId}</p>
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

export default SwapiCardPlanet;

