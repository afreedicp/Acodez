import React from 'react';
import './styles.css';
import PossibilitiesCard from '../../lib/PossibilitiesCard';
import { possibilitiesData } from '../../assets/Data/foldDAta.js';
const Possibilities = () => {
  return (
    <div className='Possibilities-container'>
      <h1>
        Join us at DeeCee, where educational <br />
        excellence meets limitless possibilities.
      </h1>
      {possibilitiesData.map((item, index) => {
        return (index + 1) % 2 === 0 ? (
          <PossibilitiesCard
            align={'left'}
            image={item.image}
            head={item.head}
            description={item.description}
            subhead={item.subhead}
          />
        ) : (
          <PossibilitiesCard
            align={'right'}
            image={item.image}
            head={item.head}
            subhead={item.subhead}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default Possibilities;
