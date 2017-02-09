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

function tests () {
  function uniq (a) {
    var seen = {};
    return a.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }

  function inANotB (a, b) {
    return a.filter((elem, index) => {
      if (b.indexOf(elem) === -1) {
        return true;
      } else {
        return false;
      }
    });
  }

  const bev = JSON.parse(fs.readFileSync('bev.json', 'utf-8'));
  let usedIngredients = [];
  let ingredients = [];
  for (let i = 0; i < bev.drinks.length; i++) {
    for (let j = 0; j < bev.drinks[i].ingredients.length; j++) {
      usedIngredients.push(bev.drinks[i].ingredients[j]);
    }
  }
  usedIngredients = uniq(usedIngredients);
  for (let i = 0; i < bev.ingredients.length; i++) {
    ingredients.push(bev.ingredients[i].name);
  }
  console.log('unused ingredients in json:');
  console.log(inANotB(ingredients, usedIngredients));
  console.log('used ingredients not in json:');
  console.log(inANotB(usedIngredients, ingredients));
}

function blankIngredients () {
  const bev = JSON.parse(fs.readFileSync('bev.json', 'utf-8'));
  for (let i = 0; i < bev.drinks.length; i++) {
    bev.drinks[i].amounts = {};
    bev.drinks[i].procedure = '';
    for (let j = 0; j < bev.drinks[i].ingredients.length; j++) {
      let currentIng = bev.drinks[i].ingredients[j];
      bev.drinks[i].amounts[currentIng] = 1;
    }
  }
  fs.writeFile('bev.json', JSON.stringify(bev));
}

function drinksWith (ingredient) {
  const bev = JSON.parse(fs.readFileSync('bev.json', 'utf-8'));

}
