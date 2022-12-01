import React from 'react'
import Typical from 'react-typical'
import './profile.css';
import { homeTitle } from '../../assets/Data/introdata';
import Resume from'../../assets/Home/Resume.pdf'
const Profile = () => {
  return <>
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
            <a href='https://www.linkedin.com/in/amit-verma-b3450b1b4/' target="_blank">
              <i className='fa fa-facebook-square'></i>

            </a>
            <a href='https://www.linkedin.com/in/amit-verma-b3450b1b4/' target="_blank">
              <i className='fa fa-goole-plus-square'></i>

            </a>
            <a href='https://www.linkedin.com/in/amit-verma-b3450b1b4/' target="_blank">
              <i className='fa fa-instagram'></i>

            </a>
            <a href='https://www.linkedin.com/in/amit-verma-b3450b1b4/' target="_blank">
              <i className='fa fa-youtube-square'></i>

            </a>
            <a href='https://www.linkedin.com/in/amit-verma-b3450b1b4/' target="_blank">
              <i className='fa fa-twitter'></i>

            </a>
            </div>
           

          </div>
          <div className='profile-details-name'>
            <span className='primart-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Amit</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {""}
              <h1>
                {""}
                <Typical
                loop={Infinity}
                steps={[
                  
                  "400+ DSA Questions ",
                  1000,
                  "Full-stack developer",
                  1000,
                  "Leetcode (3🌟)",
                  1000,
                  "Computer Science Undergraduate",
                  1000,
                  "MERN Developer",
                  1000,
                ]}
                />

               

              </h1>
              <span className='profile-role-tagline'>
              {homeTitle}
              </span>

            </span>

          </div>
          <div className='profile-options'>
          <a style={{textDecoration:'none',color:'wite', width:'100%'}} className='hireme'href="#contactusid">
            <button  className='btn primary-btn'>
             
              {''}
              Hire Me {" "}
             
            </button>
            </a>
            <a  href={Resume} download='Resume Amit.pdf' target="_blank" >
              <button className='btn highlighted-btn'>Get Resume</button>
             
              
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>

      </div>
  
    </div>
   
  </>
}

export default Profile