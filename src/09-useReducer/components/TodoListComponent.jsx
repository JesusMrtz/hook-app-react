import PropTypes from 'prop-types';
import { TodoItemComponent } from './';


export function TodoListComponent({ todos, onDeleteTodo, onToggleTodo }) {
    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItemComponent key={ todo.id } todo={ todo } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo }  />  
                ))
            }       
        </ul>
    );
}


TodoListComponent.propTypes = {
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
}