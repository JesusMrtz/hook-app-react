import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/10-useContext/context/UserContext";
import { LoginPage } from "../../../src/10-useContext/pages/LoginPage";


describe(`Pruebas en el page <LoginPage />`, () => {
    it(`Verificar si el usuario se renderiza sin un usuario`, () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        expect( screen.getByText('null') ).toBeTruthy();
    });


    it(`Verificamos si la función setUser() fue llamado y con el nuevo valor del usuario`, async () => {
        const setUser = jest.fn();
        render(
            <UserContext.Provider value={{ user: null, setUser }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const btnElement = screen.getByRole('button');
        await fireEvent.click(btnElement);

        expect( setUser ).toHaveBeenCalledWith({ id: 123, name: 'Jesus Martinez', email: 'jesus@correo.com' });

    });
});