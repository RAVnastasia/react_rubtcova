import React from 'react';
import styles from './Section.module.css';

const AboutSection: React.FC = () => (
  <section className={styles.section + ' text1'}>
    <div className="aboutcompany">
      <p>About company</p>
    </div>
    <div className="info1">
      <div className="lorem">
        <p>Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae sapien</p>
      </div>
      <div className="matiz">
        <p>Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
      </div>
      <div className="number">
        <div className="clients">
          <div className="sto">
            <p>100<label className="redsign">+</label></p>
          </div>
          <div className="numbertext">
            <p>Happy clients</p>
          </div>
        </div>
        <div className="years">
          <div className="zerofive">
            <p>05<label className="redsign">+</label></p>
          </div>
          <div className="numbertext">
            <p>Years in business</p>
          </div>
        </div>
        <div className="total">
          <div className="fivezero">
            <p>50<label className="redsign">+</label></p>
          </div>
          <div className="numbertext">
            <p>Total Memebers</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
