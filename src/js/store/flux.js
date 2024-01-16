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
      ],
    },
    actions: {
      fetchCharacters: async (setCharacters) => {
        try {
          const response = await fetch("https://swapi.dev/api/people/");

          if (!response.ok) {
            throw new Error(
              `Error en la solicitud: ${response.status} ${response.statusText}`
            );
          }

          const data = await response.json();
          const charactersData = data.results;
          setCharacters(charactersData);
        } catch (error) {
          console.error("Error al obtener personajes:", error);
        }
      },

      addToFavorites: (characterId) => {
        const { stores, setStores } = getStore();

        const exists = setStores.personajesFavoritos.find(
          (char) => char.char === `https://swapi.dev/api/people/${characterId}/`
        );

        if (!exists) {
          const updatedFavoritos = [
            ...store.personajesFavoritos,
            { char: `https://swapi.dev/api/people/${characterId}/` },
          ];
          setStores({ personajesFavoritos: updatedFavoritos });
          console.log(`Personaje ID ${characterId} agregado a favoritos.`);
        } else {
          console.log(`Personaje ID ${characterId} ya está en favoritos.`);
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
