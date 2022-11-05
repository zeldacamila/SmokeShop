import React from 'react'
import ProductCard from '../../components/ProductsGroupCard/ProductsGroupCard'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductsByCollection = () => {

  const [products, setProducts] = useState([])
  let collection = useParams();

  console.log('collection de params:', collection.Collection)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_HEROKU_URL}/collections`
    ).then((res) => {
      const allProducts = res.data.data
      console.log('allproducts:', allProducts)
    
      const productsByCollection = allProducts.filter(function (item) {
        return item.collection === collection.Collection
      })
      console.log('productsByCollection', productsByCollection)
      
      setProducts(productsByCollection)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
    })
  }, [])

  return (
    <div className='productsByCollection-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1>{collection.Collection}</h1>
      <div className='CollectionProductsCards-container'>
        {(products.map((item) => {
          return(
            <ProductCard
              productImage1={item.productImage1}
              productImage2={item.productImage2}
              collection={item.collection}
              productName={item.productName}
              productPrice={item.productPrice} />
          )}))}
      </div>
    </div>
  )
}

export default ProductsByCollection