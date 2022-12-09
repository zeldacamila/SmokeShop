import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spiner } from '../../components/Spiner/Spiner'
import { useNavigate } from 'react-router-dom'

const ProductsByCollection = () => {

  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  let collection = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`https://smokeshop-backend.onrender.com/api/products`
    ).then((res) => {
      const allProducts = res.data.data
    
      const productsByCollection = allProducts.filter(function (item) {
        return item.collectionName === collection.collection
      })
      setProducts(productsByCollection)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  const handleGoToCategory = () => {
    navigate('/')
  }

  return (
    <div className='productsByCollection-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1 className='animate__animated animate__fadeInLeft'>{collection.collection}</h1>
      <div className='CollectionProductsCards-container'>
        {loading ? <Spiner /> : (products.map((item) => {
          return(
            <ProductCard
              productImage={item.image}
              collectionName={item.collectionName}
              productName={item.name}
              productPrice={item.price} />
          )}))}
        <button onClick={handleGoToCategory} className='buttonAddtoCart'>
          Volver a Categorías
        </button>
      </div>
    </div>
  )
}

export default ProductsByCollection