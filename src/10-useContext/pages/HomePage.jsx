import { useContext } from "react";
import { UserContext } from "../context/UserContext"


export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
        <h3>HomePage</h3>
        <hr />
        <pre data-testid="pre-user">
          {
            JSON.stringify(user, null, 3)
          }
        </pre>
    </>
  )
}
