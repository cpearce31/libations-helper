import React from 'react';

let resultStyle = {
  width: 300,
  border: '1px solid gray',
  padding: 10
};

const btnStyle = {
  float: 'right'
};

const spanStyle = {
  float: 'right',
  margin: '0 10px'
};

const Result = (props) => {
  const style = Object.assign(resultStyle, props.style);
  if (props.isIngredient) {
    return (
      <div style={style}>
        <span>{props.name}</span>
        <button
          style={btnStyle}
          type='button'
          className='addIngredient'
          onClick={(event) => {
            props.addIngredient(event.target);
          }}
        >Add</button>
        <span style={spanStyle}>Ingredient</span>
      </div>
    );
  } else {
    return (
      <div
        style={style}
        data-name={props.name}
        onClick={(event) => {
          props.openModal('drink', event.target);
        }}
      >
        <span>{props.name}</span>
        <span style={spanStyle}>Cocktail</span>
      </div>
    );
  }
};

export default Result;
