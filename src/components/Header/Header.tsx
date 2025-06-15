import React from 'react';
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="logotype">
        <a href="/">
          {/* Замените src на актуальный путь к логотипу, если потребуется */}
          <img src="/img/Component 3.png" alt="Логотип" />
        </a>
      </div>
      <div className="headerbuttons">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
