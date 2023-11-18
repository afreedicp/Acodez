import React from 'react';
import FeImH from '../../assets/FeaturedIMG.png';
import vector from '../../assets/Vector.svg';
import './styles.css';
const FeatureImage = () => {
  return (
    <div className='Feature-container'>
      <div className='Headers-content'>
        <h4>Premium Course</h4>
        <h1>The early birds batch</h1>
        <h4>Class - 12, session 2023 - 24</h4>
        <div className='Main-head'>Accountancy</div>
        <div className='Text-container'>
          <div className='Support-texts'>
            <img src={vector} alt='Vector' />
            Complete Syllabus
          </div>
          <div className='Support-texts'>
            {' '}
            <img src={vector} alt='Vector' />
            Revision
          </div>{' '}
          <div className='Support-texts'>
            {' '}
            <img src={vector} alt='Vector' />
            Doubt Support
          </div>
        </div>
        <div className='Text-container'>
          <div className='Support-texts'>
            {' '}
            <img src={vector} alt='Vector' />
            Test Series
          </div>
          <div className='Support-texts'>
            {' '}
            <img src={vector} alt='Vector' />
            PDF Notes
          </div>
        </div>
        <div className='NavButton-container'>
          <button className='navButtons'>_</button>
          <button className='navButtons'>_</button>
          <button className='navButtons'>_</button>
          <button className='navButtons'>_</button>
        </div>
      </div>

      <div className='Image-content'>
        <div className='skew-bar'></div>
        <img className='Featured-image' src={FeImH} alt='Featured Image' />
      </div>
    </div>
  );
};

export default FeatureImage;
