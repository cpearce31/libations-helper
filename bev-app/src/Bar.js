import React from 'react';
import Ingredient from './Ingredient';

const Bar = (props) => {
  let key = 0;
  return (
    <div>
      <h2>My Bar:</h2>
      <div>
        {props.bar.map((elem) => {
          key++;
          return (
            <Ingredient
              key={key}
              name={elem}
              removeIngredient={props.removeIngredient}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bar;
