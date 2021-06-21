import React from 'react';
import './Projects.css';
import Project1 from '../../../images/project1.jpg';
import Project2 from '../../../images/project2.jpg';
import Project3 from '../../../images/project3.jpg';

const Projects = () => {
    return (
        <div className="container projects-container">
            <h3 className="projects-title pt-5">Check Out Some of our Best Works Till Date</h3>
            <div className="project-grid mx-auto pt-5">
                <div className="project">
                    <img className="project-image" src={Project1} alt="" />
                    <h4>Project Title</h4>
                    <p>Location</p>
                </div>
                <div className="project">
                    <img className="project-image" src={Project2} alt="" />
                    <h4>Project Title</h4>
                    <p>Location</p>
                </div>
                <div className="project">
                    <img className="project-image" src={Project3} alt="" />
                    <h4>Project Title</h4>
                    <p>Location</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;