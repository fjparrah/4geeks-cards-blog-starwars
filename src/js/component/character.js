import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions } from "../store/appContext";

const SwapiCardCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const { id } = useParams();

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

  const selectedCharacter = characters.find(
    (character) => character.id === parseInt(id)
  );

 return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mb-3">
            <img
              src={getCharacterImage(selectedCharacter.id)}
              className="card-img-top"
              alt={`Character ${selectedCharacter.id}`}
            />
            <div className="card-body mb-3">
              <h5 className="my-3 card-title">
                Nombre: {selectedCharacter.name}
              </h5>
              <p className="card-text">Altura: {selectedCharacter.height}</p>
              <p className="card-text">Género: {selectedCharacter.gender}</p>
            </div>
            <div>
              <a href="/character" className="btn btn-success mt-5">
                Favorito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapiCardCharacter;
