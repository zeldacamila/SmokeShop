import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext()

const ProductContextProvider = ({children}) => {

    const [productscart, setProductscart] = useState([])

    const addProduct = (product) => {
        setProductscart((prev) => [...prev, product])
    }

    const store = {
        productscart, addProduct
    }

  return (
    <CartContext.Provider value={store}>
        {children}
    </CartContext.Provider>
    
  )
}

export default ProductContextProvider;