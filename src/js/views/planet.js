import React from "react";
import "../../styles/home.css";
import SwapiCardPlanet from "../component/planet";
import { Link } from "react-router-dom";

export const Planet = () => (
  <div className="text-center mt-5">
    <div className="container">
      <h1 className="mb-5">Planeta Starwars Blog</h1>
      <div>
        <SwapiCardPlanet />
      </div>
      <Link
                      to={`/planets`}
                      className="btn btn-success me-3"
                    >
                      Volver a planetas
                    </Link>
    </div>
  </div>
);
