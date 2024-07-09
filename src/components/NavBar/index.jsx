import React from 'react';
import Image from 'next/image'; 

import logo from '../../assets/images/news_logo.svg';
import "./NavBar.scss";


const NavBar = () => {
  return (
    <nav className="app-navbar">
      <div className="logo-container">
        <Image className="logo" src={logo} alt="Logo" width={75} height={75} />
      </div>
      <h4 className="mb-0 title">Network</h4>
    </nav>
  );
};

export default NavBar;
