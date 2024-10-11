import React from 'react'

// Notas
/*
- Crear onChange para que vaya tomando cada valor de los inputs
y un estado local para ir guardando como OBJETO cada uno de los valores
- Boton con dispatch

*/


function AgregarProducto() {
  return (

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value="name"/>
        <label htmlFor="price">Precio:</label>
        <input type="number" id="price" value="price"/>
        <label htmlFor="desc">Descripcion:</label>
        <textarea name="description" id="desc"></textarea>
        <label htmlFor="image">Imagen:</label>
        <input type="text" id="image" value="img" placeholder='https://picsum.photos/500/300'/>   
        <button>Agregar</button>
        
        {/* https://picsum.photos/500/300 */}
      </form>
  )
}

export default AgregarProducto
