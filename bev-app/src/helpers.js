import data from './data.js';

const canIMake = (bar, drinks) => {
  let cantMake = [];
  let canMake = [];

  for (let i = 0; i < drinks.length; i++) {
    let missingCount = 0;
    let missingIngs = [];
    for (let j = 0; j < drinks[i].ingredients.length; j++) {
      if (bar.indexOf(drinks[i].ingredients[j]) === -1) {
        missingCount++;
        // eslint-disable-next-line
        missingIngs.push[drinks[i].ingredients[j]];
      }
    }
    if (missingCount > 0) {
      let entry = JSON.parse(JSON.stringify(drinks[i]));
      entry.missingCount = missingCount;
      entry.missingIngredients = missingIngs;
      cantMake.push(entry);
    } else {
      canMake.push(drinks[i]);
    }
  }
  cantMake.sort((a, b) => {
    return a.missingCount - b.missingCount;
  });
  return {
    canMake: canMake,
    cantMake: cantMake
  };
};

const autocomplete = (input) => {
  let suggestions = [];
  if (input.length > 2) {
    for (let i = 0; i < data.ingredients.length; i++) {
      if (data.ingredients[i].name.includes(input.toLowerCase())) {
        suggestions.push(data.ingredients[i]);
      } else {
        for (let j = 0; j < data.ingredients[i].terms.length; j++) {
          if (data.ingredients[i].terms[j].includes(input.toLowerCase())) {
            suggestions.push(data.ingredients[i]);
            break;
          }
        }
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

const formatAmount = (amount) => {
  if (typeof amount === 'string') {
    return amount + ' ';
  } else if (amount === 0) {
    return '1 ';
  } else if (amount % 1 === 0) {
    return amount + 'oz ';
  } else {
    let split = amount.toString().split('.');
    if (split[1] === '25') {
      split[1] = '\u00BC';
    } else if (split[1] === '5') {
      split[1] = '\u00BD';
    } else if (split[1] === '75') {
      split[1] = '\u00BE';
    }
    return (split[0] === '0' ? '' : split[0]) + split[1] + 'oz ';
  }
};

export {autocomplete, canIMake, formatAmount};
