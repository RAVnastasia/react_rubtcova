import React from 'react';
import styles from './Section.module.css';

const SponsorSection: React.FC = () => (
  <section className={styles.section + ' sponsor'}>
    <img src="/img/sponsors2.png" alt="sponsors" />
  </section>
);

export default SponsorSection;
