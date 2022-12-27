import { createBrowserRouter } from "react-router-dom"
import { HookApp } from "../../HooksApp";
import { MainApp } from "../MainApp";
import { AboutPage, HomePage, LoginPage } from "../pages";
import { ErrorPage } from "./ErrorPage";


export const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HookApp />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '',
                    element: <HomePage />
                },
                {
                    path: 'login',
                    element: <LoginPage />
                },
                {
                    path: 'about',
                    element: <AboutPage />
                }
            ]
        },
    ]);

    return router;
}