import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../store/productContext'
import ProductInCartCard from '../../components/ProductInCartCard/ProductInCartCard'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()

  const {productscart} = useContext(CartContext)
  console.log('productscart', productscart)
  const productsCart = JSON.parse(localStorage.getItem('ProductsCart'))
  console.log('productsCart', productsCart) 

  const handleClickCleanCart = () => {
    localStorage.removeItem('ProductsCart')
    navigate('/cart')
  }

  const handleGoToShop = () => {
    navigate('/')
  }

  const handlePay = () => {

  }

  return (
    <div className='Cart-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1 className='animate__animated animate__fadeInLeft'>Carrito</h1>
      <div className='CartWithProducts-container'>
        {/* productscart.length > 0 ? 
          (productscart.map(product => 
          <ProductInCartCard productImage={product.image} productName={product.name} productPrice={product.price} />))
          : */
          productsCart ?
            (productsCart.map(product => 
              <ProductInCartCard productImage={product.productImage} productName={product.productName} productPrice={product.productPrice} />))
          :
          <p>No has agregado productos al carrito</p>
        }
      </div>
      <div>
        <button onClick={handleGoToShop} className='buttonCleanCart'>🛒 Seguir comprando</button>
        <button onClick={handleClickCleanCart} className='buttonCleanCart'>Vaciar carrito</button>
        <button onClick={handlePay} className='buttonCleanCart'>Pagar</button>
      </div>
    </div>
  )
}

export default Cart
