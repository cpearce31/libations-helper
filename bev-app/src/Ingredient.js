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
    <div style={divStyle}>
      <span>{props.name}</span>
      <button type='button' className='removeIngredient' style={btnStyle}>X</button>
    </div>
  );
};

export default Ingredient;
