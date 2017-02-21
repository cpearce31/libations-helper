import React from 'react';

const Ingredient = (props) => {
  return (
    <div
      onClick={(event) => props.openModal('ingredient', event.target)}
      data-name={props.name}
      className='bar-ingredient'
    >
      <span>{props.name}</span>
      <button
        type='button'
        className='btn-close'
        onClick={(event) => props.removeIngredient(event.target)}
      >&#x2716;</button>
    </div>
  );
};

export default Ingredient;
