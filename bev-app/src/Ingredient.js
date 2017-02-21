import React from 'react';

const Ingredient = (props) => {
  return (
    <div
      onClick={(event) => props.openModal('ingredient', event.target)}
      data-name={props.name}
    >
      <span>{props.name}</span>
      <button
        type='button'
        className='removeIngredient'
        onClick={(event) => props.removeIngredient(event.target)}
      >X</button>
    </div>
  );
};

export default Ingredient;
