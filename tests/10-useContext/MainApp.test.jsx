import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/10-useContext/MainApp";
import { HomePage } from "../../src/10-useContext/pages/HomePage";


describe(`Pruebas en el componente <MainApp />`, () => {
    it(`Verificar que el HomePage está activo`, () => {
        /** <MemoryRouter /> da todos los complementos para realizar tests en los routes */
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        const homeTagIsActive = screen.getByText('Home').closest('a');
        expect( homeTagIsActive.className ).toContain('active');
    });

    it('Verificar que el AboutPage está activo', () => {
        render(
            <MemoryRouter initialEntries={ ['/about'] }>
                <MainApp />
            </MemoryRouter>
        );

        const aboutTagIsActive = screen.getByText('About').closest('a');
        expect( aboutTagIsActive.className ).toContain('active');
    });


    it('Verificar que el LoginPage está activo', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        const loginTagIsActive = screen.getByText('Login').closest('a');
        expect( loginTagIsActive.className ).toContain('active');
    });
});