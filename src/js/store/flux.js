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
        // Lista vacía inicialmente
      ],
    },
    actions: {
      fetchCharacters: async (setCharacters, setTotalPages, page) => {
        try {
          const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
          if (!response.ok) {
            throw new Error('Error fetching data from API');
          }

          const data = await response.json();
          if (!data || !data.results) {
            throw new Error('Invalid data received from API');
          }

          const startIndex = (page - 1) * data.results.length;
          const characterData = data.results.map((character, index) => {
            let characterId = startIndex + index + 1;
            if (characterId > 16) {
              characterId = characterId + 1;
            }

            return {
              name: character.name,
              height: character.height,
              gender: character.gender,
              index: startIndex + index,
              image: `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`,
            };
          });

          if (setCharacters && setTotalPages) {
            setCharacters(characterData);
            setTotalPages(Math.ceil(data.count / data.results.length));
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          // Mostrar mensaje de error al usuario si es necesario...
        }
      },

      addToFavorites: (characterId) => {
        try {
          const store = getStore();
      
          // Check if the character is already in favorites
          const exists = store.personajesFavoritos.find((fav) => fav.index === characterId);
      
          if (!exists) {
            // Find the character in the list of fetched characters
            const characterToAdd = store.personajes.find((character) => character.index === characterId);
      
            if (characterToAdd) {
              // If the character is found, add it to favorites
              const updatedFavorites = [...store.personajesFavoritos, characterToAdd];
      
              if (setStore) {
                setStore((prevState) => ({
                  ...prevState,
                  personajesFavoritos: updatedFavorites,
                }));
              }
      
              console.log(`Personaje con ID ${characterId} agregado a favoritos.`);
            } else {
              console.log(`Personaje con ID ${characterId} no encontrado en el listado completo.`);
            }
          } else {
            console.log(`Personaje con ID ${characterId} ya está en favoritos.`);
          }
        } catch (error) {
          console.error('Error al agregar a favoritos:', error);
          // Handle error as needed...
        }
      },
      
      
      removeFromFavorites: (characterId) => {
        try {
          const store = getStore();
          
          const updatedFavorites = store.personajesFavoritos.filter((fav) => fav.char !== characterId);
          
          if (setStore) {
            setStore((prevState) => ({
              ...prevState,
              personajesFavoritos: updatedFavorites,
            }));
          }
          
          console.log(`Personaje con ID ${characterId} eliminado de favoritos.`);
        } catch (error) {
          console.error('Error al eliminar de favoritos:', error);
          // Mostrar mensaje de error al usuario si es necesario...
        }
      },
      

      loadSomeData: () => {
        /**
          fetch().then().then(data => setStore({ "foo": data.bar }))
        */
      },

      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        if (setStore) {
          setStore({ demo: demo });
        }
      },
    },
  };
};

export default getState;
