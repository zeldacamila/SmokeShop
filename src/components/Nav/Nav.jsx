import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  
  const navigate = useNavigate()

  return (
    <div className='Nav-container'>
      <div className='empty'></div>
      <div className='navLogo'>
        <button onClick={() => navigate('/')}><img src='logo.png' alt='' /></button>
        <h1> CannaDev </h1>
      </div>
      <div className='navIcons'>
        <button onClick={() => navigate('/blog')}><img src='blog.png' alt='' /></button>
        <button onClick={() => navigate('/cart')}><img src='cart.png' alt='' /></button>
        <button onClick={() => navigate('/profile')}><img src='profile.png' alt='' /></button>
      </div>
    </div>
  )
}

export default Nav