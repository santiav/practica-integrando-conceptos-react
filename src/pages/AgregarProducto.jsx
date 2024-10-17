import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../features/productsSlice'
// Notas
/*
- Crear onChange para que vaya tomando cada valor de los inputs
y un estado local para ir guardando como OBJETO cada uno de los valores
- Boton con dispatch

*/

/*
{
...product,
[name]: "100" // Si toma el "name" del campo del formulario, ejemplo 'description', la propiedad se llamará description cuyo valor será tomado tambien de target
}

*/


function AgregarProducto() {
  const [product, setProduct ] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const handleInput = (e)=> {
    setProduct({
      ...product, 
      [e.target.name]: e.target.value
    })
    console.log(product)
  }

  /* Otras formas de encararlo
     - Crear un objeto predefinido teniendo en cuenta los valores de los indices del array que tirará 'target'
     - Crear un objeto vacio y a medida que el usuario ingrese la info se va llenando
     - Iterar sobre el array de los valores que toma el submit
  */

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addProduct(product))
      // Dispatch con los datos almacenados en 'product'
      navigate('/')
    }



  return (

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name='name' onChange={handleInput} require="true"/>

        <label htmlFor="price">Precio:</label>
        <input type="number" id="price" name='price' onChange={handleInput} require="true" />

        <label htmlFor="desc">Descripcion:</label>
        <textarea name="description" id="desc"  onChange={handleInput} require="true"></textarea>

        <label htmlFor="image">Imagen:</label>
        <input type="text" id="image" name='imageUrl' placeholder='https://picsum.photos/500/300'  onChange={handleInput} require="true"/>  
         
        <button>Agregar</button>
        
        {/* https://picsum.photos/500/300 */}
      </form>
  )
}

export default AgregarProducto
