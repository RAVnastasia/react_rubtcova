import React from 'react';
import styles from './Section.module.css';

const MentorcitySection: React.FC = () => (
  <section className={styles.section + ' mentorcity'}>
    <img src="/img/mentorcity.png" alt="спонсоры" />
  </section>
);

export default MentorcitySection;
