import { useState } from "react";



const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personajesFavoritos: [],
      planetasFavoritos: []
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

      fetchPlanets: async (setPlanets, setTotalPages, page) => {
        try {
          const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
          if (!response.ok) {
            throw new Error('Error');
          }
      
          const data = await response.json();
          if (!data || !data.results) {
            throw new Error('Invalid data received from API');
          }
          console.log(data)
          const startIndex = (page - 1) * data.results.length;
          const planetsData = data.results.map((planet, index) => {
            let planetID = startIndex + index + 1;
            console.log(data.id)
      
            return { 
              
              name: planet.name, 
              population: planet.population,
              
              id: startIndex + index + 1, 
              image: `https://starwars-visualguide.com/assets/img/planets/${planetID + 1}.jpg`,
            };
          });
      
          if (setPlanets && setTotalPages) {
            setPlanets(planetsData);
            setTotalPages(Math.ceil(data.count / data.results.length));
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      

     
      addToFavorites: (data) => {
        const { personajesFavoritos } = getStore();
        console.log(data);
       
        if (data && data.character) {
          
          const characterExists = personajesFavoritos.some(
            (favCharacter) => favCharacter.index === data.character.index
          );
      
          if (!characterExists) {
            setStore({ personajesFavoritos: [...personajesFavoritos, data.character] });
            window.alert("El personaje se agrego a favoritos");
          } else {
            window.alert("El personaje ya está en favoritos");
          }
        } else {
          console.error("Datos inválidos para agregar a favoritos");
        }
      },
      
      addToFavoritesPlanet: (data) => {
        const { planetasFavoritos } = getStore();
        console.log(data.planet);
      
       

        if (data ) {
          const planetaExiste = planetasFavoritos.some(
            (favPlanet) => favPlanet.id === data.id
          );
      
          if (!planetaExiste) {
            setStore({planetasFavoritos: [...planetasFavoritos, data]});
            window.alert("El planeta se agrego a favoritos");
          } else {
            window.alert("El planeta ya se encuentra en favoritos");
          }
        } else {
          console.error("Datos inválidos para agregar a favoritos");
        }
      },
      

      // addToFavoritesPlanet: (data) => {
      //   const { planetasFavoritos } = getStore();
      
      //   if (data) {
        
      //     const indexExists = planetasFavoritos.some(
      //       (favPlanet) => favPlanet.id === data.id
      //     );
      
      //     if (!indexExists) {
      //       setStore({ planetasFavoritos: [...planetasFavoritos, data] });
      //       console.log(planetasFavoritos);
      //     } else {
      //       console.log("El planeta ya está en favoritos");
      //     }
      //   } else {
      //     console.error("Datos inválidos para agregar a favoritos");
      //   }
      // },
      
      removeFromFavorites: (remove) => {
        
        const {personajesFavoritos}  = getStore();
				
				const updatedFavorites = personajesFavoritos.filter((personaje) => personaje.index !== remove.index );
			  
				setStore({ personajesFavoritos : updatedFavorites });
      },
      
      removePlanteFromFavorites: (remove) => {
        
        const {planetasFavoritos}  = getStore();
				
				const updatedFavorites = planetasFavoritos.filter((planeta) => planeta.id !== remove.id );
			  
				setStore({ planetasFavoritos : updatedFavorites });
      },

      // loadSomeData: () => {
      //   /**
      //    * Example: fetch().then().then(data => setStore({ "foo": data.bar }))
      //    */
      // },

      // changeColor: (index, color) => {
      //   const store = getStore();
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //   if (setStore) {
      //     setStore({ demo: demo });
      //   }
      // },
    },
  };
};

export default getState;
