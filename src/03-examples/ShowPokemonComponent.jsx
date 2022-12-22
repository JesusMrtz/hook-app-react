import { useLayoutEffect, useRef, useState } from "react"

export function ShowPokemonComponent({ data } ) {
    const fRef = useRef();
    const [ boxSize, setBoxSize ] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { height, width } = fRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [ data ]);


    return(
        <>
        <figure className="text-center" style={{ display: 'flex' }}>
            <img src={ data.img } alt={ data.name } />
            <figcaption className="text-capitalize" ref={ fRef }>{ data.name }</figcaption>
        </figure> 
        <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}