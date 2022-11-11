import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const SignUp = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  
  const user= {
    nameUser: name,
    email: email,
    password: password
  }

  const user2= {
    email: email,
    password: password
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const { data } = await axios.post(`http://localhost:8081/auth/signup`, user);
        const datalogin = await axios.post(`http://localhost:8081/auth/signin`, user2 )
        console.log('datalogin', datalogin.data)
        if (datalogin) {
          localStorage.setItem('token', datalogin.data.token)
          localStorage.setItem('isAdmin', datalogin.data.isAdmin)
          localStorage.setItem('name', datalogin.data.name)
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
    <div className='Signup-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      {!localStorage.getItem('token') ?
      (<>
        <h1 className='animate__animated animate__fadeInLeft'>Crear cuenta</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="name" name="name" onChange={(e) => setName(e.target.value)} value={name} />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <label htmlFor="password">Password</label>
          <input id="pass" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <button>Crear cuenta</button>
        </form>
      </>)
      : 
      <>
        <h1 className='animate__animated animate__fadeInLeft'>Bienvenido {localStorage.getItem('name')}</h1>
        <button className='logoutButton-container' onClick={handleLogout}>Cerrar sesión</button>
      </>
      }
    </div>
  )
}

export default SignUp

