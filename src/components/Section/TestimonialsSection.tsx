import React from 'react';
import styles from './Section.module.css';

const TestimonialsSection: React.FC = () => (
  <section className={styles.section + ' testimonials'}>
    <div className="testimonials_headline">
      <h3>Testimonials</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent elementum commodo.</p>
      <a href="#" className="button3">Explore more &gt;</a>
    </div>
    <div className="lenta-vert2">
      <div className="lenta2">
        <div className="otziv">
          <img src="/img/otzyv ava.png" alt="avatar" />
          <div className="adam-vert2">
            <h1>Adam Smith</h1>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet proin ut urna sit. Varius sed euismod at est, commodo sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi.”</p>
          </div>
        </div>
        <div className="otziv2">
          <img src="/img/otzyv ava.png" alt="avatar" />
          <div className="adam-vert2">
            <h1>Jane Doe</h1>
            <p>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”</p>
          </div>
        </div>
      </div>
      <div className="lentabuttons2">
        <span className="slider-arrow2" data-direction="left">&lt;</span>
        <span className="slider-arrow2" data-direction="right">&gt;</span>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
