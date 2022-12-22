import { useForm } from "./useForm";


export function FormWithCustomHookComponent() {
    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });
    // const { username, email, password } = formState;

    return(
        <>
            <h1>Formulario con CustomHook</h1>
            <hr />
            <input type="text" className="form-control mb-2" placeholder="Username" name="username" value={ username } onChange={ onInputChange } />
            <input type="email" className="form-control mb-2" placeholder="Correo electrónico" name="email" value={ email } onChange={ onInputChange } />
            <input type="password" className="form-control mb-2" placeholder="Contraseña" name="password" value={ password } onChange={ onInputChange } />
            <button type="button" className="btn btn-primary" onClick={ onResetForm }>Reset</button>
        </>
    );
}