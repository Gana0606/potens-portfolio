import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Projects.css';
import image1 from '../../assets/p1t.png';
import image2 from '../../assets/p2t.png';

			
const Projects = () => {

	return (
		<div className="card-container">

			<div className="project-title">
				<h6>
					<span className="text-theme">Projects</span>
				</h6>
			</div>
			
			<div className="project-text">
				<div>
					<h3>My latest projects</h3>
				</div>
			</div>

			<div className="project-cards">
				<div className="col-md-7 d-flex justify-content-center mb-5 scale-up-on-hover">
		            <Card border="secondary"
		            	  bg={'dark'}
				          key={'dark'}
				          style={{ width: '18rem'}}>
		                <Card.Img variant="top" src={image1} />
		                <Card.Body>
	                        <Card.Text class="p-theme">
	                            <p>
	                            	<span className="text-theme1">AI model</span> for detecting the location of human faces in images. 
	                            	This is the first version of Magic Brain, which integrates the powerful 
	                            	Clarifai API to leverage pre-trained AI models for accurate and efficient face detection.</p>
								<p>The system utilizes a PSQL database to store user registration data. </p>
	                        </Card.Text>
		                </Card.Body>
		                <Card.Footer>
		                	<Button variant="outline-light" href="https://www.potensdev.info">
		                		<span className="text-theme1">View Project</span>
		                	</Button> 
				        </Card.Footer>
		            </Card>
		        </div>

				<div className="col-md-6 d-flex justify-content-center mb-5 scale-up-on-hover">
		            <Card border="secondary"
		            	  bg={'dark'}
				          key={'dark'}
				          style={{ width: '18rem'}}>
		                <Card.Img variant="top" src={image2} />
		                <Card.Body>
	                        <Card.Text class="p-theme">
	                            <p>Built with <span className="text-theme1">React JS</span>, this website offers a sleek and interactive experience for users seeking professional painting services.</p>
								<p>It highlights the use of modern web technology to present services and facilitate user engagement effectively</p>
	                        </Card.Text>
		                </Card.Body>
		                <Card.Footer>
		                	<Button variant="outline-light" href="https://client-painting-service-206f905daa5f.herokuapp.com/">
		                		<span className="text-theme1">View Project</span>
		                	</Button> 
				        </Card.Footer>
		            </Card>
		        </div>

		    </div>
		</div>
	);
};

export default Projects;
			