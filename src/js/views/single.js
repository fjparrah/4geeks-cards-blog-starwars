import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
            //   <li
            //   key={index}
            //   className="list-group-item d-flex justify-content-between align-items-center"
            // >
            //   {}
            //   <div>
            //     <span>Personaje: {item.char}</span>
            //   </div>
            //   <button
            //     className="btn btn-danger"
            //     onClick={() => actions.removeFromFavorites(index)}
            //   >
            //     Eliminar
            //   </button>
            // </li>


		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
