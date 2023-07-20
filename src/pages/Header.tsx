import logo from '../assets/images/logo.jpeg';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <a className='logo' href='#'><img src={logo} /></a>
      <div className='other-links'>
        <a className='header-links' href='#home'>Home</a>
        <a className='header-links' href='#vision-mission'>Vision/Mission</a>
        <a className='header-links' href='#objectives'>Objectives</a>
        <a className='header-links' href='#approaches-development'>Approaches</a>
        <a className='header-links' href='#targets'>Targets</a>
      </div>
    </div>
  );

}

export default Header;
