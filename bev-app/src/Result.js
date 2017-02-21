import React from 'react';

const Result = (props) => {
  if (props.isIngredient) {
    return (
      <div
        className='result'
        data-name={props.name}
        onClick={(event) => {
          props.openModal('ingredient', event.target);
        }}
      >
        <span>{props.name}</span>
        <span className='result-descript'>Ingredient</span>
        <div className="btn-offset">
          <button
            onClick={(event) => {
              props.addIngredient(event.target);
            }}
          >Add</button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className='result'
        data-name={props.name}
        onClick={(event) => {
          props.openModal('drink', event.target);
        }}
      >
        <span>{props.name}</span>
        <span className='result-descript'>Cocktail</span>
        <div className='btn-offset'></div>
      </div>
    );
  }
};

export default Result;
