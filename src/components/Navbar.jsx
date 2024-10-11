import React from 'react'
import { NavLink } from 'react-router-dom';


// Tareas
/*
- Usar NavLink para crear "inicio", "agregar producto"


*/

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/" activeClassName="active">
                    Inicio
                </NavLink>
            </li>
            <li>
                <NavLink to="/add" activeClassName="active">
                    Agregar Producto
                </NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;

{/* Estacionamiento */}