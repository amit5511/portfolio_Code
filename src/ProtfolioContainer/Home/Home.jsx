import React from 'react'
import'./Home.css'
import Profile from './Profile'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
const Home = () => {
  return (
    <div  id="home" className='home-container'>
      {/* <Navbar/> */}
        <Profile/>
        <Footer/>
    </div>
  )
}

export default Home