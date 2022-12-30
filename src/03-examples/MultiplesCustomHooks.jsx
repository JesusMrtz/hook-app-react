import { useCounter, useFetch } from "../hooks/";
import { LoadingComponent } from "./LoadingComponent";
import { ShowPokemonComponent } from "./ShowPokemonComponent";


export function MultiplesCustomHooks() {
    const { counter, incrementCounter, decrementCounter } = useCounter(1);
    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
    return (
        <>
            <h2>Pokemon</h2>
            <hr />
            {
                isLoading ? <LoadingComponent /> : <ShowPokemonComponent data={ data } />  
            }

            <div className="text-center">
                <button className="btn btn-primary" disabled={ counter === 1 || isLoading } onClick={ () => decrementCounter() }>
                    Pokemon anterior
                </button>
                <button className="btn btn-primary" disabled={ isLoading } onClick={ () => incrementCounter() }>
                    Siguiente pokemon
                </button>    
            </div>

        </>
    );
}