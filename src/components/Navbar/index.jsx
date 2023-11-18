import React from 'react';
import DEECEE from '../../assets/DEECEE.svg';
import Home from '../../assets/home.svg';
import './styles.css';
const Navbar = () => {
  return (
    <div className='Navbar-container'>
      <div className='NavbarImage-container'>
        <img src={DEECEE} alt='logo' />
      </div>
      <div className='Navigation-container'>
        <img src={Home} />
        <button>Courses Offered</button>
        <button>Join our Live Classes</button>
        <button>Free Videos</button>
        <button>Study Material</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
