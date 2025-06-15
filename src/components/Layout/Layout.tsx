import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
