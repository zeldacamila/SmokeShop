import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Profile = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const user= {
    email: email,
    password: password
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const { data } = await axios.post(`http://localhost:8081/auth/signin`, user);
        console.log('data', data)
        if (data) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('isAdmin', data.isAdmin)
          localStorage.setItem('name', data.name)
          navigate('/profile')
        }
      } catch (error) {
          console.error(error)
        }
  }

  const handleLogout = () => {
    localStorage.clear()
    navigate('/profile')
  }
  return (
    <div className='Profile-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      {!localStorage.getItem('token') ?
      (<>
        <h1 className='animate__animated animate__fadeInLeft'>Bienvenido</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <label htmlFor="password">Password</label>
          <input id="pass" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <button>Iniciar Sesión</button>
        </form>
        <button className='singupButton-container' onClick={()=> navigate('/signup-profile')}>Crear una cuenta</button>
      </>)
      : 
      <>
        
        <div className='adminOrUserOptions-container'>
          {localStorage.getItem('isAdmin') === 'true' ?
            (<>
              <h1 className='animate__animated animate__fadeInLeft'>Bienvenido(a) {localStorage.getItem('name')}. Administra tu e-commerce</h1>
              <div className='manageEcommerce-container'>
                <div className='manageShop-container'>
                  <div className='ManageEcommerceImg-container'>
                    <img src='./shop.png' alt='' />
                  </div>
                  <button className='manageShopButton' onClick={()=> navigate('/admin/manageProducts')}>⚙️ Tienda</button>
                </div>
                <div className='manageBlog-container'>
                  <div className='ManageEcommerceImg-container'>
                    <img src='./blogconfig.png' alt='' />
                  </div>
                  <button className='manageBlogButton' onClick={()=> navigate('/admin/manageBlog')}>⚙️ Blog</button>
                </div>
              </div>
              
              
              
            </>)
            :
            (<>
              <h1 className='animate__animated animate__fadeInLeft'>Bienvenido(a) {localStorage.getItem('name')}</h1>
              <div className='manageClient-container'>
                <div className='buyProducts-container'>
                  <div className='manageClientImg-container'>
                    <img src='buyproducts.png' alt='' />
                  </div>
                  <button className='buyProductsButton' onClick={()=> navigate('/')}>🛒 Tienda</button>
                </div>
                <div className='manageProfile-container'>
                  <div className='manageClientImg-container'>
                    <img src='clientprofile.png' alt='' />
                  </div>
                  <button className='manageProfileButton' onClick={()=> navigate('*')}>👽 Perfil</button>
                </div>
              </div>
            </>)
          }
        </div>
        <div className='logoutButton-container'>
          <button className='logoutButton' onClick={handleLogout}>⬅️ Cerrar sesión</button>
        </div>
      </>
      }
    </div>
  )
}

export default Profile

