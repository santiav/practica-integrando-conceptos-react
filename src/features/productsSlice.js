
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
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

const productSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
            console.log(state)
            console.log(action)
        }
        
    }
}
)


export const {addProduct}  = productSlice.actions
export default productSlice.reducer
// Crear la función createSlice con el objeto con los reductores y las acciones