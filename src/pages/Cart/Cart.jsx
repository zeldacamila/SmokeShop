import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../store/productContext'
import ProductInCartCard from '../../components/ProductInCartCard/ProductInCartCard'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid"

var handler = window.ePayco.checkout.configure({
  key: '16eabd1c2c0a914fea1ba0bbe6146100',
  test: true
});

const handlePay = (amount) => {
  const data = {
    //Parametros compra (obligatorio)
    name: "Accesorios para tu cultivo",
    description: "Este combo te ayuda a iniciar tu propio cultivo",
    invoice: uuidv4(),
    currency: "cop",
    amount: `${amount}`,
    tax_base: "0",
    tax: "0",
    country: "co",
    lang: "es",

    //Onpage="false" - Standard="true"
    external: "false",


    //Atributos opcionales
    extra1: "extra1",
    extra2: "extra2",
    extra3: "extra3",
    response: "https://smokeshop.vercel.app/",

    //Atributos cliente
    name_billing: "Jhon Doe",
    address_billing: "Calle 45 calle 123",
    type_doc_billing: "cc",
    mobilephone_billing: "3101234567",
    number_doc_billing: "1234567890",

    //atributo deshabilitación metodo de pago
    methodsDisable: ["SP"]
  }

  handler.open(data)
  localStorage.removeItem('ProductsCart')
}

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

  let amount = 0
  
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
            (productsCart.map((product) => {
              amount = amount + product.productPrice
              console.log('amount', amount)
              return(
              <ProductInCartCard productImage={product.productImage} productName={product.productName} productPrice={product.productPrice} />
              )
            }))
              :
            <p>No has agregado productos al carrito</p>
        }
        <h3>Total: COP ${amount}</h3>
      </div>
      <div>
        <button onClick={handleGoToShop} className='buttonCleanCart'>🛒 Seguir comprando</button>
        <button onClick={handleClickCleanCart} className='buttonCleanCart'>Vaciar carrito</button>
        <button onClick={()=> handlePay(amount)} className='buttonCleanCart'>Pagar</button>
      </div>
    </div>
  )
}

export default Cart
