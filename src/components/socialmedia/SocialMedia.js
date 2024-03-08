import React from 'react';
import './SocialMedia.css';
import instaLogo from '../../assets/instagram.webp';
import linkedIn from '../../assets/linkedin.png';
import gitHub from '../../assets/github.png';


const SocialMedia = () => {
    return (
        <div className="socialmedia-container">
                <div className="socialmedia-box">
                    <h3>FOLLOW ME ON SOCIAL MEDIA:
                        <a href="https://instagram.com/gantsoggggg" target="_blank" rel="noopener noreferrer">
                          <img src={instaLogo} alt='instagram'/>
                        </a>
                        <a href="https://www.linkedin.com/in/gantsog-jargalsaikhan-96a3411a2/" target="_blank" rel="noopener noreferrer">
                          <img src={linkedIn} alt='linkedin'/>
                        </a>
                        <a href="https://www.github.com/Gana0606" target="_blank" rel="noopener noreferrer">
                          <img src={gitHub} alt='github'/>
                        </a>
                    </h3>
                </div>
        </div>
    );
};

export default SocialMedia;
