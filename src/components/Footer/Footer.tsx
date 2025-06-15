import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <img src="/img/logofooter.png" className="logotypefooter" alt="Логотип футера" />
      <div className="footerinfo">
        <div className="contacts">
          <div className="contactadress">
            <img src="/img/phoneicon.png" className="iconn" alt="phone" />
            <p>+92 300 1234567</p>
          </div>
          <div className="contactadress">
            <img src="/img/mailicon.png" className="iconn" alt="mail" />
            <p>info@nixxsol.com</p>
          </div>
          <div className="contactadress phoneiconn">
            <img src="/img/gps.png" className="iconn" alt="gps" />
            <p>Lorem ipsum dolor sit amet consectetur. Dui libero lectus pulvinar mattis a.</p>
          </div>
        </div>
        <div className="navigation">
          <div className="fourbuttons">
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Contact Us</p>
          </div>
          <div className="stayinconnection">
            <h3>Stay in Connection</h3>
            <div className="emailaddress">
              <input type="email" id="email" name="email" placeholder="Email Address" required />
              <button type="submit" className="button-footer">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <div className="red">
        <p>© 2022 Nixxsol All Rights Reserved.</p>
        <div className="socseti">
          <img src="/img/facebook.png" alt="фейсбук" className="socialmediaicon" />
          <img src="/img/instagram.png" alt="инстаграм" className="socialmediaicon" />
          <img src="/img/twitter.png" alt="твиттер" className="socialmediaicon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
