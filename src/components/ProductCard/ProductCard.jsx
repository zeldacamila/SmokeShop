import React from 'react'
import Button from '../Button/Button'

const ProductsCard = ({productImage, buttonTitle, buttonPath}) => {
  return (
    <div className='HomeCard-container'>
        <div className='cardImg-container'>
            <img src={productImage} alt='' />
        </div>
        <div>
          <Button 
          buttonTitle={buttonTitle}
          buttonPath={buttonPath} />
        </div>
    </div>
  )
}

export default ProductsCard