import React from 'react';
const PossibilitiesCard = ({ align, image, description, subhead, head }) => {
  return (
    <div className='PossibilitiesCard-container'>
      {align === 'right' ? (
        <>
          <div className='PossibilitiesCardText-container'>
            <span className='Possibilities-Heading'>
              <h2>{head}</h2> <span>{subhead}</span>
            </span>
            <p>{description}</p>
          </div>
          <div className='Image-container'>
            <img src={image} alt={`${head}`} />
          </div>
        </>
      ) : (
        <>
          <div className='Image-container'>
            <img src={image} alt={`${head}`} />
          </div>
          <div className='PossibilitiesCardText-container'>
            <span className='Possibilities-Heading'>
              <h2>{head}</h2> <span>{subhead}</span>
            </span>
            <p>{description}</p>
          </div>
        </>
      )}
      <div className={`arrow-${align}`}></div>
    </div>
  );
};

export default PossibilitiesCard;
