import React from 'react'

const ButtonAdd = ({handleAddclick, children}) => {
  return (
    <button className='buttonAdd-container' onClick={handleAddclick}>
        {children}
    </button>
  )
}

export default ButtonAdd