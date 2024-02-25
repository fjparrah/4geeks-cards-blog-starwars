import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const SwapiCardPlanets = () => {
  const { actions } = useContext(Context);

  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await actions.fetchPlanets(setPlanets, setTotalPages, page);
    };

    fetchData();
  }, [page]);

  

  const handleAddToFavorites = (planetId) => {
    console.log(planetId);
    actions.addToFavoritesPlanet(planetId);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {planets.map((planet) => (
            <div className="col-md-4 mb-3" key={planet.id}>
              <div className="card">
                {planet.image && (
                  <img src={planet.image} className="card-img-top" alt={planet.name} />
                )}
                <div className="card-body mb-3">
                  <h5 className="my-3 card-title">Nombre: {planet.name}</h5>
                  <p className="card-text">Población: {planet.population}</p>
                  <p className="card-text">ID: {planet.id}</p>

                  <div>
                    <Link
                      to={`/planet/${planet.id}`}
                      className="btn btn-success mt-5 me-3"
                    >
                      Detalles
                    </Link>
                    <button
                      className="btn btn-success mt-5 ms-3"
                      onClick={() => handleAddToFavorites(planet)}
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
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Página Anterior
        </button>
        <span className="mx-2">Página {page}</span>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Página Siguiente
        </button>
      </div>
    </>
  );
};

export default SwapiCardPlanets;

