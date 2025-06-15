import React from 'react';
import styles from './Main.module.css';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      {/* Перенос основной разметки main из index.html будет здесь */}
      {children}
    </main>
  );
};

export default Main;
