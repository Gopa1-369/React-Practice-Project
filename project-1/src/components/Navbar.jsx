import React from 'react'
import logo from '../assets/brandlogo.png';
import '../App.css'
const Navbar = () => {
  return (
   <nav className='container'>
    <div className='logo'>
        <img src={logo} alt='logo'/>
    </div>
    <ul className='list'>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
    </ul>
    
    <button className='button'>Login</button>
   </nav>
  )
}

export default Navbar