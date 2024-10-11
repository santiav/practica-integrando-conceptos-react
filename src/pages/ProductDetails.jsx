import React from 'react'
import { useParams } from 'react-router-dom';


// Tareas
/*
- Agregar una fila con 2 columnas usando Bootstrap para que en una columna muestre la imagen del producto y la otra, la información del mismo.

*/

function ProductDetails() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-6'>
                <img src={producto.imageUrl} alt={producto.nombre} className='img-fluid'/> 
            </div>

            <div className='col-md-6'>
                <h2>{producto.nombre}</h2>
                <p>Descripcion: {producto.description}</p>
                <p>Precio: {producto.price}</p>
                <p>Stock: {producto.stock}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails

{/* Estacionamiento*/}

