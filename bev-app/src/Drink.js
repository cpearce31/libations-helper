import React from 'react';

let drinkStyle = {
  height: 100,
  width: 100,
  border: '1px solid gray'
};

const Drink = (props) => {
  if (props.canMake) {
    return (
      <div style={Object.assign(drinkStyle, props.style)}>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
      </div>
    );
  } else {
    return (
      <div style={drinkStyle}>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <p>{props.missingCount}</p>
      </div>
    );
  }
};

export default Drink;
