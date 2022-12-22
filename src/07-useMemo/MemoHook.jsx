import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";


function heavyStuff(iteractionNumbers = 100) {
    for( let i = 0; i<= iteractionNumbers; i++ ) {
        console.log('Ahi vamos!!');
    }

    return `${ iteractionNumbers }`;
}

export function MemoHook() {
    const { counter, incrementCounter } = useCounter(4000);
    const [ show, setShow ] = useState(true);

    /**
     * Memoriza un valor 
     * vamor a memorizar el método "heavyStuff" y solamente se volverá a reprocesar si el valor del "counter" cambia y no los demás valores del componente
     */
    const memorizedValue = useMemo(() => heavyStuff(counter) , [ counter ])


    return(
        <>
            <h2>useMemo Hook: <small>{ counter }</small></h2>
            <hr />
            <h4>{ memorizedValue  }</h4>
            <button className="btn btn-primary" onClick={() => incrementCounter()}>+1</button>
            <button className="btn btn-outline-primary" onClick={ () => setShow( !show )}>
                Show / Hide { JSON.stringify(show) }
            </button>
        </>
    );
}