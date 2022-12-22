import { memo } from "react";


export const  ShowIncrementComponent = memo (({ increment }) =>  {
    console.log('Me volví a generar :(');
    return(
        <>
            <button className="btn btn-primary" onClick={ () => increment(5) }>Incrementar</button>
        </>
    );
});