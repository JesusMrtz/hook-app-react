import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';


export function TodoFormComponent({ onNewTodo }) {
    const { description, onInputChange, onResetForm  } = useForm({
        description: ''
    });

    function onSubmit(e) {
        e.preventDefault();
        const value = description.trim();

        if ( !value.length ) return;

        onNewTodo({
            id: new Date().getTime(),
            description: value,
            done: false
        });

        onResetForm();
    }


    return (
        <>
            <form onSubmit={ onSubmit }>
                <input type="text" className="form-control mb-2" name='description' placeholder="¿Qué hay que hacer?" value={ description } onChange={ onInputChange } />
                <button type="submit" className="btn btn-outline-primary">Agregar</button>
            </form>
        </>
    );
}


TodoFormComponent.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}