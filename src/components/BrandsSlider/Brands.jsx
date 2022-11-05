import { Carousel } from 'antd'



const BrandsSlider = () => {
  return(
    <Carousel autoplay>
      <div className='carousel1'>
        <img src='brands1.png' alt='' />
      </div>
      <div className='carousel2'>
        <img src='brands2.png' alt='' />
      </div>
      <div className='carousel3'>
        <img src='brands3.png' alt='' />
      </div>
    </Carousel>
  )
}

export default BrandsSlider
