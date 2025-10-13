import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
       <h1>Login</h1>
      <Link to ="/Home" className='text-xl'> Home</Link>
      <p>
        Welcome to our website! We are passionate about creating modern and
        user-friendly web applications using React.
      </p>
      <p>
        Our goal is to help beginners learn web development easily with simple
        examples and hands-on projects.
      </p>
    </div>
  )
}

export default Login
