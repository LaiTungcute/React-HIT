import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    //useNavigate: định hướng giống click
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/prop');
    }
  return (
    <div>
        <input type="text" placeholder='Ten' required/>
        <input type="password" placeholder='Mat khau' required/>
        <button onClick={handleClick}>Click Login</button>
    </div>
  )
}

export default Login