import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Link to ="/" className='text-xl'> Login</Link>
       <h1>About Us</h1>
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

export default About
