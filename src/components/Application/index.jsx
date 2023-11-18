import React from 'react';
import './styles.css';
import google from '../../assets/google.svg';
import mobileB from '../../assets/mobileB.png';
import mobileB2 from '../../assets/mobileb2.png';
import mobileC from '../../assets/mobilec.svg';
import mobileC2 from '../../assets/mobilec2.png';

const Application = () => {
  return (
    <div className='Application-container-Tab'>
      <div className='Application-container'>
        <h1>Get the DeeCee App</h1>
        <h3>
          Learn from the top faculties along with Rajat Sir anytime and anywhere
          on the DeeCee App
        </h3>
        <img src={google} alt='google' />
      </div>
      <div className='Mobile-Image-container'>
        <img className='Mobile-Image-large' src={mobileB} alt='mobile1' />
        <img className='Mobile-Image-large' src={mobileC} alt='mobile2' />
        <img className='Mobile-Image' src={mobileC2} alt='mobile3' />
        <img className='Mobile-Image' src={mobileB2} alt='mobile4' />
      </div>
    </div>
  );
};

export default Application;
