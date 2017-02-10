import React from 'react';

const btnStyle = {
  float: 'right',
  background: 'red'
};

const divStyle = {
  height: 30
};

const Ingredient = (props) => {
  return (
    <div
      style={divStyle}
      onClick={(event) => props.openModal('ingredient', event.target)}
      data-name={props.name}
    >
      <span>{props.name}</span>
      <button
        type='button'
        className='removeIngredient'
        style={btnStyle}
        onClick={(event) => props.removeIngredient(event.target)}
      >X</button>
    </div>
  );
};

export default Ingredient;
