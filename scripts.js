'use strict';
const fs = require('fs');

function writeIngredients () {
  const text = fs.readFileSync('ingredients.txt', 'utf-8');
  const arr = text.split('\n');

  let json = {
    "ingredients": []
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      json.ingredients.push(
        {
          "name":arr[i].toLowerCase(),
          "id":i
        }
      );
    }
  }
  let output = JSON.stringify(json);
  return output;
}

function writeDrinks () {
  const text = fs.readFileSync('drinks.txt', 'utf-8');
  const arr = text.split('\n');
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      let ingredients = arr[i].split(':')[1];
      ingredients = ingredients.split(',');
      for (let j = 0; j < ingredients.length; j++) {
        ingredients[j] = ingredients[j].toLowerCase();
      }
      var drink = {
        'name': arr[i].split(':')[0].toLowerCase(),
        'id': i,
        'ingredients': ingredients,
        'importance': 0
      };
    }
    output.push(drink);
  }
  return output;
}
