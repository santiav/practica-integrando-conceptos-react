import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Tareas
// Listar products
// (se puede poner algun array de objetos de prueba para probar el mapeo)
// Agregar botón para que luego sea el link hacia un formulario para agregar el producto

function Products() {

    const products = useSelector(state => state.products)

  return (
    <div>
      <h1>Lista de productos:</h1>
      <Link to="/add">Agregar</Link>
      <ul>
        {products.map((producto, index) => (
          <li key={index}>
            <img
              src={producto.imageUrl}
              alt={producto.name}
              className="img-fluid"
            />
            <h3>{producto.name}</h3>
            <p>Precio: u$s {producto.price}</p>
            <p>Descripción: {producto.description}</p>
            <p>Stock: {producto.stock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

{
  /* Estacionamiento */
}
