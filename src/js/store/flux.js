import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajesFavoritos: []
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

     
       addToFavorites: (data) => {
         const {personajesFavoritos} = getStore()
			 	
			 	if( data ){
			 	setStore({personajesFavoritos: [...personajesFavoritos, data.character]})
			 	} else {
			 		console.log("already in favorites")
			 	}
       },
      
      removeFromFavorites: (remove) => {
        
        const {personajesFavoritos}  = getStore();
				
				const updatedFavorites = personajesFavoritos.filter((personaje) => personaje.index !== remove.index );
			  
				setStore({ personajesFavoritos : updatedFavorites });
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
