import React from 'react'
import './ProjectCard.css'
import drone from '../../assets/Projects/drone.jpg';

const ProjectCard = (props) => {
  return (
    <>
        <div className="project_card">
            <div className="project_image_container">
                <img src={props.img} alt="" />
            </div>
                <h2>{props.name}</h2>
                <p align="center">{props.description}</p>
        </div>
    </>
  )
}

export default ProjectCard
