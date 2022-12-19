import React from 'react'
import './ImportantLink.css'

import Linkedin from '../../assets/Home/Linkedin.svg';
import leetcode from '../../assets/Home/leetcode.png'
import youtube from '../../assets/Home/youtube.svg';
import github from '../../assets/Home/github.svg';



const ImportantLink = () => {
  return <div className='ImportantLink_container'>
    <div className='about_heading  transform_effect'>
      <h1>Important Link</h1>

      <div className='underline_style'>
        <div style={{ width: '300px' }}><hr /></div>

      </div>
    </div>
    <div className='ImportantLink_text' data-aos="fade-up"
                data-aos-anchor-placement="top-center">


    <div><a href='https://leetcode.com/Amitverma_12345/' target="_blank"><img style={{ width: '50px', height: '50px' }} src={leetcode} alt="img" /></a></div>
      
      <div><a href='https://www.linkedin.com/in/amit-verma-b3450b1b4/' target="_blank"><img style={{ width: '50px', height: '50px' }} src={Linkedin} alt="img" /></a></div>
      
      <div><a href='https://github.com/amit5511/' target="_blank"><img style={{ width: '50px', height: '50px' }} src={youtube} alt="img" /></a></div>



    </div>
  </div>

}

export default ImportantLink
