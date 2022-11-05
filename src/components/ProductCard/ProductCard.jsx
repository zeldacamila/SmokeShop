import React from 'react'

const ProductCard = ({productImage1, productImage2, collection, productName, productPrice}) => {

  const handleClickAddtoCart = () => {

  }

  return (
    <div className='ProductCard-container'>
      <a href={`collections/${collection}/${productName}`} className='linkProduct'>
        <div className='withoutButtons-container'>
          <div className='productCardImg-container'>
            <img className='secondImage'src={productImage2} alt='' />
            <img className='firstImage' src={productImage1} alt='' />
          </div>
          <p className='productName'>{productName}</p>
          <p className='productPrice'>{productPrice}</p>
        </div>
      </a>
      <div className='withButtons-container'>
        <button onClick={handleClickAddtoCart} className='buttonAddtoCart'>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard