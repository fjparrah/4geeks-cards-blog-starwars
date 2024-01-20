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
          name: "Luke Skywalker",
          height: "172",
          gender: "male",
          index: 1,
          image: "https://starwars-visualguide.com/assets/img/characters/0.jpg",
        },
        {
          char: "https://swapi.dev/api/people/2/",
          name: "C-3PO",
          height: "167",
          gender: "n/a",
          index: 2,
          image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
        },
        {
          char: "https://swapi.dev/api/people/3/",
          name: "R2-D2",
          height: "96",
          gender: "n/a",
          index: 3,
          image: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
        },
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
              index: startIndex + index + 1,
              image: `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`, 
            };
          });
      
          setCharacters(characterData);
          setTotalPages(Math.ceil(data.count / data.results.length)); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },

      addToFavorites: (character) => {
        try {
          const store = getStore();
          const newFav = {
            char: character.char,
            name: character.name,
            height: character.height,
            gender: character.gender,
            index: character.index,
            image: character.image,
          };

          // Check if the character is already in favorites
          const exists = store.personajesFavoritos.find((fav) => fav.char === newFav.char);

          if (!exists) {
            // If the character is not in favorites, add it
            setStore({
              personajesFavoritos: [...store.personajesFavoritos, newFav],
            });
            console.log(`Personaje con ID ${newFav.char} agregado a favoritos.`);
          } else {
            console.log(`Personaje con ID ${newFav.char} ya está en favoritos.`);
          }
        } catch (error) {
          console.error('Error al agregar a favoritos:', error);
        }
      },

      removeFromFavorites: (characterId) => {
        try {
          const store = getStore();
          
          // Filter out the character with the specified ID
          const updatedFavorites = store.personajesFavoritos.filter((fav) => fav.char !== characterId);

          // Update the store with the new favorites array
          setStore({
            personajesFavoritos: updatedFavorites,
          });

          console.log(`Personaje con ID ${characterId} eliminado de favoritos.`);
        } catch (error) {
          console.error('Error al eliminar de favoritos:', error);
        }
      },

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


