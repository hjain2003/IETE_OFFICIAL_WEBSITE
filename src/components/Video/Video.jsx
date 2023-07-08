import React from 'react'
import './Video.css';
import video from '../../assets/LandingVideo/video.mp4'
const Video = () => {
    return (
        <>
            <div className="video_container">
                <video autoPlay loop muted>
                    <source src='../../assets/LandingVideo/video.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}

export default Video
