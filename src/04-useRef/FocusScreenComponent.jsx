import { useRef } from "react";


export function FocusScreenComponent() {
    const inputNameRef = useRef();
    console.log(inputNameRef);

    function onClick() {
        inputNameRef.current.select();
        console.log(inputNameRef);
    }

    return(
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input type="text" className="form-control mb-2" placeholder="Ingrese su nombre" ref={ inputNameRef } />
            <input type="text" className="form-control mb-4" placeholder="Ingrese su apellido" />
            <button className="btn btn-primary" onClick={ onClick }>Set Focus</button>
        </>
    );
}