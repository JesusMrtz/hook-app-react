import { useEffect, useMemo, useReducer } from "react";
import { todoReducer } from "../todoReducer";


function init() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

function totalTodosNotDone(todos) {
    return todos.filter(todos => !todos.done).length;
}


export function useTodo(initialState = []) {
    const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init);
    const todosNotDone = useMemo(() => totalTodosNotDone(todos), [ todos ]);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [ todos ]);
    
    /** Métodos */
    function onNewTodo(todo) {
        const action =  {
            type: 'add_todo',
            payload: todo
        };

        dispatchTodos( action );
    }

    function onDeleteTodo(id) {
        const action = {
            type: 'remove_todo',
            payload: id
        };

        dispatchTodos(action);
    }

    function onToggleTodo(id) {
        const action = {
            type: 'toggle_todo',
            payload: id
        };

        dispatchTodos(action);
    }


    return {
        todos,
        todosNotDone,

        onDeleteTodo,
        onNewTodo,
        onToggleTodo,
    }

}