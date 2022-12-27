import { useTodo } from "./hooks/useTodo";
import { TodoFormComponent, TodoListComponent } from "./components";


export function TodoAppPage() {
    const { todos, todosNotDone, onDeleteTodo, onNewTodo, onToggleTodo } = useTodo();

    
    return(
        <>
            <h2>
                TodoApp <strong>({ todos.length })</strong> <small>Pendientes: ({ todosNotDone })</small> 
            </h2>
            <hr />
            <div className="row">
                <div className="col-12 col-sm-7">
                    <TodoListComponent todos={ todos } onDeleteTodo = { onDeleteTodo } onToggleTodo={ onToggleTodo }  />
                </div>
                <div className="col-12 col-sm-5">
                    <h3>Agregar TODO</h3>
                    <hr />
                    <TodoFormComponent onNewTodo={ onNewTodo } />
                </div>
            </div>
        </>
    );
}