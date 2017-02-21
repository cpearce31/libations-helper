import React from 'react';
import Drink from './Drink.js';

const DrinksBox = (props) => {
  let key = 0;
  const constructDrink = (elem, canMake) => {
    key++;
    return (
      <Drink
        key={key}
        name={elem.name}
        canMake={canMake}
        ingredients={elem.ingredients.join(', ')}
        missingCount={elem.missingCount ? elem.missingCount : 0}
        openModal={props.openModal}
      />
    );
  };
  return (
    <div className='drinks'>
      <h2>Drinks you can make</h2>
      <div className='drinks-section'>
        {props.canMake.map((constructDrink))}
      </div>
      <h2>The rest</h2>
      <div className='drinks-section'>
        {props.cantMake.map(constructDrink)}
      </div>
    </div>
  );
};

export default DrinksBox;
