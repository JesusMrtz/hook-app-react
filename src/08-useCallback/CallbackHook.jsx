import { useCallback, useState } from "react";
import { ShowIncrementComponent } from "./ShowIncrementComponent";


export function CallbackHook() {
    const [ counter, setCounter ] = useState( 10 );


    /**
     * Es una función memorizada
     * solo se dibujar cuando la función increment cambia
     */
    const increment = useCallback(
        (value ) => {
            // console.log('Llamando al setCounter!');
            setCounter( ( counter ) => counter + value );
        }, 
        [],
    );



    // function increment() {
    //     setCounter( counter + 1 );
    // }


    return(
        <>
            <h2>useCallback Hook: <small>{ counter }</small></h2>
            <hr />
            <ShowIncrementComponent increment={ increment }  />
        </>
    );
}