import { useEffect, useState } from "react";


export function useFetch( url ) {
    const [ pokemon, setPokemon ] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    async function getPokemons() {
        try {
            setPokemon({ ...pokemon, isLoading: true });
            const response = await fetch(url);
            const data = await response.json();

            const newData = {
                name: data.name,
                img:  data.sprites.front_default
            }

            setPokemon( { data: newData, isLoading: false, hasError: null } );
        } catch (error) {
            setPokemon( { data: null, isLoading: false, hasError: error } );
        }
    }

    useEffect(() => {
        getPokemons();
    }, [ url ]);


    return {
        ...pokemon
    };
}