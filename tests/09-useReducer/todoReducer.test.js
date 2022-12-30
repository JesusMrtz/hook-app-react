import { todoReducer } from '../../src/09-useReducer/todoReducer';


describe('Pruebas en el archivo todoReducer.js', () => {
    const initialState = [
        {
            id: 1,
            decription: 'Demo Todo',
            done: false
        }
    ];


    it('Debe de regresar el estado inicial', () => {
        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );
    });


    it('Agregamos un Todo', () => {
        const newState = todoReducer( initialState, {
            payload: {
                id: 2,
                describe: 'Demo Todo 2',
                done: false
            },

            type: 'add_todo'
        });

        expect( newState.length ).toBe(2);
    });


    it('Eliminos el todoInicial', () => {
        const newState = todoReducer( initialState, {
            payload: 1,
            type: 'remove_todo'
        });

        expect( newState ).not.toContain( initialState );
    });


    it('Vamos a hacer toggle al todo Inicial', () => {
        const newState = todoReducer( initialState, {
            payload: 1,
            type: 'toggle_todo'
        });

        expect( newState[0].done ).toBeTruthy();
    });
});