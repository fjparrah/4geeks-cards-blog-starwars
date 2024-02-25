import React from "react";
import "../../styles/home.css";
import SwapiCardCharacter from "../component/character";
import { Link } from "react-router-dom";

export const Character = () => (
  <div className="text-center mt-5">
    <div className="container">
      <h1 className="mb-5">Personaje Starwars Blog</h1>
      <div>
        <SwapiCardCharacter />
      </div>
      <Link
                      to={`/characters`}
                      className="btn btn-success me-3"
                    >
                      Volver a personajes
                    </Link>
    </div>
  </div>
);
