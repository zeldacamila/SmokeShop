import React from 'react'
import Button from '../Button/Button'

const ProductsGroupCard = ({cardImage, buttonTitle, buttonPath}) => {
  return (
    <div className='HomeCard-container'>
        <div className='cardImg-container'>
            <img src={cardImage} alt='' />
        </div>
        <div>
          <Button 
          buttonTitle={buttonTitle}
          buttonPath={buttonPath} />
        </div>
    </div>
  )
}

export default ProductsGroupCard