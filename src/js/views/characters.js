import React from "react";
import "../../styles/home.css";
import SwapiCard from "../component/card";

export const Characters = () => (
  <div className="text-center mt-5">
    <div className="container">
      <h1 className="mb-5">Personajes Starwars Blog</h1>
      <div>
        <SwapiCard />
      </div>
      <a href="/" className="btn btn-success mt-5">
        Volver
      </a>
    </div>
  </div>
);
