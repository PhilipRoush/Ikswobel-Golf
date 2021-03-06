import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
        showButton();
      }, []);
  
    window.addEventListener('resize', showButton);

    
  
    return (
      
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              IKSWOBEL
              <i className='fas fa-golf-ball' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/matches' className='nav-links' onClick={closeMobileMenu}>
                  Matches 
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/matches/add' className='nav-links' onClick={closeMobileMenu}>
                  Create Match
                </Link>
              </li>
             
              <li className='nav-item'>
                <Link
                  to='/golf-courses'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Golf Courses
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/top-100-golf-courses'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Top 100 US Golf Courses
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/login'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            
  
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGNUP</Button>}
            
            {/* {button && <Button buttonStyle='btn--outline'>LOGIN</Button>} */}
          </div>
        </nav>
      
    );
  }

export default NavBar; 