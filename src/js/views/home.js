import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";



export const Home = () => (
	<div className="text-center mt-5">
		<div className="container">
		<h1 className="mb-5">Starwars Blog</h1>
		<div>
		<div className="ml-auto">
        <Link to="/characters">
          <button className="btn btn-primary">Personajes &#9733;</button>
        </Link>
		<Link to="/planets">
          <button className="btn btn-primary">Planetas &#9733;</button>
        </Link>
      </div>
		</div>
		 
		</div>
	</div>
);
