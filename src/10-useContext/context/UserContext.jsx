import { createContext } from "react";


/**
 * el createContext nos sirve para:
 * 1. Nos permite saber como luce la información que colocaremos ahi
 * 2. Que nuestro hook de React busque el contexto que estamos definiendo
 * 3. Para definir el proovedor, en este caso es el "UserProvider"
 */

export const UserContext = createContext();