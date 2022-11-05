import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

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
        <a href='https://www.linkedin.com/in/mc-recuero' target="_blank" rel="noopener noreferrer" className='linkedinLink'>
          <button><img src='inlogo.png' alt='' /></button>
        </a>
        <a href='https://www.instagram.com/cannadev_/' target="_blank" rel="noopener noreferrer" className='linkedinLink'>
          <button><img src='iglogo.png' alt='' /></button>
        </a>
      </div>
    </div>
  )
}

export default Footer