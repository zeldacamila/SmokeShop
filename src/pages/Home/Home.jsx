import React from 'react'
import ProductsGroupCard from '../../components/ProductsGroupCard/ProductsGroupCard'

const Home = () => {

  return (
    <div className='Home-container'>
      <div className='advertising-container'>
        <p>Envíos gratis por compras superiores a 200.000 COP</p>
      </div>
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
          buttonTitle='MEDICINAL'
          buttonPath='/' />
        <ProductsGroupCard 
          cardImage='kit.png'
          buttonTitle='KITS'
          buttonPath='/' />
      </div>
    </div>
  )
}

export default Home