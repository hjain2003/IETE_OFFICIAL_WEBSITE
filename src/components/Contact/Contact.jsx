import React from 'react'
import './Contact.css';
import iete_logo from '../../assets/Logo_icons/IETE_Logo.png'
import arrow from '../../assets/Logo_icons/pointer_arrow.png'

const Contact = () => {
    return (
        <div className='contact_section'>
            <div className="contact_content">
                <div className="contact_row">
                    <img src={iete_logo} alt="" />

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="useful_links">
                        <span id="useful_heading"><b>Useful links</b></span>
                        <hr />
                        <span className="arrow_link" id="first_arrow"><span><img src={arrow} alt="" /></span>&nbsp;<span>Home</span></span><hr id="other_hr" />
                        <span className="arrow_link" ><span><img src={arrow} alt="" /></span>&nbsp;<span>About Us</span></span><hr id="other_hr" />
                        <span className="arrow_link"><span><img src={arrow} alt="" /></span>&nbsp;<span>Our Team</span></span><hr id="other_hr" />
                        <span className="arrow_link"><span><img src={arrow} alt="" /></span>&nbsp;<span>Projects</span></span>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="hello_section">
                        <span id="useful_heading" className='contact_head'><b>Contact Us</b></span>
                        <hr />
                        <br />
                        <span><b>Phone :</b>+91 9999999999</span>
                        <span><b>Email :</b> iete_sc@thapar.edu</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
