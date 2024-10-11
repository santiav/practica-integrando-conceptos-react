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

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload]
        default:
            return state
        
    }
}

export default productsReducer;