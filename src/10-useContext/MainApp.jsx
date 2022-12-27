import { Outlet} from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { UserProvider } from "./context/UserProvider"


export const MainApp = () => {
  return (
    // Utilizamos el <UserProvider /> para compartir la información con los componentes descendientes
    <UserProvider>
        <h2>UseContext</h2>
        <hr />
        <NavBarComponent />

        <Outlet />
    </UserProvider>
  )
}
