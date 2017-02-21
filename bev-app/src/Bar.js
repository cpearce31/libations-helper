import React from 'react';
import Ingredient from './Ingredient.js';
import SuggestionBox from './SuggestionBox.js'

const Bar = (props) => {
  let key = 0;
  return (
    <div className='bar'>
      <h2 className='bar-header'>My Bar</h2>
      <div className='bar-list'>
        {props.bar.length === 0 ? <p>Nothing here yet...</p> : null}
        {props.bar.map((elem) => {
          key++;
          return (
            <Ingredient
              key={key}
              name={elem}
              removeIngredient={props.removeIngredient}
              openModal={props.openModal}
            />
          );
        })}
      </div>
      <SuggestionBox
        suggestions={props.suggestions}
        removeSuggestion={props.removeSuggestion}
      />
    </div>
  );
};

export default Bar;
