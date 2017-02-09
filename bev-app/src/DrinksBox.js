import React from 'react';
import data from './data.js';
import Drink from './Drink.js';

let key = 0;

const constructDrink = (elem) => {
  key++;
  return (
    <Drink
      key={key}
      name={elem.name}
      ingredients={elem.ingredients.join(' ')}
    />
  );
};

const DrinksBox = (props) => {
  return (
    <div>
      <h2>You can make:</h2>
      <div>
        {props.canMake.map(constructDrink)}
      </div>
      <h2>Almost there:</h2>
      <div>
        {props.cantMake.map(constructDrink)}
      </div>
    </div>
  );
};

export default DrinksBox;
