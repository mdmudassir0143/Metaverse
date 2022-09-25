import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaUserAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='phone'>
                        <h4><FaUserAlt size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> Created by Mohammad Mudassir</h4>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 1-800-123-1234</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> meta@verse.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam"</p>
                    <div className='social'>
                        <a href="/"><FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <a href="/"><FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <a href="/"><FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
