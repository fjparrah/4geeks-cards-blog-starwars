import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import SwapiCard from "../component/card";
import Buttons from "../component/buttons";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="container">
		<h1 className="mb-5">Starwars Blog</h1>
		<div>
			<SwapiCard />
		</div>
		 	<Buttons/>
		</div>
	</div>
);
