import React from 'react';
import styles from './Section.module.css';

const PortfolioSection: React.FC = () => (
  <section className={styles.section + ' portfolio'}>
    <div className="portfoliotext">
      <h3>Portfolio</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
      <a href="#" className="button3">More portfolio &gt;</a>
    </div>
    <div className="lenta-vert">
      <div className="lenta">
        <div className="game"><img src="/img/games.png" alt="игры" /></div>
        <div className="game2"><img src="/img/game2.png" alt="игры" /></div>
      </div>
      <div className="lentabuttons">
        <span className="slider-arrow" data-direction="left">&lt;</span>
        <span className="slider-arrow" data-direction="right">&gt;</span>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
