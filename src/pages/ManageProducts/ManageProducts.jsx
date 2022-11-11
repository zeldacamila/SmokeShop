import React from 'react'
import { useNavigate } from "react-router-dom"

const ManageProducts = () => {

  const navigate = useNavigate()

  return (
    <div className='ManageProducts-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
        {localStorage.getItem('isAdmin') === 'true' ?
          (<>
            <h1 className='animate__animated animate__fadeInLeft'>Administra tu tienda</h1>
            <div className='ManageProductsOptions-container'>
              <div className='newProduct-container'>
                <div className='ManageProductsOptionsImg-container'>
                  <img src='newproduct.png' alt='' />
                </div>
                <button className='uploadProduct-Button' onClick={()=> navigate('/admin/manageProducts/uploadProduct')}>Publicar un nuevo producto</button>
              </div>
              <div className='updateProduct-container'>
                <div className='ManageProductsOptionsImg-container'>
                  <img src='updateproduct.png' alt='' />
                </div>
                <button className='updateProduct-Button' onClick={()=> navigate('/admin/manageProducts/updateProduct')}>Actualizar un producto</button>
              </div>
              <div className='deleteProduct-container'>
                <div className='ManageProductsOptionsImg-container'>
                  <img src='deleteproduct.png' alt='' />
                </div>
                <button className='deleteProduct-Button' onClick={()=> navigate('/admin/manageProducts/deleteProduct')}>Eliminar un producto</button>
              </div>
            </div>
          </>)
          :
          (navigate('*'))
        }
    </div>
  )
}

export default ManageProducts