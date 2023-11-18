import React from 'react';
import './styles.css';
import group24 from '../../assets/Group24.svg';
import FoldCard from '../../lib/FoldCard';
const StatusTab = () => {
  return (
    <div className='Tab-container'>
      <div className='Status-container'>
        <img src={group24} alt='Status' />
        <span className='Title-tab'>
          Students love us. Choose excellence. Choose success. Choose DeeCee.
        </span>
      </div>
      <div>
        <FoldCard />
      </div>
    </div>
  );
};

export default StatusTab;
