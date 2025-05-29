import React from 'react'
import '../Styles/Navbar.css'
function Navbar(){
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>Food</div>
            <ul className='navbar-links'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        
        </nav>
    )
}
export default Navbar