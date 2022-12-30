import { render, screen } from "@testing-library/react";
import { useTodo } from "../../src/09-useReducer/hooks/useTodo";
import { TodoAppPage } from "../../src/09-useReducer/TodoAppPage";


jest.mock('../../src/09-useReducer/hooks/useTodo');


describe(`Pruebas en el componente <TodoAppPage />`, () => {
    useTodo.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'Hola Mundo',
                done: false
            },
            {
                id: 2,
                description: 'Hello World',
                done: false
            }
        ],
        todosNotDone: 2,
        onDeleteTodo: jest.fn(),
        onNewTodo: jest.fn(),
        onToggleTodo: jest.fn()

    });


    beforeEach(() => jest.clearAllMocks() );


    it(`Debe de mostrar el componente correctamente`, () => {
        render(<TodoAppPage />);
        
        expect( screen.getByText('Hello World') ).toBeTruthy();
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
    });
});