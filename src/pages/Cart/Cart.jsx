import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../store/productContext'
import ProductInCartCard from '../../components/ProductInCartCard/ProductInCartCard'

const Cart = () => {
  const {productscart} = useContext(CartContext)
  console.log(productscart)
  return (
    <div className='Cart-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1 className='animate__animated animate__fadeInLeft'>Carrito</h1>
      <div className='CartWithProducts-container'>
        {productscart.length > 0 ? 
          (productscart.map(product => 
          <ProductInCartCard productImage={product.image} productName={product.name} productPrice={product.price} />))
          :
          <p>No has agregado productos al carrito</p>
        }
      </div>
    </div>
  )
}

export default Cart
