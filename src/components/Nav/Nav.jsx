import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='Nav-container'>
      <div className='navLogo'>
        <img src='logo.png' alt='' />
        <h1> CannaDev </h1>
      </div>
      <div className='navIcons'>
        <button><img src='blog.png' alt='' /></button>
        <button><img src='cart.png' alt='' /></button>
        <button><img src='profile.png' alt='' /></button>
      </div>
    </div>
  )
}

export default Nav