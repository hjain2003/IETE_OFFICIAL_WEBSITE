import React from 'react'
import './About.css';

const About = () => {
    return (
        <>
            <div className="about_container">

                <div className="about_content">
                    <h1 id="about_heading">About Us</h1>
                    <div id="about_intro">IETE is India's leading recognised, professional and national society devoted to the advancement of Science & Technology. Its Patiala Chapter is looked after by the students of TIET, Patiala</div>
                    <div className="about_cards">
                        <div className="row1">
                            <div className="about_card">
                                <div className="message-div">
                                    <h1 >Workshops</h1>
                                    <p>We understand that school didn't really make it all that easy for you to gain tech skills outside of your textbooks. Which is why throughout the first year we conduct a myriad of workshops, ranging from web-development and machine learning to basics of micro-controllers like arduino.</p>
                                </div>
                            </div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                            <div className="about_card">
                                <div className="message-div" id="project_card">
                                    <h1>Projects</h1>
                                    <p>Projects are important! We know you have it in you to crack those written exams but how are you going to differentiate yourself from the rest of the herd? Which is where projects come in, we have a bunch of live projects that you can contribute to and learn from as a member.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="about_card">
                                <div className="message-div">
                                    <h1>Funding</h1>
                                    <p>Wanted to build a cool bot but can't really afford the components? Don't worry we have you covered!</p>
                                </div>
                            </div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                            <div className="about_card">
                                <div className="message-div" id="people_card">
                                    <h1>People</h1>
                                    <p>A like minded peer group is at the fore front of what we offer, from attending hackathons together or staying up all night trying to debug a circuit building real world connections is what we're all about.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
