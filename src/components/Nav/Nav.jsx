import React from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../../redux-store/indexRedux'

const Nav = () => {
  
  const storeState = store.getState()
  const navigate = useNavigate()
  console.log(storeState)
  return (
    <div className='Nav-container'>
      <div className='empty'>
        {storeState.userReducer.isLogged ? <h1>loggeado</h1> : <h1>no loggeado</h1>}
      </div>
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