import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

  const handleClickLinkedin = () => {
    console.log('handleClick')
    window.location('https://www.linkedin.com/in/mc-recuero')
  }
  
  return (
    <div className='Foot-container'>
      <div className='empty'>
        <p> Recuerda consumir de manera responsable. </p>
      </div>
      <div className='footLogo'>
        <img src='logo.png' alt='' />
        <p> <FaRegCopyright /> CannaDev Colombia </p>
      </div>
      <div className='footIcons'>
        <p> Visítanos </p>
        <button><img src='fblogo.png' alt='' /></button>
        <button onClick={handleClickLinkedin}><img src='inlogo.png' alt='' /></button>
        <button><img src='iglogo.png' alt='' /></button>
      </div>
    </div>
  )
}

export default Footer