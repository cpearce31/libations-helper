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
    <div>
      <h2>You can make:</h2>
      <div>
        {props.canMake.map((constructDrink))}
      </div>
      <h2>Almost there:</h2>
      <div>
        {props.cantMake.map(constructDrink)}
      </div>
    </div>
  );
};

export default DrinksBox;
