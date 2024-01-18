import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      initialUrl: [
        {
          films: "https://swapi.dev/api/films/",
          people: "https://swapi.dev/api/people/",
          planets: "https://swapi.dev/api/planets/",
          species: "https://swapi.dev/api/species/",
          starships: "https://swapi.dev/api/starships/",
          vehicles: "https://swapi.dev/api/vehicles/",
        },
      ],
      personajesFavoritos: [
        {
          char: "https://swapi.dev/api/people/1/",
        },
        {
          char: "https://swapi.dev/api/people/2/",
        },
        {
          char: "https://swapi.dev/api/people/3/",
        },
      ],
    },
    actions: {
      fetchCharacters: async (characters, page) => {
        try {
          const response = await fetch(
            `https://swapi.dev/api/people/?page=${page}`
          );

          if (!response.ok) {
            throw new Error(
              `Error en la solicitud: ${response.status} ${response.statusText}`
            );
          }

          const data = await response.json();
          const charactersData = data.results;
          characters(charactersData);
          setPage(charactersData);
        } catch (error) {
          console.error("Error al obtener personajes:", error);
        }
      },

      addToFavorites: (characterId) => {
        const store = getStore(); 
        const newFav = `https://swapi.dev/api/people/${characterId}/`;

        
        const exists = store.personajesFavoritos.find(
          (fav) => fav.char === newFav
        );

        if (!exists) {
        
          setStore({
            personajesFavoritos: [
              ...store.personajesFavoritos,
              { char: newFav },
            ],
          });
          console.log(`Personaje con ID ${newFav} agregado a favoritos.`);
        } else {
          console.log(`Personaje con ID ${newFav} ya está en favoritos.`);
        }
      },

      removeFromFavorites: (characterId) => {},

      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
