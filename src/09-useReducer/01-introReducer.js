const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del alma',
        done: false
    }
];


/** Creamos un reducer 
 * EL parametro 'action' le dice a todoReducer como va a cambiar el estado
*/
function todoReducer(state = initialState, action = {}) {
    if ( action.type === 'add_todo' ) {
        return [...state, action.payload];
    }
    return state;
}


let todos = todoReducer();
console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Recolectar la pieda del poder',
    done: false
}

const addTodoAction = {
    type: 'add_todo',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction );
console.log(todos);