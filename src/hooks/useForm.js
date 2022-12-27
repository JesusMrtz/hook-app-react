import { useState } from "react";


export function useForm( initialForm ) {
    /** Manejaremos el estado del formulario */
    const [ formState, setFormState ] = useState(initialForm);

    function onInputChange(e) {
        const {name, value} = e.target;
        setFormState((rest) => ({...rest, [ name ]: value}));
    }

    function onResetForm() {
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}