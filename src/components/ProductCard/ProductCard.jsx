import React from 'react'

const ProductCard = ({productImage, collectionName, productName, productPrice}) => {

  const handleClickAddtoCart = () => {

  }

  return (
    <div className='ProductCard-container'>
      <a href={`collections/${collectionName}/${productName}`} className='linkProduct'>
          <div className='productCardImg-container'>
            <img className='firstImage' src={productImage} alt='' />
          </div>
          <p className='productName'>{productName}</p>
          <p className='productPrice'>COP${productPrice}</p>
      </a>
      <button onClick={handleClickAddtoCart} className='buttonAddtoCart'>
          Agregar al carrito
      </button>
    </div>
  )
}

export default ProductCard