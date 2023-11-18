import React from 'react';
import { highLightsCard } from '../assets/Data/foldDAta.js';
const FoldCard = () => {
  console.log(highLightsCard);
  return (
    <div className='FoldCard-container'>
      {highLightsCard.map((item) => {
        return (
          <div className='Card'>
            <h3>{item.head}</h3>
            <div className='FoldText-container'>
              <div className='Large-foldtext'>{item.value}</div>
              <span> + </span>
              <div className='Substring-foldText'>{item.substring}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoldCard;
