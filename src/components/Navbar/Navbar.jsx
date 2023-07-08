import React, { useState } from 'react'
import './Navbar.css';

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        console.log(showNavbar);
        if (showNavbar == false){
            setShowNavbar(true);}
        if(showNavbar ==true){
            setShowNavbar(false);}
    }
    return (
        <>
            <nav className="navbar">
                <span className='menu_items'><a href="">Home</a></span>
                <span className='menu_items'><a href="">About</a></span>
                <span className='menu_items'><a href="">Our Team</a></span>
                <span id="heading">IETE Student's Forum</span>
                <span className='menu_items'><a href="">Projects</a></span>
                <span className='menu_items'><a href="">Gallery</a></span>
                <span className='menu_items'><a href="">Contact</a></span>
            </nav>

            <div className="side_bar_and_button">
            {showNavbar &&
                <div className="side_navbar">
                    <div className="side_menu_items_container">
                        <span className='side_menu_items'><a href="">Home</a></span>
                        <span className='side_menu_items'><a href="">About</a></span>
                        <span className='side_menu_items'><a href="">Our Team</a></span>
                        <span className='side_menu_items'><a href="">Projects</a></span>
                        <span className='side_menu_items'><a href="">Gallery</a></span>
                        <span className='side_menu_items'><a href="">Contact</a></span>
                    </div>
                </div>
            }
                <div className="nav_button" onClick={toggleNavbar}>X</div>
            </div>

        </>
    )
}

export default Navbar
