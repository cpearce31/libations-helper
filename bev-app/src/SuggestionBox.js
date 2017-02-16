import React from 'react';
import {usedIn} from './helpers.js';

const suggestions = [
  {
    ingredients: ['simple syrup'],
    text: `Do you have sugar and water? You could make simple syrup. It's featured in ${usedIn('simple syrup')} recipes.`
  },
  {
    ingredients: ['lemon juice', 'lemon peel', 'lemon wheel'],
    text: `Do you have a lemon? Add lemon juice, lemon peel, and lemon wheel. One of the three is featured in ${usedIn('lemon juice') + usedIn('lemon peel') + usedIn('lemon wheel')} recipes.`
  },
  {
    ingredients: ['gin'],
    text: `Can you find some gin? It appears in ${usedIn('gin')} recipes.`
  },
  {
    ingredients: ['soda water'],
    text: `Got some club soda? It shows up in ${usedIn('soda water')} recipes.`
  },
  {
    ingredients: ['rye'],
    text: `Can you get some rye whiskey? It's featured in ${usedIn('rye')} recipes.`
  },
  {
    ingredients: ['lime juice', 'lime wheel'],
    text: `Got a lime? Then you have lime juice and lime wheels. One or the other appears in ${usedIn('lime juice') + usedIn('lime wheel')} recipes.`
  }
];

const SuggestionBox = (props) => {
  const renderSuggestions = () => {
    let JSXResults = [];
    for (let i = 0; i < suggestions.length; i++) {
      for (let j = 0; j < suggestions[i].ingredients.length; j++) {
        if (props.suggestions.indexOf(suggestions[i].ingredients[j]) !== -1 &&
            JSXResults.length < 3) {
          JSXResults.push(
            <div key={(i + 1) * (j + 2)}>
              <span>{suggestions[i].text}</span>
              <button
                onClick={() => {
                  props.removeSuggestion(suggestions[i].ingredients);
                }}
              >X</button>
            </div>
          );
          break;
        }
      }
    }
    return JSXResults;
  };
  return (
    <div>
      {renderSuggestions()}
    </div>
  );
};

export default SuggestionBox;
