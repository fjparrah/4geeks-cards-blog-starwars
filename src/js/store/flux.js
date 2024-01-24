import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajesFavoritos: [], // Initialize personajesFavoritos in the store
    },

    actions: {
      fetchCharacters: async (setCharacters, setTotalPages, page) => {
        try {
          const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
          if (!response.ok) {
            throw new Error('Error');
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
        }
      },

      addToFavorites: (char1) => {
        try {
          if (setStore) {
            setStore((prevState) => {
              const updatedFavorites = [...prevState.personajesFavoritos, char1];
              return { ...prevState, personajesFavoritos: updatedFavorites };
            });
            console.log(`Personaje con ID ${char1.index} agregado a favoritos.`);
          }
        } catch (error) {
          console.error('Error al agregar a favoritos:', error);
        }
      },
      
      removeFromFavorites: (char2) => {
        try {
          if (setStore) {
            setStore((prevState) => {
              const updatedFavorites = prevState.personajesFavoritos.filter((fav) => fav.index !== char2.index);
              return { ...prevState, personajesFavoritos: updatedFavorites };
            });
            console.log(`Personaje con ID ${char2.index} eliminado de favoritos.`);
          }
        } catch (error) {
          console.error('Error al eliminar de favoritos:', error);
        }
      },
      
      

      loadSomeData: () => {
        /**
         * Example: fetch().then().then(data => setStore({ "foo": data.bar }))
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
