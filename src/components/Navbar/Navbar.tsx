import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar + ' main-menu'}>
      <ul className="menu">
        <li className="main-item"><a href="#" className="button">About</a></li>
        <li className="main-item">
          <a href="#" className="button">IT Services</a>
          <ul className="sub-menu">
            <li><a href="#">IT Services</a></li>
            <li><a href="#">IT Services</a></li>
            <li><a href="#">IT Services</a></li>
          </ul>
        </li>
        <li className="main-item"><a href="#" className="button">Portfolio</a></li>
        <li className="main-item"><a href="#" className="button2" id="openModal">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
