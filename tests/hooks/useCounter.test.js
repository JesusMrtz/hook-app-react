import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";


describe('Pruebas en el archivo useCounter.js', () => {
    it('Debe de retornar los valores por defecto', () => {
        /**
         * Como el useCounter es un Hook, se tiene que utilizar el renderHook
        */
        const { result }  = renderHook(() => useCounter() );
        const { counter, decrementCounter, incrementCounter, resetCounter } = result.current;

        expect(counter).toBe(10);
        expect(decrementCounter).toEqual( expect.any(Function) );
        expect(incrementCounter).toEqual( expect.any(Function) );
        expect(resetCounter).toEqual( expect.any(Function) );
    });


    it('Debe de retornar el counter con el valor de 100', () => {
        /**
        * Como el useCounter es un Hook, se tiene que utilizar el renderHook
        */
        const { result }  = renderHook(() => useCounter(100) );
        const { counter } = result.current;
        
        expect(counter).toBe(100);
    });


    it('Incrementaremos el counter a 12', () => {
        const { result } = renderHook(() => useCounter());
        const { incrementCounter } = result.current;

        /** Los valores primitivos no se actualizarán */
        act(() => {
            incrementCounter();
            incrementCounter();
        });

        expect( result.current.counter ).toBe(12);
    });


    it('Decrementaremos el counter a 5', () => {
        const { result } = renderHook(() => useCounter());
        const { decrementCounter } = result.current;

        /** Los valores primitivos no se actualizarán */
        act(() => {
            decrementCounter();
            decrementCounter();
            decrementCounter();
            decrementCounter();
            decrementCounter();
        });

        expect( result.current.counter ).toBe(5);
    });


    it('Resetearemos el counter a su valor por defecto de 10', () => {
        const { result } = renderHook(() => useCounter());
        const { incrementCounter, decrementCounter, resetCounter } = result.current;

        /** Los valores primitivos no se actualizarán */
        act(() => {
            incrementCounter();
            incrementCounter();
            incrementCounter();
            incrementCounter();
            decrementCounter();

            resetCounter();
        });

        expect( result.current.counter ).toBe(10);
    });
});