import React from 'react';
import astra from '../../assets/astra.png';
import './Home.css';
import SocialMedia from '../socialmedia/SocialMedia';
import Projects from '../projects/Projects';
import Navbar from '../navbar/Navbar';


const Home = () => {
	return (
		<div>		
        	<Navbar />
			<div className="home-container">
				<div className='window-box'>
					<img src={astra} alt="Astra" /> 
					<h1>Hello, I'm Gana</h1>
					<p>I am a computer science student and React developer,
					 passionate about creating user-friendly web applications</p>
				</div>
			</div>

			<SocialMedia />
			<Projects />

		</div>
	);
};

export default Home;