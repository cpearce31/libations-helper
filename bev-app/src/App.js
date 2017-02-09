import React, { Component } from 'react';
import data from './data.js';
import SearchBox from './SearchBox.js';
import DrinksBox from './DrinksBox.js';
import Bar from './Bar.js';
import DrinkModal from './DrinkModal.js';
import {canIMake} from './helpers.js';
import IngredientModal from './IngredientModal.js';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      canMake: [],
      cantMake: [],
      bar: [],
      drinkModalOpen: false,
      drinkModalName: data.drinks[0].name,
      drinkModalAmounts: data.drinks[0].amounts,
      drinkModalProcedure: data.drinks[0].procedure,
      ingModalOpen: false,
      ingModalName: '',
      ingModalLink: ''
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
  }

  removeIngredient (target) {
    let ingredient = target.previousSibling.textContent;
    let index = this.state.bar.indexOf(ingredient);
    let newBar = this.state.bar;
    newBar.splice(index, 1);
    this.setState({
      bar: newBar
    });
  }

  addIngredient (target) {
    let ingredient = target.previousSibling.textContent;
    if (this.state.bar.indexOf(ingredient) === -1) {
      let newBar = this.state.bar.slice(0);
      newBar.push(ingredient);
      this.setState({
        bar: newBar
      });
    }
  }

  openModal (type, target) {
    if (type === 'drink') {
      if (target.className === 'drinkInfo') {
        target = target.parentNode;
      }
      for (let i = 0; i < data.drinks.length; i++) {
        if (data.drinks[i].name === target.dataset.name) {
          this.setState({
            drinkModalOpen: true,
            drinkModalName: data.drinks[i].name,
            drinkModalAmounts: data.drinks[i].amounts,
            drinkModalProcedure: data.drinks[i].procedure
          });
        }
      }
    } else if (type === 'ingredient') {
      for (let i = 0; i < data.ingredients.length; i++) {
        if (data.ingredients[i].name === target.dataset.name) {
          this.setState({
            ingModalOpen: true,
            ingModalName: data.ingredients[i].name,
            ingModalLink: data.ingredients[i].link
          });
        }
      }
    }
  }

  closeModal () {
    this.setState({
      drinkModalOpen: false,
      ingModalOpen: false
    });
  }

  render () {
    return (
      <div>
        <IngredientModal
          isOpen={this.state.ingModalOpen}
          ingName={this.state.ingModalName}
          url={this.state.ingModalLink}
          closeModal={this.closeModal}
        />
        <DrinkModal
          isOpen={this.state.drinkModalOpen}
          drinkName={this.state.drinkModalName}
          amounts={this.state.drinkModalAmounts}
          procedure={this.state.drinkModalProcedure}
          closeModal={this.closeModal}
        />
        <SearchBox
          addIngredient={this.addIngredient}
          openModal={this.openModal}
        />
        <Bar
          bar={this.state.bar}
          removeIngredient={this.removeIngredient}
        />
        <DrinksBox
          openModal={this.openModal}
          canMake={canIMake(this.state.bar, data.drinks).canMake}
          cantMake={canIMake(this.state.bar, data.drinks).cantMake}
        />
      </div>
    );
  }
}

export default App;
