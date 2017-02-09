import React, {Component} from 'react';
import data from './data.js';
import Drink from './Drink.js';

let key = 0;

const constructDrink = (elem) => {
  key++;
  return (
    <Drink
      key={key}
      name={elem.name}
      ingredients={elem.ingredients.join(' ')}
    />
  );
};

class DrinksBox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      canMake: [],
      cantMake: data.drinks
    };
  }

  render () {
    return (
      <div>
        <h2>You can make:</h2>
        <div>
          {this.state.canMake.map(constructDrink)}
        </div>
        <h2>Almost there:</h2>
        <div>
          {this.state.cantMake.map(constructDrink)}
        </div>
      </div>
    );
  }
}

export default DrinksBox;
