import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const characterImage = "https://starwars-visualguide.com/assets/img/characters/2.jpg";
const planetImage = "https://starwars-visualguide.com/assets/img/planets/2.jpg";

export const Home = () => (
  <div className="text-center mt-5">
    <div className="container">
      <h1 className="mb-5">Starwars Blog</h1>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="card h-100">
            <img
              src={characterImage}
              className="card-img-top"
              alt="Characters"
              style={{ width: "100%", height: "350px" }} 
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <Link to="/characters" className="btn btn-primary align-self-center">
                Personajes
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100">
            <img
              src={planetImage}
              className="card-img-top"
              alt="Planets"
              style={{ width: "100%", height: "350px" }} 
            />
            <div className="card-body d-flex flex-column justify-content-center">
              <Link to="/planets" className="btn btn-primary align-self-center">
                Planetas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

