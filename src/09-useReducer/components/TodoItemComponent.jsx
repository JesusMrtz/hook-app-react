import PropTypes from 'prop-types';


export function TodoItemComponent({ todo, onDeleteTodo, onToggleTodo }) {

    return (
    <li className="list-group-item list-group-item-action d-flex justify-content-between">
        <span data-testid="span" className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''} pointer`} onClick={() => onToggleTodo(todo.id)}>
            { todo.description }
        </span>
        <button className="btn btn-danger" onClick={ () => onDeleteTodo(todo.id) }>Eliminar</button>
    </li>  
    );
}


TodoItemComponent.propTypes = {
    todo: PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
}