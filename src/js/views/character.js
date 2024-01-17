import React from "react";
import "../../styles/home.css";
import SwapiCardCharacter from "../component/character";

export const Character = () => (
  <div className="text-center mt-5">
    <div className="container">
      <h1 className="mb-5">Characters Starwars Blog</h1>
      <div>
        <SwapiCardCharacter />
      </div>
      <a href="/" className="btn btn-success mt-5">
        Volver
      </a>
    </div>
  </div>
);
