import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
       
        <div className='Nabvarlink'>
        <span className='highlighted'>Navbar</span>
        <a  href="#home"className='highlighted'>Home</a>
            <a className='highlighted'>AboutMe</a>
            <a className='highlighted'>Resume</a>
            <a className='highlighted'>Testimonial</a>
            <a className='highlighted'>ContactMe</a>

        </div>
    </div>

  )
}

export default Navbar