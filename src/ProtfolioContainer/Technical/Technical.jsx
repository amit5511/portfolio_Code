import React from 'react'
import './Technical.css'
import java from '../../assets/Home/java.svg'
import bootstarp from '../../assets/Home/bootstrap.svg'
import cprogramming from '../../assets/Home/cprogramming.svg'
import css3 from '../../assets/Home/css3.svg'
import html from '../../assets/Home/html.svg'
import jsvsscript from '../../assets/Home/javascript.svg'
import mongodb from '../../assets/Home/mongodb.svg'
import nodejs from '../../assets/Home/nodejs.svg'
import python from '../../assets/Home/python.svg'
import react from '../../assets/Home/react.svg'
import redux from '../../assets/Home/redux.svg'
import sql from '../../assets/Home/sql.svg'
import express from '../../assets/Home/express.svg'
import leetcode from '../../assets/Home/leetcode.png'
import gfg from '../../assets/Home/gfg.svg'
import codechef from '../../assets/Home/codechef.svg'




const Technical = () => {
    return <div className='technica_container'>
        <div className='contact_container transform_effect '>

            <h1>Technical skills</h1>

            <div className='underline_style_contact'>
                <div style={{ width: '300px' }}><hr /></div></div>

        </div>
        <div className='technical_text ' data-aos="fade-right">
            <div className='datastructure technical_heading'>
                <div className='datast_text_technical transform_effect'>
                    <span>DATA STRUCTURE
                        <div className='underline_style_contact'>
                            <div style={{ width: '170px', marginBottom: '25px', marginTop: '10px' }}><hr /></div></div>
                    </span>

                </div>
                <div className='datast_text_technical'>

                    <div className='bulletpoint'></div>
                    <a href='https://leetcode.com/Amitverma_12345/'target='_blank'>
                    <span >Leetcode  <img  style={{width:'28px'}}src={leetcode} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a href='https://auth.geeksforgeeks.org/user/tuseday013/'target='_blank'>
                    <span>Geek For Geeks <img src={gfg} /></span>
                    </a>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <a href='https://www.codechef.com/users/amit7497925101'target='_blank'>
                    <span>Code Chef <img src={codechef} /></span>
                    </a>
                </div>
            </div>
            <div className='programming technical_heading'>

                <div className='datast_text_technical transform_effect'>
                    <span>PROGRAMMING LANGUAGE
                        <div className='underline_style_contact'>
                            <div style={{ width: '255px', marginBottom: '25px', marginTop: '10px' }}><hr /></div></div>
                    </span>
                </div>
                <div className='datast_text_technical'>

                    <div className='bulletpoint'></div>
                    <span>Java (core) <img src={java} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>C Language <img src={cprogramming} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>Python <img src={python} /></span>
                </div>
            </div>
            <div className='webtechnology technical_heading'>

                <div className='datast_text_technical transform_effect'>
                    <span>WEB TECHNOLOGY
                        <div className='underline_style_contact'>
                            <div style={{ width: '165px', marginBottom: '25px', marginTop: '10px' }}><hr /></div></div>
                    </span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>Html5 <img src={html} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>Css3 <img src={css3} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>Bootstrap <img src={bootstarp} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>Javascript <img src={jsvsscript} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>React <img src={react} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>Redux <img src={redux} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>Node <img src={nodejs} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>Express <img src={express} /></span>
                </div>


            </div>
            <div className='database technical_heading'>
                <div className='datast_text_technical transform_effect'>
                    <span>DATABASE
                        <div className='underline_style_contact'>
                            <div style={{ width: '130px', marginBottom: '25px', marginTop: '10px' }}><hr /></div></div>
                    </span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>Mongodb <img src={mongodb} /></span>
                </div>
                <div className='datast_text_technical'>
                    <div className='bulletpoint'></div>
                    <span>My Sql <img src={sql} /></span>
                </div>
            </div>

        </div>


    </div>
}

export default Technical