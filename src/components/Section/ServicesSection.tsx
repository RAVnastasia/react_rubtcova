import React from 'react';
import styles from './Section.module.css';

const ServicesSection: React.FC = () => (
  <section className={styles.section + ' services'}>
    <img className="servicesback" src="/img/back2.png" alt="background" />
    <p className="textt">Services</p>
    <div className="containers">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="kartochka" key={i}>
          <div className="logo2">
            <img className="kolba" src="/img/Vector.png" alt="лого колбы" />
          </div>
          <div className="kartochkatext">
            <p className="kartochkabold">Branding Design</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
