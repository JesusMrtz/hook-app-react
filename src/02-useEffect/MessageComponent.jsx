import { useEffect } from "react";


function onMouseMove({ x, y }) {
    const coords = { x, y };
    console.log(coords);
}


export function MessageComponent() {
    /** Código que se ejecutará cuando un componente se monta y desmonta por primera vex */
    // useEffect(() => {
    //     console.log('MesssageComponent mounted!!');

    //     return () => {
    //         console.log('MessageComponent unmonted!!!');
    //     }
    // }, []);


    /***
     * Se ejecutará el código de la función onMouseMove cuando se monte por primera vez el componente y se removerá la acción cuando se desmonte
     * NOTA: Es importante pasarle la función como referencia si no, no funcionará y habrá fugas de memoria
     */
    useEffect(() => {
        window.addEventListener( 'mousemove', onMouseMove );

        return () => {
            window.removeEventListener( 'mousemove', onMouseMove );
        }
    }, []);


    return(
        <>
            <h2>Usuario ya existe</h2>
        </>
    );
}