import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { SmallComponent } from "./SmallComponent";


export function MemorizeComponent() {
    const { counter, incrementCounter } = useCounter();
    const [ show, setShow ] = useState(true);


    return(
        <>
            <h2>Memo Counter: <SmallComponent counter={ counter } /></h2>
            <hr />
            <button className="btn btn-primary" onClick={() => incrementCounter()}>+1</button>
            <button className="btn btn-outline-primary" onClick={ () => setShow( !show )}>
                Show / Hide { JSON.stringify(show) }
            </button>
        </>
    );
}