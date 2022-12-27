import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


export const LoginPage = () => {
  /** OBtenemos el context del UserContext ortogado por el UserProvider */
  const { user, setUser } = useContext( UserContext );


  return (
    <>
        <h3>LoginPage</h3>
        <hr />
        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>
        <button className="btn btn-primary" onClick={ () => setUser({ id: 123, name: 'Jesus Martinez', email: 'jesus@correo.com' }) }>
          Establecer usuario
        </button>
    </>
  )
}
