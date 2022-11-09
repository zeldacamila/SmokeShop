import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { SETUSERDATA } from "../../redux-store/userReducer/userReducer";
import axios from "axios"

const Profile = () => {

  const dispatch = useDispatch()
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
      const { userOrAdmin } = await axios.post(`https://cannadev-smokeshop.herokuapp.com/adminauth/signin`, user);
      if (userOrAdmin) {
        dispatch({type: SETUSERDATA, payload: {userOrAdmin}})
        navigate('/')
      } 
    } catch (error) {
      console.error(error)
      if (error) {
        try {
          const { data } = await axios.post(`https://cannadev-smokeshop.herokuapp.com/auth/signin`, user);
          if (data) {
            dispatch({type: SETUSERDATA, payload: {data}})
            navigate('/')
          }
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  
  return (
    <div className='Profile-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1 className='animate__animated animate__fadeInLeft'>Bienvenido</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label htmlFor="password">Password</label>
        <input id="pass" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Profile

