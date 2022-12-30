import { render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/10-useContext/context/UserContext";
import { HomePage } from "../../../src/10-useContext/pages/HomePage";


describe(`Pruebas en el componente <HomePage />`, () => {
    const user = {
        id: 1,
        name: 'Jesus Martinez Torres',
        email: 'correo.correo.com'
    }


    it('Debe mostrar el componente sin el usuario', () => {
        /**
         * Debemos utilizar el contexto para evitar errores al renderizar el componente <HomePage />
         * En este ejemplo a pesar de que un valor "null" no se visaliza en el HTML cuando visitamos el localHost.
         * En los test si se visualizará ese "null" en el HTML si hago un screen.debug()
         */
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByText('null');
        expect( preTag ).toBeTruthy();
    });


    it('Debe mostrar los valores con un usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByTestId('pre-user').textContent;
        expect( JSON.parse(preTag) ).toEqual(user);
    });
});