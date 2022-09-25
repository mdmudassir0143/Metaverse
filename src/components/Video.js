import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'
import spaceaudio from '../assets/space.mp3'

const Video = () => {
    return (
        <div className='hero'>
            <audio autoPlay loop id='audio'>
                <source src={spaceaudio} type='audio/mp3' />
            </audio>
            
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Metaverse</h1>
                <p>Explore the virtual world.</p>
                <div>
                    <Link to='/training' className='btn'>Enter</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
