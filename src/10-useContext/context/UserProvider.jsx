import { useState } from "react";
import { UserContext } from "./UserContext";


// const user = {
//    id: 123,
//    name: 'Jesus Martinez Torres',
//    email: 'jesus@correo.com' 
// };

/**
 * Cuando una función funciona como "Provider", por defecto le llega una property con el nombre de "children"
 * 
 */
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();


    return (
        // Proveemos toda la información que el <UseContext /> nos proporcionará al árbol de nuestros componentes
        // En la propiedade "value" enviamos dicha información y en este ejemplo estamos enviando un objecto con la property "message"
        
        // <UserContext.Provider value={{ message: 'Hello world', user }}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
