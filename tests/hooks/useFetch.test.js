import { renderHook } from "@testing-library/react";
import { useFetch } from "../../src/hooks";

jest.mock('../../src/hooks');


describe(`Pruebas en el archivo useFetch.js`, () => {
    const initialReturnFetch = {
        data: null,
        isLoading: true,
        hasError: null
    };


    it(`Regresamos un valor inicial vacio del hook`, () => {
        /** Simulamos la respuesta del useFetchGifs cuando es llamado dentro del hook  */
        useFetch.mockReturnValue( initialReturnFetch );

        /**
         * Los hooks solo pueden ser llamados dentro de un functional component 
         * Pero gracias a la libreria de testing-library podemos simular que estamos dentro de uno gracias al método renderHook
        */
        const { result } = renderHook(() => useFetch(`https://google.com`));

        expect( result.current ).toEqual( initialReturnFetch );
    });


    it(`Regresamos pikachu dentro de la data`, () => {
        useFetch.mockReturnValue({
            ...initialReturnFetch,
            data: {
                name: 'pikachu',
                img: 'https://www.google.com/pikachu.jpg'
            },
            isLoading: false
        });

        const { result } = renderHook(() => useFetch(`https://google.com`));

        expect(result.current).toEqual({
            ...initialReturnFetch,
            data: {
                name: 'pikachu',
                img: 'https://www.google.com/pikachu.jpg'
            },
            isLoading: false
        });
    });


    it(`Simulamos un error de la petición`, () => {
        useFetch.mockReturnValue({
            ...initialReturnFetch,
            isLoading: false,
            hasError: 'Tenemos un problema watson'
        });

        const { result } = renderHook(() => useFetch('http://www.google.com'));

        expect(result.current.hasError).toBe('Tenemos un problema watson');
    });
});