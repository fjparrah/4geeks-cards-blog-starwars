import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const SwapiCard = () => {
  const { store, actions } = useContext(Context);

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
 const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await actions.fetchCharacters(setCharacters, page);
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

  const handleAddToFavorites = (charfavorite) => {
    actions.addToFavorites(charfavorite);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
 };

 return (
  <>
    <div className="container mt-5">
      <div className="row">
        {characters.map((character, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body mb-3">
               <h5 className="my-3 card-title">Nombre: {character.name}</h5>
               <p className="card-text">ID: {index + 1 }</p>
               <p className="card-text">Altura: {character.height}</p>
               <p className="card-text">Género: {character.gender}</p>

               <div>
                  <Link
                    to={`/character/${parseInt(index) + 1}`}
                    className="btn btn-success mt-5 me-3"
                  >
                    Detalles
                  </Link>
                  <button
                    className="btn btn-success mt-5 ms-3"
                    onClick={() => handleAddToFavorites(index)}
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

export default SwapiCard;
