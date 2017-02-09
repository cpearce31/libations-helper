const canIMake = (bar, drinks) => {
  let cantMake = [];
  let canMake = [];

  for (let i = 0; i < drinks.length; i++) {
    let missingCount = 0;
    let missingIngs = [];
    for (let j = 0; j < drinks[i].ingredients.length; j++) {
      if (bar.indexOf(drinks[i].ingredients[j]) === -1) {
        missingCount++;
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

export default canIMake;
