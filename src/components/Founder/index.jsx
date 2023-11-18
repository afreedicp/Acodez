import React from 'react';
import './styles.css';
import group from '../../assets/Group16.svg';
import Founder from '../../assets/founder.png';
import drop from '../../assets/drop.svg';

const Founders = () => {
  return (
    <div className='Founders-container'>
      <div className='FoundersText-container'>
        <h1>Message from the Founder</h1>
        <p>
          I am humbled and overjoyed to stand here today, reflecting on the
          remarkable journey that has brought us from a humble beginning to a
          soaring pinnacle. Our story began in 2014, with a single student, a
          flicker of passion, and a dream to transform education. From that
          small room in my house, DeeCee took its first step, fueled by
          determination and a belief in the power of learning.
        </p>
        <p>
          As I reminisce about those early days, I am reminded of the challenges
          we faced, the late nights spent refining our vision, and the
          unwavering dedication of our team. Every obstacle we encountered was
          met with resilience, every setback met with renewed determination. It
          was a journey of passion, innovation, and a commitment to pushing
          boundaries.
        </p>
        <div className='Founders-Button-container'>
          <button className=''>Read more</button>
          <img src={group} alt='group' />
        </div>
      </div>
      <div className='Founder-imagecontainer'>
        <img className='drop-image-top' src={drop} alt='drop' />
        <img className='Founder-image' src={Founder} alt='Founder' />
        <img className='drop-image' src={drop} alt='drop' />
      </div>
    </div>
  );
};

export default Founders;
