import { fireEvent, render, screen } from "@testing-library/react";
import { MultiplesCustomHooks } from "../../src/03-examples/MultiplesCustomHooks";
import { useCounter, useFetch } from "../../src/hooks";


/** Si creamos el mock desde jest.mock('../../src/hooks') estamos obligados a crear mocks de todos los customHooks que el componente utiliza
 * En este ejemplo podemos utilizar únicamente el hoock del useFetch con el siguiente código:
 * jest.mock('../../src/hooks/useFetch');
 */
jest.mock('../../src/hooks');


describe(`Pruebas en el componente <MultiplesCustomHook />`, () => {
    const incrementCounter = jest.fn();
    const decrementCounter = jest.fn();
    const initialReturnFetch = {
        data: null,
        isLoading: true,
        hasError: null
    };
    /**
     * Creamos un mock de las respuestas de los useCounter
    */
    useCounter.mockReturnValue({ counter: 1, incrementCounter, decrementCounter });
    useFetch.mockReturnValue( initialReturnFetch );

    // Limpiamos los mocks antes de cada prueba
    beforeEach(() => {
        jest.clearAllMocks();
    }); 


    it(`Debe de mostrar el componente por defecto`, async () => {

        render(<MultiplesCustomHooks />);
        const previusPokemonBtn = await screen.findByText('Pokemon anterior');
        const nextPokemonBtn = await screen.findByText('Siguiente pokemon');

        
        expect(screen.getByText('Loading...'));
        expect(nextPokemonBtn.disabled).toBeTruthy();
        expect(previusPokemonBtn.disabled).toBeTruthy();
    });


    it('Debe mostrar a pikachú en el componente y el boton de regresar debe estar deshabilitado', async () => {
        useFetch.mockReturnValue({
            ...initialReturnFetch,
            data: {
                name: 'pikachu',
                img: 'https://www.google.com/pikachu.jpg'
            },
            isLoading: false
        });

        render(<MultiplesCustomHooks />);
        const previusPokemonBtn = await screen.findByText('Pokemon anterior');
        const nextPokemonBtn = await screen.findByText('Siguiente pokemon');


        expect( screen.findByRole('img') ).toBeTruthy();
        expect( previusPokemonBtn.disabled ).toBeTruthy();
        expect( nextPokemonBtn.disabled ).toBeFalsy();
    });


    it('Debe mostrar a pikachú en el componente y el boton de regresar debe estar habilitado', async () => {
        useCounter.mockReturnValue({ counter: 2, incrementCounter, decrementCounter });
        useFetch.mockReturnValue({
            ...initialReturnFetch,
            data: {
                name: 'pikachu',
                img: 'https://www.google.com/pikachu.jpg'
            },
            isLoading: false
        });

        render(<MultiplesCustomHooks />);
        const previusPokemonBtn = await screen.findByText('Pokemon anterior');
        const nextPokemonBtn = await screen.findByText('Siguiente pokemon');

        expect( screen.findByRole('img') ).toBeTruthy();
        expect( previusPokemonBtn.disabled ).toBeFalsy();
        expect( nextPokemonBtn.disabled ).toBeFalsy();
    });


    it('Se llamó el método de incrementCounter', async () => {
        useFetch.mockReturnValue({
            ...initialReturnFetch,
            data: {
                name: 'pikachu',
                img: 'https://www.google.com/pikachu.jpg'
            },
            isLoading: false
        });

        render(<MultiplesCustomHooks />);
        
        const previusPokemonBtn = await screen.findByText('Siguiente pokemon');
        await fireEvent.click(previusPokemonBtn);

        expect(incrementCounter).toHaveBeenCalled();
    });


    it('Se llamó el método de decrementCounter', async () => {
        useFetch.mockReturnValue({
            ...initialReturnFetch,
            data: {
                name: 'pikachu',
                img: 'https://www.google.com/pikachu.jpg'
            },
            isLoading: false
        });

        render(<MultiplesCustomHooks />);
        
        const previusPokemonBtn = await screen.findByText('Pokemon anterior');
        await fireEvent.click(previusPokemonBtn);

        expect(decrementCounter).toHaveBeenCalled();
    });
});