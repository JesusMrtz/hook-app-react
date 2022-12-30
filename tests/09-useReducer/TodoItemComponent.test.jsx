import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItemComponent } from "../../src/09-useReducer/components";

describe(`Pruebas en el componente <TodoItemComponent />`, () => {
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }; 

    const onDeleteTodo = jest.fn();
    const onNewTodo = jest.fn();
    const onToggleTodo = jest.fn();

    beforeEach(() => jest.clearAllMocks() );

     
    it(`Debe de mostrar el todo pendiente de completar`, () => {
        render(<TodoItemComponent todo={ todo } onDeleteTodo={ onDeleteTodo } onNewTodo={ onNewTodo } onToggleTodo={ onToggleTodo } />);
        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByTestId('span');

        expect( liElement.className ).toContain('list-group-item list-group-item-action d-flex justify-content-between');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');
    });


    it(`Debe de mostar el todo completado`, () => {
        todo.done = true;
        render(<TodoItemComponent todo={ todo } onDeleteTodo={ onDeleteTodo } onNewTodo={ onNewTodo } onToggleTodo={ onToggleTodo } />);
        const spanElement = screen.getByTestId('span');

        expect( spanElement.className ).toContain('text-decoration-line-through');
    });


    it('El span debe llamar al toggleTodo Cuando se hace click', async () => {
        render(<TodoItemComponent todo={ todo } onDeleteTodo={ onDeleteTodo } onNewTodo={ onNewTodo } onToggleTodo={ onToggleTodo } />);
        
        const spanElement = screen.getByTestId('span');
        await fireEvent.click( spanElement );

        expect( onToggleTodo ).toHaveBeenCalledWith(todo.id);
        expect(todo.done).toBeTruthy();
    });

    it('El boton de eliminar debe de llamar al método onDeleteTodo()', async() => {
        render(<TodoItemComponent todo={ todo } onDeleteTodo={ onDeleteTodo } onNewTodo={ onNewTodo } onToggleTodo={ onToggleTodo } />);
        
        const buttonElement = screen.getByRole('button');
        await fireEvent.click( buttonElement );

        expect( onDeleteTodo ).toHaveBeenCalledWith(todo.id);
    });
});