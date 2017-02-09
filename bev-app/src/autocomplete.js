import data from './data.js';

const autocomplete = (input) => {
  let suggestions = [];
  if (input.length > 2) {
    for (let i = 0; i < data.ingredients.length; i++) {
      if (data.ingredients[i].name.includes(input.toLowerCase())) {
        suggestions.push(data.ingredients[i]);
      }
    }
    for (let i = 0; i < data.drinks.length; i++) {
      if (data.drinks[i].name.includes(input.toLowerCase())) {
        suggestions.push(data.drinks[i]);
      }
    }
  };
  return suggestions;
};

export default autocomplete;
