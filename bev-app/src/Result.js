import React from 'react';

const Result = (props) => {
  if (props.isIngredient) {
    return (
      <div
        data-name={props.name}
        onClick={(event) => {
          props.openModal('ingredient', event.target);
        }}
      >
        <span>{props.name}</span>
        <button
          onClick={(event) => {
            props.addIngredient(event.target);
          }}
        >Add</button>
        <span>Ingredient</span>
      </div>
    );
  } else {
    return (
      <div
        data-name={props.name}
        onClick={(event) => {
          props.openModal('drink', event.target);
        }}
      >
        <span>{props.name}</span>
        <span>Cocktail</span>
      </div>
    );
  }
};

export default Result;
