import React from 'react'
import ProductsGroupCard from '../../components/ProductsGroupCard/ProductsGroupCard'

const Home = () => {

  return (
    <div className='Home-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1>¿QUÉ ESTÁS BUSCANDO?</h1>
      <div className='Cards-container'>
        <ProductsGroupCard 
          cardImage='vapes.png'
          buttonTitle='VAPOS'
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='bong.png'
          buttonTitle='BONGS'
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='grinder.png'
          buttonTitle='GRINDERS'
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='lighter.png'
          buttonTitle='CANDELAS'
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='papers.png'
          buttonTitle="PA' ENROLAR"
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='pipe.png'
          buttonTitle='PIPAS'
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='grow.png'
          buttonTitle='PARA TU CULTIVO'
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='accesorios.png'
          buttonTitle='ACCESORIOS'
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='medicinal.png'
          buttonTitle='PRODUCTOS CBD'
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='kit.png'
          buttonTitle='KITS'
          buttonPath='/' />
      </div>
      <h1>NUESTRAS MARCAS ALIADAS</h1>
      <div className='Brands-container'>

      </div>
      <h1>VISITA NUESTRO BLOG</h1>
      <div className='Blog-container'>

      </div>
    </div>
  )
}

export default Home