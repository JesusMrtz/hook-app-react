import { NavLink } from "react-router-dom";

export function NavBarComponent () {
  return (
    <>
        <nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to='/' className={({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='about' className={({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='login' className={({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>
                        Login
                    </NavLink>
                </li>
          </ul>
        </nav>
    </>
  )
}
