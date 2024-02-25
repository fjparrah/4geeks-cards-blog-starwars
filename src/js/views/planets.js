import React from "react";
import "../../styles/home.css";
import SwapiCardPlanets from "../component/cardplanet";

export const Planets = () => (
  <div className="text-center mt-5">
    <div className="container">
      <h1 className="mb-5">Planets Starwars Blog</h1>
      <div>
        <SwapiCardPlanets />
      </div>
      <a href="/" className="btn btn-success mt-5">
        Volver
      </a>
    </div>
  </div>
);
