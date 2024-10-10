import React from 'react';
import { Link } from 'react-router-dom';


// Tareas
// Listar products 
// (se puede poner algun array de objetos de prueba para probar el mapeo)
// Agregar botón para que luego sea el link hacia un formulario para agregar el producto

// Producto
/*
id: 1
name: "Test"
price: 100
description: "Lorem ipsum"
imageUrl: "https://picsum.photos/500/300"
stock: 5

*/

function Products() {

    const productosDePrueba = [
        {
            id: 1,
            name: "Test",
            price: 100,
            description: "Lorem ipsum",
            imageUrl: "https://picsum.photos/500/300?random=1",
            stock: 5 
        },
        {
            id: 2,
            name: "Test 2",
            price: 50,
            description: "Lorem ipsum",
            imageUrl: "https://picsum.photos/500/300?random=2",
            stock: 7
        }

    ];
  return (
    <div>
        <h1>Lista de productos:</h1>
        <button>Agregar</button>
        <ul>
            {productosDePrueba.map( (producto, index) =>  <li key= { index }> { producto.name } </li>)}
        </ul>
      
    </div>
  )
}

export default Products

{/* Estacionamiento */}
