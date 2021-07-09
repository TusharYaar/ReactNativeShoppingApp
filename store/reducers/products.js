
import PRODUCTS from "../../data/dummy-data";
const initialState = {
    products: PRODUCTS,
    filteredProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === "u1")
}

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    default:
        return state
    }
}
