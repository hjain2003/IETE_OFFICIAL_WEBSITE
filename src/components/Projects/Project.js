import React from 'react'
import './Project.css';
import ProjectCard from './ProjectCard';
import drone from '../../assets/Projects/drone.jpg'
import dino from '../../assets/Projects/dino.jpg'
import buggy from '../../assets/Projects/buggy.jpg'
import anpr from '../../assets/Projects/anpr.jpg'
import attendance from '../../assets/Projects/smart_attendance.png'
import radar from '../../assets/Projects/radar.jpg'

const Project = () => {
    return (
        <>
            <div className="project_container">
                <h1>Some of our Projects</h1>
                <div className="projects_grid">
                    <div className="project_row1">
                        <ProjectCard img={drone} name="Drone" description="High-performance UAV equipped with advanced flight controls, robust motors, and a built-in camera for aerial exploration and captivating aerial photography/videography."/>
                        <ProjectCard img={buggy} name="Remote controlled Buggy" description="A remote controlled buggy with obstacle detection capabilities"/>
                        <ProjectCard  img={radar} name="Radar" description="A simple radar made using ultrasonic sensor that can measure distance and detect obstacles upto half a meter"/>
                    </div>
                        <br />
                    <div className="project_row2">
                        <ProjectCard img={attendance} name="Smart Attendance System" description="An attendance system using facial recognition with a robust online portal to check attendance records"/>
                        <ProjectCard img={anpr} name="ANPR Recognition" description="A vehicle number plate detector to ascertain traffic law breakers"/>
                        <ProjectCard img={dino} name="Automated Dino Game" description="A simple yet fun dino game automator made using LDR module and servo motor ace "/>
                    </div>
                    <h1 id="more">And Many More...</h1>
                </div>
            </div>
        </>
    )
}

export default Project
