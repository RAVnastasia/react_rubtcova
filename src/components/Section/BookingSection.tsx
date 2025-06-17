import React from 'react';
import styles from './Section.module.css';

const BookingSection: React.FC = () => (
  <section className={styles.section + ' booking'}>
    <img src="/img/backforbook.png" className="backforbooking" alt="background" />
    <div className="bookingtext">
      <p>Testimonials _______</p>
      <h3>Book a meeting with us</h3>
      <p>Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis. Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In ornare nisl leo odio magna.</p>
    </div>
    <div className="form">
      <form>
        <div>
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="Email" required />
          <input type="tel" id="phone" name="phone" placeholder="Phone (Optional)" />
          <input type="text" id="description" name="description" placeholder="Tell us about the project you are working on (Optional)" />
        </div>
        <div>
          <button type="submit" className="button-small">Submit</button>
        </div>
      </form>
    </div>
  </section>
);

export default BookingSection;
