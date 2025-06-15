import React from 'react';
import styles from './Section.module.css';

const BridgingSection: React.FC = () => (
  <section className={styles.section + ' Bridging'}>
    <p>Bridging the gap between ideas and reality</p>
    <div className="Bridgingimg">
      <img src="/img/Frame.png" alt="Фото главное" />
    </div>
  </section>
);

export default BridgingSection;
