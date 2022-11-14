import React from 'react'
import { useContext, useState } from "react";
import { CartContext } from "../../store/productContext";
import axios from 'axios';


const ProductCard = ({productImage, collectionName, productName, productPrice}) => {

  const { addProduct } = useContext(CartContext)

  const handleClickAddtoCart = () => {
    console.log('productName', productName)
    axios.get(`http://localhost:8081/api/products`
    ).then((res) => {
      const allProducts = res.data.data
      console.log('allProducts', allProducts)
      const productByName = allProducts.filter(function (item) {
        return item.name === productName
      })
      console.log('productByName', productByName[0])
      addProduct(productByName[0])
      if (localStorage.getItem("ProductsCart") === null) {
        localStorage.setItem("ProductsCart",JSON.stringify([]))
      }
      localStorage.setItem('products', productByName[0])
      let products = [localStorage.getItem("ProductsCart")]
      products = JSON.parse(products)
        const objProduct = {productImage,productPrice,productName}
        console.log('objProduct',objProduct)
        products.push(objProduct)
        localStorage.setItem("ProductsCart",JSON.stringify(products));
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
    })
  }

  return (
    <div className='ProductCard-container'>
      <a href={`collections/${collectionName}/${productName}`} className='linkProduct'>
          <div className='productCardImg-container'>
            <img className='firstImage' src={productImage} alt='' />
          </div>
          <p className='productName'>{productName}</p>
          <p className='productPrice'>COP ${productPrice}</p>
      </a>
      <button onClick={handleClickAddtoCart} className='buttonAddtoCart'>
          Agregar al carrito
      </button>
    </div>
  )
}

export default ProductCard