import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate()
/* console.log(localStorage.getItem('isAdmin'))
  console.log(localStorage.getItem('name'))
  console.log(localStorage.getItem('token')) */
  return (
    <div className='Nav-container'>
      {localStorage.getItem('isAdmin') === 'true' ? 
        <div className='empty'>
          <p>Administrador</p>
        </div>
      :
      <div className='empty'></div>}
      <div className='navLogo'>
        <button onClick={() => navigate('/')}><img src='logo.png' alt='' /></button>
        <h1> CannaDev </h1>
      </div>
      <div className='navIcons'>
        <button className='buttonheader' onClick={() => navigate('/blog')}><img src='blog.png' alt='' /></button>
        <button className='buttonheader' onClick={() => navigate('/cart')}><img src='cart.png' alt='' /></button>
        <button className='buttonheader' onClick={() => navigate('/profile')}><img src='profile.png' alt='' /></button>
      </div>
    </div>
  )
}

export default Nav