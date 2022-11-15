import React from 'react'
import { useNavigate } from "react-router-dom"

const ManageBlog = () => {

  const navigate = useNavigate()

  return (
    <div className='ManageBlog-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
        {localStorage.getItem('isAdmin') === 'true' ?
          (<>
            <h1 className='animate__animated animate__fadeInLeft'>Administra el CannaBlog</h1>
            <div className='ManageBlogOptions-container'>
              <div className='newPublication-container'>
                <div className='ManageBlogOptionsImg-container'>
                  <img src='vapes.png' alt='' />
                </div>
                <button className='uploadPublication-Button' onClick={()=> navigate('/admin/manageBlog/uploadPublication')}>Publicar una nueva noticia</button>
              </div>
              <div className='updatePublication-container'>
                <div className='ManageBlogOptionsImg-container'>
                  <img src='vapes.png' alt='' />
                </div>
                <button className='updatePublication-Button' onClick={()=> navigate('/admin/manageBlog/updatePublication')}>Actualizar una noticia</button>
              </div>
              <div className='deletePublication-container'>
                <div className='ManageBlogOptionsImg-container'>
                  <img src='vapes.png' alt='' />
                </div>
                <button className='deletePublication-Button' onClick={()=> navigate('/admin/manageBlog/deletePublication')}>Eliminar una noticia</button>
              </div>
            </div>
          </>)
          :
          (navigate('*'))
        }
    </div>
  )
}

export default ManageBlog

