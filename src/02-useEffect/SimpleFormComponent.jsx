import { useEffect, useState } from "react";
import { MessageComponent } from "./MessageComponent";


export function SimpleFormComponent() {
    /** Manejaremos el estado del formulario */
    const [ formState, setFormState ] = useState({
        username: 'jmartinez',
        email: 'jmartinez@correo.com'
    });

    const { username, email } = formState;

    function onInputChange(e) {
        const {name, value} = e.target;
        setFormState((rest) => ({...rest, [ name ]: value}));
    }
    /****************************************************** */

    /** Se disparará una única vez cuando el componente se montra por primera vez */
    useEffect(() => {
        // console.log('Llamando al useEffect!!!');
    }, []);

    /** Se disparará cuando la variable formState cambie  */
    useEffect(() => {
        // console.log('Llamando al useEffect cuando cambia el formState!!!');
    }, [ formState ]);

    /** Se dispará cuando la variable email cambie  */
    useEffect(() => {
        // console.log('email changed!!!');
    }, [ email ]);



    return(
        <>
            <h1>SimpleFormComponent</h1>
            <hr />
            <input type="text" className="form-control mb-2" placeholder="Username" name="username" value={ username } onChange={ onInputChange } />
            <input type="email" className="form-control" placeholder="Correo electrónico" name="email" value={ email } onChange={ onInputChange } />
            {
                ( username === 'jmartinez2' ) && <MessageComponent />
            }
        </>
    );
}