import React, { Component } from 'react';
import data from './data.js';
import SearchBox from './SearchBox.js';
import DrinksBox from './DrinksBox.js';
import Bar from './Bar.js';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      canMake: [],
      cantMake: data.drinks,
      bar: []
    };
    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks (event) {
    let target = event.target;
    let targetClass = target.className;
    let ingredient;
    let newBar;
    switch (targetClass) {

      case 'addIngredient':
        ingredient = target.previousSibling.textContent;
        if (this.state.bar.indexOf(ingredient) === -1) {
          newBar = this.state.bar.slice(0);
          newBar.push(ingredient);
          this.setState({
            bar: newBar
          });
        }
        break;

      case 'removeIngredient':
        ingredient = target.previousSibling.textContent;
        let index = this.state.bar.indexOf(ingredient);
        newBar = this.state.bar.splice(index, 1);
        this.setState({
          bar: newBar
        });
        break;
    }
  }

  render () {
    return (
      <div onClick = {this.handleClicks}>
        <SearchBox addIngredient={this.addIngredient}/>
        <Bar bar={this.state.bar} />
        <DrinksBox/>
      </div>
    );
  }
}

export default App;
