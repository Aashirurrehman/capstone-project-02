import React from 'react'
import Logo from '../components/movielogo.png'
import './Header.css'


const Header = () => {
  return (
    
    <div className='header'>
      
        <img src={Logo} className="logo"/>
      
        
    </div>
  )
}

export default Header;