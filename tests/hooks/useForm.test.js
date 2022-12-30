import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";


describe('Pruebas en el archivo useForm.js', () => {
    const initialForm = {
        name: 'Jesús Martínez Torres',
        email: 'jesus@correo.com'
    };

    const value = {
        target: {
            name: 'name',
            value: 'Gato Felíz'
        }
    };


    it('Debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm( initialForm ));
        
        expect( result.current ).toEqual(  {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
          });
    });


    it(`Debe de cambiar el nombre del formulario de 'Jesús Martínez Torres' a 'Gato Felíz'`, () => {
        const { result } = renderHook(() => useForm( initialForm ));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange(value);
        });

        expect( result.current.name ).toBe('Gato Felíz');
        expect( result.current.formState ).toEqual({
            name: 'Gato Felíz',
            email: initialForm.email
        });
    });


    it(`Debemos resetear el formulario`, () => {
        const { result } = renderHook(() => useForm( initialForm ));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange(value);
            onResetForm();
        });

        expect( result.current.name ).toBe(initialForm.name);
        expect( result.current.formState ).toEqual( initialForm );
    });
});