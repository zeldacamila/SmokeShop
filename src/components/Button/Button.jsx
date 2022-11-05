import React from 'react'
import { Link } from 'react-router-dom'


const Button = ({buttonTitle, buttonPath}) => {

    return (
        <button className='button-container'>
            <Link id='button-path' to={buttonPath}>{buttonTitle}</Link>
        </button>
    )
}

export default Button