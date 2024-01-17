import React from "react";

import "../../styles/home.css";
import SwapiCard from "../component/card";


export const Home = () => (
	<div className="text-center mt-5">
		<div className="container">
		<h1 className="mb-5">Starwars Blog</h1>
		<div>
			<SwapiCard />
		</div>
		 
		</div>
	</div>
);
