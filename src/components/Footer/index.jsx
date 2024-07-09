import React from 'react';
import Image from 'next/image'; 

import logo from '../../assets/images/news_logo.svg';
import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="logo-container">
        <Image className="logo" src={logo} alt="Logo" width={75} height={75} />
        <h4 className="mb-0 title">Network</h4>
      </div>
      <p className="text-center">&copy; {new Date().getFullYear()} News Network. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
